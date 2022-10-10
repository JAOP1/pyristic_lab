import React, { useEffect, useState } from 'react';
import {
    Theme,
    Grid,
    Column,
    Checkbox,
    NumberInput,
    Button,
} from '@carbon/react';
import axios from 'axios'; 
import { useDispatch } from 'react-redux';
import { getBodyRequest, getAPIRoute } from '../../utils';
import AreaChartComponent from '../../components/AreaChart';
import DataTableDinamic from '../../components/DataTableDinamic/DataTableDinamic';
import AccordionForm from '../../components/AccordionForm';
import { getTime } from '../../utils';
import { addLog } from '../../reducers/loggerStore';

const CrossOptimizationDashboard = ({ algorithms, additionalArgs }) => {
    const [selectedAlgorithms, setSelectedAlgorithms] = useState({});
    const [inputsByAlgorithm, setInputsByAlgorithm] = useState([]);
    const [optimizerParameters, setOptimizerParameters] = useState({});
    const [statsByAlgorithm, setStatsByAlgorithm] = useState([]);
    const [dataPlotting, setDataPlotting] = useState([]);
    const [executions, setExecutions] = useState(1);
    const dispatch = useDispatch();

    const HEADERS = [
        {
            key: 'metric',
            header: 'Metric',
          },
          {
            key: 'value',
            header: 'Result',
          },
    ];
    useEffect(() => {
        if(algorithms){
            let initialState = {};
            algorithms.forEach(({id, parameters}) => {
                initialState[id] = {};
                parameters.forEach( ({id:id_argument,initialValue}) => initialState[id][id_argument] = initialValue );
            });
            setOptimizerParameters(initialState);
        }
    }, [algorithms]);


    const saveDataInTable = (id, data, container) => {
        container.push({
            title:id,
            records: ['Mean', 'Median', 'Standard deviation'].map((label, ind) => ({
                id:`${ind}`,
                metric:label,
                value:parseFloat(data.data[label]).toFixed(3)
            }))
        });
    };
    const savePlottingData = (id, data, container) => {
        console.log('data plot:', container);
        data.data['individual_f'].forEach( ( point, ind ) => container[ind][id] = point);
    };
    const callOptimizationAlgorithm = async() => {
        setStatsByAlgorithm([]);
        setDataPlotting([]);
        let plot_array = [...Array(executions).keys()].map(i => ({ name:i }));
        let stats = [];
        let action_status = 'success';
        let error_detail = '';
        for(let algorithm_type of Object.keys(selectedAlgorithms)){
            if(!selectedAlgorithms[algorithm_type])
                continue;

            try{
                const Config = {
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    params: {
                        num_executions: executions
                    }
                };
                const result = await axios.post(
                    getAPIRoute(algorithm_type),
                    getBodyRequest(algorithm_type, optimizerParameters, additionalArgs),
                    Config
                );
                saveDataInTable(algorithm_type, result, stats);             
                savePlottingData(algorithm_type, result, plot_array);
                action_status='success';
            } catch(error){
                action_status='error';
                error_detail=`Error during the execution of ${algorithm_type}`;
                console.log('error:', error);
            }finally{
                dispatch(addLog({
                    time: getTime(),
                    status: action_status,
                    action: `Execution metaheuristic`,
                    details:error_detail
                }));
            }
        };
        setDataPlotting(plot_array);
        setStatsByAlgorithm(stats);
    };
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
    const onNumberInputChange = (algorithmId, inputId, value) => {
        let tmp_obj = { ...optimizerParameters };
        tmp_obj[algorithmId][inputId] = value;
        setOptimizerParameters(tmp_obj);
    };
    const hasRequiredMethods = (id) => {
        const isMethod = (A) => A!=='No selected';
        const methods = additionalArgs[id];
        const method_names = Object.keys(methods).map((key) => methods[key].operator_name);
        return method_names.every(isMethod);
    };

    return (
        <>
            <Theme theme={'g10'}>
                <Grid >
                    <Column lg={4} md={3} sm={4} className='border-rigth'>
                        <NumberInput
                          id="execution"
                          min={1}
                          max={50}
                          value={executions}
                          onChange={(event, { value, direction }) => {
                                const _value = parseInt(value);
                                if(Number.isNaN(_value)){
                                    return;
                                }
                                setExecutions(_value);                                   
                          }}
                          label="Number of executionss"
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
                        <Button
                            onClick={() => callOptimizationAlgorithm()}
                        >
                            Optimize
                        </Button>
                    </Column>
                    <Column lg={12} md={5} sm={4}>
                        <AccordionForm 
                            arrayParameterSections={inputsByAlgorithm}
                            currentState={optimizerParameters}
                            callback={onNumberInputChange}
                        />
                    </Column>
                </Grid>
            </Theme>
            <Grid style={{marginTop:'2%'}}>
                <Column lg={12} md={5} sm={4}>
                    <AreaChartComponent data={dataPlotting}/>                
                </Column>
                <Column lg={4} md={3} sm={4}>
                    <DataTableDinamic  headers={HEADERS} data={statsByAlgorithm}/>
                </Column>
            </Grid>
        </>
    );
};

CrossOptimizationDashboard.defaultProps={
    algorithms: [
        {
            name:'Test Algorithm 1',
            id:'t1',
            parameters:[
                {
                    label:'Example input 1:',
                    id:'example_inpunt_1',
                    initialValue:10,
                    min:1,
                    max:1000,
                    step:1
                }
            ]
        },
        {
            name:'Test Algorithm 2',
            id:'t2',
            parameters:[
                {
                    label:'Example input 12:',
                    id:'example_inpunt_12',
                    initialValue:10,
                    min:1,
                    max:1000,
                    step:1
                }
            ]
        },
        {
            name:'Test Algorithm 3',
            id:'t3',
            parameters:[
                {
                    label:'Example input 2:',
                    id:'example_inpunt_2',
                    initialValue:10,
                    min:1,
                    max:1000,
                    step:1
                }
            ]
        }
    ],
    additionalArgs:{
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