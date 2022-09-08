import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    crossover_operator:{
        operator_name:'No selected',
        parameters:[]
    },
    adaptive_crossover_operator:{
        operator_name:'No selected',
        parameters:[]
    },
    adaptive_mutation_operator: {
        operator_name:'No selected',
        parameters:[]
    },
    mutation_operator:{
        operator_name:'No selected',
        parameters:[]
    },
    survivor_selector:{
        operator_name:'No selected',
        parameters:[]
    }
}

const EESlice = createSlice({
    name: 'continuosEE',
    initialState,
    reducers: {
        mutationUpdatedEE: (state, method) => { 
            state['mutation_operator'].operator_name = method.payload.operator_name;
            state['mutation_operator'].parameters = method.payload.parameters;
        },
        crossoverUpdatedEE: (state, method) => {
            state['crossover_operator'].operator_name = method.payload.operator_name;
            state['crossover_operator'].parameters = method.payload.parameters;
        },
        mutatioAdaptiveUpdatedEE: (state, method) => {
            state['adaptive_mutation_operator'].operator_name = method.payload.operator_name;
            state['adaptive_mutation_operator'].parameters = method.payload.parameters;
        },
        crossoverAdaptiveUpdatedEE: (state, method) => {
            state['adaptive_crossover_operator'].operator_name = method.payload.operator_name;
            state['adaptive_crossover_operator'].parameters = method.payload.parameters;
        },
        survivorSelectionUpdatedEE: (state, method) => {
            state['survivor_selector'].operator_name = method.payload.operator_name;
            state['survivor_selector'].parameters = method.payload.parameters;
        }
      }
});

export const { 
    mutationUpdatedEE,
    crossoverUpdatedEE,
    survivorSelectionUpdatedEE,
    crossoverAdaptiveUpdatedEE,
    mutatioAdaptiveUpdatedEE
} = EESlice.actions;
export default EESlice.reducer;
