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
  import { Dashboard20, Code20 } from '@carbon/icons-react';
import Logger from '../../components/Logger';
import FormStepsView from '../../components/FormStepsView';
import CrossOptimizationDashboard from '../../components/CrossOptimizationDashboard';
import AccordionEditorList from '../../components/AccordionEditorList';
import { 
    SETTINGS_AG,
    TABS_AG,
    SETTINGS_EP,
    TABS_EP,
    SETTINGS_EE,
    TABS_EE
} from '../../constants/evolutionarySettingView';
import {
    DESCRIPTION_FUNCTION,
    DESCRIPTION_CONSTRAINTS,
    DESCRIPTION_ADDITIONALS,
    CODE_FUNCTION,
    CODE_CONSTRAINTS,
    CODE_ADDITIONALS
} from '../../constants/texts';
import { list_inputs_algorithms } from '../../constants/continuosGeneralParams';

const ContinuosOptimizationPage = () => {
    const AG_storage = useSelector((state) => state.continuosAG);
    const EE_storage = useSelector((state) => state.continuosEE);
    const EP_storage = useSelector((state) => state.continuosEP);
    const ARRAY_ITEMS = [
        {
            accordion_title:'Minimization function',
            title:'Function',
            fileName:'function',
            helpText: DESCRIPTION_FUNCTION,
            initialCodeText: CODE_FUNCTION
        },
        {
            accordion_title:'Constraints',
            title:'Array constraints',
            fileName:'constraints',
            helpText: DESCRIPTION_CONSTRAINTS,
            initialCodeText:CODE_CONSTRAINTS
        },
        {
            accordion_title:'Additionals',
            title:'Problem bounds',
            fileName:'search_space',
            helpText: DESCRIPTION_ADDITIONALS,
            initialCodeText: CODE_ADDITIONALS
        }
    ];

    const getBestSolution = (array_solutions) => {
        return array_solutions.reduce( 
            (prevObj, currentObj) => prevObj.f < currentObj.f ? currentObj: prevObj
            , array_solutions[0]
        );
    };

    const getWorstSolution = (array_solutions) => {
        return array_solutions.reduce( 
            (prevObj, currentObj) => prevObj.f > currentObj.f ? currentObj: prevObj
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
                            <Dashboard20/>
                        </IconTab>
                        <IconTab label='problem-optimization'>
                            {/* <Code aria-label='problemCode' size={20}/> */}
                            <Code20/>
                        </IconTab>
                        <Tab>Genetic</Tab>
                        <Tab>Evolutionary Strategy</Tab>
                        <Tab>Evolutive programming</Tab>
                    </TabList>
                </Theme>
                <Logger/>
                <TabPanels>
                    <TabPanel>
                        <CrossOptimizationDashboard 
                            algorithms={list_inputs_algorithms}
                            additionalArgs={{
                                GA:AG_storage,
                                EE:EE_storage,
                                EP:EP_storage
                            }}
                            getBestSolution={getBestSolution}
                            getWorstSolution={getWorstSolution}
                        />
                    </TabPanel>
                    <TabPanel>
                        <AccordionEditorList 
                            ARRAY_ITEMS={ARRAY_ITEMS}
                        />
                    </TabPanel>
                    <TabPanel>
                        <FormStepsView 
                            formItems={SETTINGS_AG}
                            tabs={TABS_AG}
                            algorithm={'continuosAG'}
                        />
                    </TabPanel>
                    <TabPanel>
                        <FormStepsView 
                            formItems={SETTINGS_EE}
                            tabs={TABS_EE}
                            algorithm={'continuosEE'}
                        />                        
                    </TabPanel>
                    <TabPanel>
                        <FormStepsView 
                            formItems={SETTINGS_EP}
                            tabs={TABS_EP}
                            algorithm={'continuosEP'}
                        />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default ContinuosOptimizationPage;