import React from 'react';
import {
    Button,
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Grid,
    Column,
    Theme,
    Accordion,
    AccordionItem,
  } from '@carbon/react';
  import ProgressStepsBar from '../../components/ProgressStepsBar';
import FormPyristic from '../../components/FormPyristic';
import EditorForm from '../../components/EditorForm/EditorForm';

const ContinuosOptimizationPage = () => {

    return (
        <div className='continuos-page '>
            <Tabs defaultSelectedIndex={0}>
            <TabList className="gray-background" aria-label="Tab navigation">
                <Tab>Genetic</Tab>
                <Tab>Evolutionary Strategy</Tab>
                <Tab>Evolutive programming</Tab>
            </TabList>
            <ProgressStepsBar/>
            <TabPanels>
                <TabPanel>
                    <FormPyristic/>
                </TabPanel>
                <TabPanel>
                    <ProblemEditorPage />
                </TabPanel>
            </TabPanels>
            </Tabs>
        </div>
    );
};

const ProblemEditorPage = () => {
    const ARRAY_ITEMS = [
        {
            accordion_title:'Minimization function',
            code_title:'Function'
        },
        {
            accordion_title:'Constraints',
            code_title:'Array constraints'
        },
        {
            accordion_title:'Additionals',
            code_title:'Problem bounds'
        }
    ];
    return (
        <Theme theme='g10'>
            <Accordion>
                {
                    ARRAY_ITEMS.map((item, ind)=>
                        (
                            <>
                            <AccordionItem title={item.accordion_title}>
                                <EditorForm title={item.code_title}/>
                            </AccordionItem>
                            </>
                        )
                )} 
            </Accordion>
        </Theme>
    );
};
export default ContinuosOptimizationPage;