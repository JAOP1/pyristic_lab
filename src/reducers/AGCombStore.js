import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    initialize_method:{
        operator_name:'No selected',
        parameters:[]
    },
    mutation_operator:{
        operator_name:'No selected',
        parameters:[]
    },
    crossover_operator:{
        operator_name:'No selected',
        parameters:[]
    },
    parent_selector:{
        operator_name:'No selected',
        parameters:[]
    },
    survivor_selector:{
        operator_name:'No selected',
        parameters:[]
    },
    setter_invalid_solution: {
        operator_name:'No selected',
        parameters:[]
    }
}

const CombinatorialAGSlice = createSlice({
    name: 'combinatorialAG',
    initialState,
    reducers: {
        initializePopulationUpdatedCombinatorialAG: (state, method) =>{
            state['initialize_method'].operator_name = method.payload.operator_name;
            state['initialize_method'].parameters = method.payload.parameters;
        },
        mutationUpdatedCombinatorialAG: (state, method) => { 
            state['mutation_operator'].operator_name = method.payload.operator_name;
            state['mutation_operator'].parameters = method.payload.parameters;
        },
        crossoverUpdatedCombinatorialAG: (state, method) => {
            state['crossover_operator'].operator_name = method.payload.operator_name;
            state['crossover_operator'].parameters = method.payload.parameters;
        },
        parentSelectionUpdatedCombinatorialAG: (state, method) => {
            state['parent_selector'].operator_name = method.payload.operator_name;
            state['parent_selector'].parameters = method.payload.parameters;
        },
        survivorSelectionUpdatedCombinatorialAG: (state, method) => {
            state['survivor_selector'].operator_name = method.payload.operator_name;
            state['survivor_selector'].parameters = method.payload.parameters;
        },
        setInvalidSolutionUpdatedCombinatorialAG: (state, method) => {
            state['setter_invalid_solution'].operator_name = method.payload.operator_name;
            state['setter_invalid_solution'].parameters = method.payload.parameters;
        }
      }
});

export const {
    initializePopulationUpdatedCombinatorialAG,
    mutationUpdatedCombinatorialAG,
    crossoverUpdatedCombinatorialAG,
    parentSelectionUpdatedCombinatorialAG,
    survivorSelectionUpdatedCombinatorialAG,
    setInvalidSolutionUpdatedCombinatorialAG
} = CombinatorialAGSlice.actions;
export default CombinatorialAGSlice.reducer;
