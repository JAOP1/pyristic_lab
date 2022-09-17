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
import ContinuosOptimizationEditor from '../../views/ContinuosOptimizationEditor/ContinuosOptimizationEditor';
import CrossOptimizationDashboard from '../../views/CrossOptimizationDashboard/CrossOptimizationDashboard';
import { 
    SETTINGS_AG,
    TABS_AG,
} from '../../constants/evolutionarySettingView';
import { list_inputs_algorithms } from '../../constants/continuosGeneralParams';

const CombinatorialOptimizationPage = () => {
    const AG_storage = useSelector((state) => state.continuosAG);

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
                <TabPanels>
                    <TabPanel>
                        <CrossOptimizationDashboard 
                            algorithms={[]}
                            dictMethods={{}}
                        />
                    </TabPanel>
                    <TabPanel>
                        <ContinuosOptimizationEditor />
                    </TabPanel>
                    <TabPanel>
                        <FormStepsView 
                            formItems={SETTINGS_AG}
                            tabs={TABS_AG}
                            algorithm={'continuosAG'}
                        />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default CombinatorialOptimizationPage;