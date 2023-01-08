import React from 'react';
import { useSelector } from 'react-redux';
import {
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Theme,
    IconTab
} from '@carbon/react';
import { Dashboard24, Code24 } from '@carbon/icons-react';
import {
    SETTINGS_COMBINATORIAL_AG,
    TABS_COMBINATORIAL_AG
} from '../../constants/evolutionarySettingView';
import {
    DESCRIPTION_ADDITIONALS,
    CODE_ADDITIONALS
} from '../../constants/texts';
import Logger from '../../components/Logger';
import FormStepsView from '../../views/FormStepsView';
import CrossOptimizationDashboard from '../../views/CrossOptimizationDashboard/CrossOptimizationDashboard';
import AccordionEditorList from '../../views/ContinuosOptimizationEditor';
import { list_inputs_algorithms_combinatorial } from '../../constants/continuosGeneralParams';

const CombinatorialOptimizationPage = () => {
    const OPTIMIZATION_ARRAY_ITEMS = [
        {
            accordion_title:'Minimization function',
            title:'Function',
            fileName:'function',
        },
        {
            accordion_title:'Constraints',
            title:'Array constraints',
            fileName:'constraints'
        },
        {
            accordion_title:'Additionals',
            title:'Problem bounds',
            fileName:'search_space',
            helpText: DESCRIPTION_ADDITIONALS,
            initialCodeText: CODE_ADDITIONALS
        }
    ];
    const SA_FEATURES_ARRAY = [
        {
            accordion_title:'Generate neighbors',
            title:'Generate neighbor',
            fileName:'SA_neighbor_generator',
            initialCodeText:'#Hola mundo'
        },
        {
            accordion_title:'Generate initial solution',
            title:'Generate initial solution',
            fileName:'generator_initial_solution',
        }
    ];
    const AG_storage = useSelector((state) => state.combinatorialAG);

    const getBestSolution = (array_solutions) => {
        return array_solutions.reduce( 
            (prevObj, currentObj) => prevObj.f > currentObj.f ? currentObj: prevObj
            , array_solutions[0]
        );
    };

    const getWorstSolution = (array_solutions) => {
        return array_solutions.reduce( 
            (prevObj, currentObj) => prevObj.f > currentObj.f ? prevObj: currentObj
            , array_solutions[0]
        );
    };
    return (
        <div className='continuos-page '>
            <Tabs defaultSelectedIndex={1}>
                <Theme theme={'g10'}>
                    <TabList aria-label="Tab navigation" iconSize={'lg'}>
                        <IconTab label='dashboard'>
                            {/* <Dashboard  aria-label="dashboard" size={20}/> */}
                            <Dashboard24/>
                        </IconTab>
                        <IconTab label='problem-optimization'>
                            {/* <Code aria-label='problemCode' size={20}/> */}
                            <Code24/>
                        </IconTab>
                        <Tab>Simulated Annealing</Tab>
                        <Tab>Genetic</Tab>
                    </TabList>
                </Theme>
                <Logger/>
                <TabPanels>
                    <TabPanel>
                        <CrossOptimizationDashboard 
                            algorithms={list_inputs_algorithms_combinatorial}
                            additionalArgs={{
                                SimulatedAnnealing:[],
                                CombinatorialAG:AG_storage
                            }}
                            getBestSolution={getBestSolution}
                            getWorstSolution={getWorstSolution}
                        />
                    </TabPanel>
                    <TabPanel>
                        <AccordionEditorList 
                            ARRAY_ITEMS={OPTIMIZATION_ARRAY_ITEMS} 
                        />
                    </TabPanel>
                    <TabPanel>
                        <AccordionEditorList 
                            ARRAY_ITEMS={SA_FEATURES_ARRAY} 
                        />
                    </TabPanel>
                    <TabPanel>
                        <FormStepsView
                            formItems={SETTINGS_COMBINATORIAL_AG}
                            tabs={TABS_COMBINATORIAL_AG}
                            algorithm={'combinatorialAG'}
                        />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default CombinatorialOptimizationPage;