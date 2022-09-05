import React, { useState } from 'react';
import {
    Theme,
    Grid,
    Column,
    Checkbox,
    NumberInput,
    Accordion,
    AccordionItem,
    Button
} from '@carbon/react';
import axios from 'axios'; 
import AreaChartComponent from '../../components/AreaChart';

const CrossOptimizationDashboard = () => {
    
    // const callOptimizationAlgorithm = (fileName) => {
    //     return async(text) => {
    //         try{
    //             const body = JSON.stringify({ content: text });
    //             const Config = {
    //                 headers: {
    //                 'Content-Type': 'application/json'
    //                 }
    //             };
    //             await axios.post(`http://localhost:80/create-file/${fileName}`,
    //             body,
    //             Config);
    //             setStatus('success');
    //         } catch(error){
    //             setStatus('error');
    //         }
    //     };
    // }
    
    return (
        <>
            <Theme theme={'g10'}>
                <Grid>
                    <Column lg={4} md={3} sm={4} className='border-rigth'>
                        <NumberInput
                          id="execution"
                          min={1}
                          max={50}
                          value={1}
                          label="Number of executions"
                          invalidText="Number is not valid"
                        />
                        <fieldset>
                            <legend>Group label</legend>
                            <Checkbox labelText={`Checkbox label`} id="checkbox-label-1" />
                            <Checkbox labelText={`Checkbox label`} id="checkbox-label-2" />
                        </fieldset>
                        <Button>
                            Optimize
                        </Button>
                    </Column>
                    <Column lg={12} md={5} sm={4}>
                        <Accordion style={{marginTop:'2%'}}>
                            <AccordionItem title='Example 1'>
                                <Grid>
                                    <Column lg={4} md={2} sm={4}>
                                        <NumberInput
                                            // id="blah"
                                            min={1}
                                            max={50}
                                            value={1}
                                            label="Number of executions"
                                            invalidText="Number is not valid"
                                        />  
                                    </Column>
                                    <Column lg={4} md={2} sm={4}>
                                        <NumberInput
                                            // id="blah"
                                            min={1}
                                            max={50}
                                            value={1}
                                            label="Number of executions"
                                            invalidText="Number is not valid"
                                        />  
                                    </Column>
                                    <Column lg={4} md={2} sm={4}>
                                        <NumberInput
                                            // id="blah"
                                            min={1}
                                            max={50}
                                            value={1}
                                            label="Number of executions"
                                            invalidText="Number is not valid"
                                        />  
                                    </Column>
                                    <Column lg={4} md={2} sm={4}>
                                        <NumberInput
                                            // id="blah"
                                            min={1}
                                            max={50}
                                            value={1}
                                            label="Number of executions"
                                            invalidText="Number is not valid"
                                        />  
                                    </Column>         
                                </Grid>
                            </AccordionItem>
                        </Accordion>
                       
                        
                    </Column>
                </Grid>
            </Theme>
            <AreaChartComponent />
        </>
    );
};

export default CrossOptimizationDashboard;