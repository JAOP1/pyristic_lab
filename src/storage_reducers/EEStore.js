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
        mutationUpdated: (state, method) => { 
            state['mutation_operator'].operator_name = method.payload.operator_name;
            state['mutation_operator'].parameters = method.payload.parameters;
        },
        crossoverUpdated: (state, method) => {
            state['crossover_operator'].operator_name = method.payload.operator_name;
            state['crossover_operator'].parameters = method.payload.parameters;
        },
        mutatioAdaptiveUpdated: (state, method) => {
            state['adaptive_mutation_operator'].operator_name = method.payload.operator_name;
            state['adaptive_mutation_operator'].parameters = method.payload.parameters;
        },
        crossoverAdaptiveUpdated: (state, method) => {
            state['adaptive_crossover_operator'].operator_name = method.payload.operator_name;
            state['adaptive_crossover_operator'].parameters = method.payload.parameters;
        },
        survivorSelectionUpdated: (state, method) => {
            state['survivor_selection'].operator_name = method.payload.operator_name;
            state['survivor_selection'].parameters = method.payload.parameters;
        }
      }
});

export const { 
    mutationUpdated,
    crossoverUpdated,
    survivorSelectionUpdated,
    crossoverAdaptiveUpdated,
    mutatioAdaptiveUpdated
} = EESlice.actions;
export default EESlice.reducer;
