import React from 'react';
import {
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Theme,
    IconTab
} from '@carbon/react';
import { Dashboard, Code } from '@carbon/icons-react';
import Logger from '../../components/Logger';
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
                            <Dashboard  aria-label="dashboard" size={20}/>
                        </IconTab>
                        <IconTab label='problem-optimization'>
                            <Code aria-label='problemCode' size={20}/>
                        </IconTab>
                        <Tab>Simulated Annealing</Tab>
                    </TabList>
                </Theme>
                <Logger/>
                <TabPanels>
                    <TabPanel>
                        <CrossOptimizationDashboard 
                            algorithms={list_inputs_algorithms_combinatorial}
                            additionalArgs={{
                                'SimulatedAnnealing':[]
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
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default CombinatorialOptimizationPage;