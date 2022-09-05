import React, { useState } from 'react';
import {
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Theme,
  } from '@carbon/react';
import FormStepsView from '../../components/FormStepsView';
import ProblemEditorPage from './ProblemView';
import { 
    SETTINGS_AG,
    TABS_AG
} from '../../constants/evolutionarySettingView';
// import AreaChartComponent from '../../components/AreaChart';

const ContinuosOptimizationPage = () => {
    const [disableAlgorithms, setDisableAlgorithms] = useState(false);

    return (
        <div className='continuos-page '>
            <Tabs defaultSelectedIndex={0}>
                <Theme theme={'g10'}>
                    <TabList aria-label="Tab navigation">
                        <Tab>Problem</Tab>
                        <Tab disabled={disableAlgorithms}>Genetic</Tab>
                        <Tab disabled={disableAlgorithms}>Evolutionary Strategy</Tab>
                        <Tab disabled={disableAlgorithms}>Evolutive programming</Tab>
                    </TabList>
                </Theme>
                <TabPanels>
                    <TabPanel>
                        <ProblemEditorPage />
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