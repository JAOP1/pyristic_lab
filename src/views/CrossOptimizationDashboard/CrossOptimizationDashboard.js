import React, { useEffect, useState } from 'react';
import {
    Theme,
    Grid,
    Column,
    Checkbox,
    NumberInput,
    Accordion,
    AccordionItem,
    Button,
} from '@carbon/react';
import axios from 'axios'; 
import AreaChartComponent from '../../components/AreaChart';
import DataTableDinamic from '../../components/DataTableDinamic/DataTableDinamic';
import AccordionForm from '../../components/AccordionForm';


const CrossOptimizationDashboard = ({ algorithms, dictMethods }) => {
    const [selectedAlgorithms, setSelectedAlgorithms] = useState({});
    const [inputsByAlgorithm, setInputsByAlgorithm] = useState([]);
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
    const updateListInputsAlgorithm = (checked, id) => {
        let ind;
        let tmp_list = [ ...inputsByAlgorithm ];
        const find_index =  (array, id) => array.findIndex((item) => item.id === id);
        if(checked){
            ind = find_index(algorithms, id);
            tmp_list.push(algorithms[ind]);
        } else {
            ind = find_index(tmp_list, id);
            tmp_list.splice(ind,1);
        }
        setInputsByAlgorithm(tmp_list);
    };
    
    const onChangeCheckbox = (checked, id) => {
        let checkedAlgorithms = {...selectedAlgorithms};
        checkedAlgorithms[id] = checked;
        setSelectedAlgorithms(checkedAlgorithms);
    };
    const hasRequiredMethods = (id) => {
        const isMethod = (A) => A!=='No selected';
        const methods = dictMethods[id];
        const method_names = Object.keys(methods).map((key) => methods[key].operator_name);
        return method_names.every(isMethod);
    }
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
                        <fieldset style={{marginTop:'5%'}}>
                            <legend style={{color:'#525252'}}>Select the algorithm:</legend>
                            {
                                algorithms.map((algorithm, ind) => (
                                    <Checkbox 
                                        key={algorithm.id}
                                        labelText={algorithm.name} 
                                        id={algorithm.id} 
                                        checked={selectedAlgorithms[algorithm.id] || false}
                                        onChange={(event,{ checked, id}) =>{ 
                                            updateListInputsAlgorithm(checked,id);
                                            onChangeCheckbox(checked,id);
                                        }}
                                        disabled={!hasRequiredMethods(algorithm.id)}
                                    />
                                ))
                            }
                        </fieldset>
                        <Button>
                            Optimize
                        </Button>
                    </Column>
                    <Column lg={12} md={5} sm={4}>
                        <AccordionForm arrayParameterSections={inputsByAlgorithm}/>
                    </Column>
                </Grid>
            </Theme>
            <Grid>
                <Column lg={12} md={5} sm={4}>
                    <AreaChartComponent />                
                </Column>
                <Column lg={4} md={3} sm={4}>
                    <DataTableDinamic />
                </Column>
            </Grid>
        </>
    );
};

CrossOptimizationDashboard.defaultProps={
    algorithms: [
        {
            name:'Test Algorithm 1',
            id:'t1'
        },
        {
            name:'Test Algorithm 2',
            id:'t2'
        },
        {
            name:'Test Algorithm 3',
            id:'t3'
        }
    ],
    dictMethods:{
        t1:{
            method1:{operator_name:'No selected'},
            method2:{operator_name:'No selected'}

        },
        t2:{
            method3:{operator_name:'testMethod'},
            method4:{operator_name:'testAnotherMethod'}
        },
        t3:{}
    }
};

export default CrossOptimizationDashboard;