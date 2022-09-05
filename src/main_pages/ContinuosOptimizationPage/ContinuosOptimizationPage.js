import React, { useState } from 'react';
import {
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Theme,
  } from '@carbon/react';
import FormStepsView from '../../views/FormStepsView';
import ContinuosOptimizationEditor from '../../views/ContinuosOptimizationEditor/ContinuosOptimizationEditor';
import CrossOptimizationDashboard from '../../views/CrossOptimizationDashboard/CrossOptimizationDashboard';
import { 
    SETTINGS_AG,
    TABS_AG
} from '../../constants/evolutionarySettingView';

const ContinuosOptimizationPage = () => {

    return (
        <div className='continuos-page '>
            <Tabs defaultSelectedIndex={0}>
                <Theme theme={'g10'}>
                    <TabList aria-label="Tab navigation">
                        <Tab>Optimize</Tab>
                        <Tab>Problem</Tab>
                        <Tab>Genetic</Tab>
                        <Tab>Evolutionary Strategy</Tab>
                        <Tab>Evolutive programming</Tab>
                    </TabList>
                </Theme>
                <TabPanels>
                    <TabPanel>
                        <CrossOptimizationDashboard />
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
                        {/* <AreaChartComponent /> */}
                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default ContinuosOptimizationPage;