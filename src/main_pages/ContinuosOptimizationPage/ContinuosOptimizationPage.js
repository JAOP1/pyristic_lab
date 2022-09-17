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
  import { Dashboard, Code } from '@carbon/icons-react';
import FormStepsView from '../../views/FormStepsView';
import CrossOptimizationDashboard from '../../views/CrossOptimizationDashboard/CrossOptimizationDashboard';
import AccordionEditorList from '../../views/ContinuosOptimizationEditor/AccordionEditorList';
import { 
    SETTINGS_AG,
    TABS_AG,
    SETTINGS_EP,
    TABS_EP,
    SETTINGS_EE,
    TABS_EE
} from '../../constants/evolutionarySettingView';
import { list_inputs_algorithms } from '../../constants/continuosGeneralParams';
import { HOST } from '../../constants/settings';

const ContinuosOptimizationPage = () => {
    const AG_storage = useSelector((state) => state.continuosAG);
    const EE_storage = useSelector((state) => state.continuosEE);
    const EP_storage = useSelector((state) => state.continuosEP);
    const ARRAY_ITEMS = [
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
            fileName:'search_space'
        }
    ];
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
                        <Tab>Genetic</Tab>
                        <Tab>Evolutionary Strategy</Tab>
                        <Tab>Evolutive programming</Tab>
                    </TabList>
                </Theme>
                <TabPanels>
                    <TabPanel>
                        <CrossOptimizationDashboard 
                            algorithms={list_inputs_algorithms}
                            additionalArgs={{
                                GA:AG_storage,
                                EE:EE_storage,
                                EP:EP_storage
                            }}
                            routeAlgorithm={ ( algorithm ) => `${HOST}/optimize/evolutionary/${algorithm}`}
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