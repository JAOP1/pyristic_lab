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
import { TextInputContent } from '../../components/TextInputContent/TextInputContent';
import { getTime, formatArrayToString } from '../../utils';
import { addLog } from '../../reducers/loggerStore';
const CrossOptimizationDashboard = ({ algorithms, additionalArgs, getBestSolution, getWorstSolution }) => {
    const [selectedAlgorithms, setSelectedAlgorithms] = useState({});
    const [inputsByAlgorithm, setInputsByAlgorithm] = useState([]);
    const [optimizerParameters, setOptimizerParameters] = useState({});
    const [statsByAlgorithm, setStatsByAlgorithm] = useState([]);
    const [dataPlotting, setDataPlotting] = useState([]);
    const [limitSolutions, setLimitSolutions] = useState({ best:'', worst:'' });
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

    const setSolutions = (array_solutions) => {
        const best_sol = getBestSolution(array_solutions);
        const worst_sol = getWorstSolution(array_solutions);
        console.log("Best", best_sol);
        console.log("worst", worst_sol);
        setLimitSolutions({
            best:formatArrayToString(best_sol.x),
            worst:formatArrayToString(worst_sol.x)
        });
    };
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
        data.data['individual_f'].forEach( ( point, ind ) => container[ind][id] = point);
    };
    const callOptimizationAlgorithm = async() => {
        setStatsByAlgorithm([]);
        setDataPlotting([]);
        let plot_array = [...Array(executions).keys()].map(i => ({ name:i }));
        let stats = [];
        let limit_solutions = [];
        let action_status = 'success';
        let error_detail = '';
        for(let algorithm_type of Object.keys(selectedAlgorithms)){
            if(!selectedAlgorithms[algorithm_type])
                continue;
            error_detail='';
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
                limit_solutions.push(result.data['Best solution'], result.data['Worst solution']);
                action_status='success';
            } catch(error){
                action_status='error';
                error_detail=`Error during the execution of ${algorithm_type}`;
            }finally{
                dispatch(addLog({
                    time: getTime(),
                    status: action_status,
                    action: `Finished ${algorithm_type} process.`,
                    details:error_detail
                }));
            }
        };
        setDataPlotting(plot_array);
        setStatsByAlgorithm(stats);
        setSolutions(limit_solutions);
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
                            className={'margin-top'}
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
                            label="Number of executions:"
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
                            className={'margin-top'}
                            onClick={() => callOptimizationAlgorithm()}
                            disabled={ !Object.keys(selectedAlgorithms).some( algorithm => selectedAlgorithms[algorithm]) }
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
            <Grid className={'margin-top'}>
                <Column lg={8} md={4} sm={4}>
                    <TextInputContent id='best_sol' labelText={'Best solution:'} value={ limitSolutions.best }/>
                </Column>
                <Column lg={8} md={4} sm={4}>
                    <TextInputContent id='worst_sol' labelText={'Worst solution:'} value={ limitSolutions.worst }/>
                </Column>
            </Grid>
            <Grid className={'margin-top'}>
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

export default CrossOptimizationDashboard;