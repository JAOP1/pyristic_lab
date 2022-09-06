import React, { useState } from 'react';
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
    TABS_AG
} from '../../constants/evolutionarySettingView';


const ContinuosOptimizationPage = () => {
    const AG_storage = useSelector((state) => state.continuosAG);
    const EE_storage = useSelector((state) => state.continuosEE);
    const EP_storage = useSelector((state) => state.continuosEP);
    const algorithms = [
        {
            name:'Genetic Algorithm',
            id:'AG'
        },
        {
            name:'Evolutive Programming',
            id:'EP'
        },
        {
            name:'Evolutionary Strategy',
            id:'EE'
        }
    ];

    return (
        <div className='continuos-page '>
            <Tabs defaultSelectedIndex={0}>
                <Theme theme={'g10'}>
                    <TabList aria-label="Tab navigation" iconSize={'lg'}>
                        <IconTab><Dashboard  aria-label="dashboard" size={20}/></IconTab>
                        <IconTab><Code aria-label='problemCode' size={20}/></IconTab>
                        <Tab>Genetic</Tab>
                        <Tab>Evolutionary Strategy</Tab>
                        <Tab>Evolutive programming</Tab>
                    </TabList>
                </Theme>
                <TabPanels>
                    <TabPanel>
                        <CrossOptimizationDashboard 
                            algorithms={algorithms}
                            dictMethods={{
                                AG:AG_storage,
                                EE:EE_storage,
                                EP:EP_storage
                            }}
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
                    <TabPanel>
                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default ContinuosOptimizationPage;