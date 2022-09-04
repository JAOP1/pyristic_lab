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
    AG_COUNTINUOS_MUTATION_OP,
    AG_CONTINUOS_CROSSOVER_OP,
    AG_PARENT_SELECTION,
    SURVIVOR_SELECTION
} from '../../utils/constants';
import { 
    mutationUpdated,
    crossoverUpdated,
    survivorSelectionUpdated,
    parentSelectionUpdated
} from '../../features/AGStore';
import AreaChartComponent from '../../components/AreaChart';

const ContinuosOptimizationPage = () => {
    const [disableAlgorithms, setDisableAlgorithms] = useState(false);
    const SETTINGS_AG = [
        {
            title:'Parent selection',
            item_list:AG_PARENT_SELECTION,
            handler:  parentSelectionUpdated
        },
        {
            title:'Crossover operator',
            item_list:AG_CONTINUOS_CROSSOVER_OP,
            handler: crossoverUpdated
        },
        {
            title:'Mutation operator',
            item_list:AG_COUNTINUOS_MUTATION_OP,
            handler: mutationUpdated
        },
        {
            title:'Survivor selection',
            item_list:SURVIVOR_SELECTION,
            handler: survivorSelectionUpdated
        },
    ];
    const TABS_AG = [
        {
            label:'Step 1',
            description:'Step 1: Select parent selection method.',
        },
        {
            label:'Step 2',
            description:'Step 1: Select crossover method.',
        },
        {
            label:'Step 3',
            description:'Step 1: Select mutation method.',
        },
        {
            label:'Step 4',
            description:'Step 1: Select survivor selection method.',
        },
    ]
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
                        />
                    </TabPanel>
                    <TabPanel>
                        {/* <AreaChartComponent /> */}
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default ContinuosOptimizationPage;