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
import CrossOptimizationDashboard from '../../views/CrossOptimizationDashboard/CrossOptimizationDashboard';
import AccordionEditorList from '../../views/ContinuosOptimizationEditor';

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
            accordion_title:'Method for generate neighbors',
            title:'Generate neighbor',
            fileName:'SA_neighbor_generator',
            initialCodeText:'#Hola mundo'
        },
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