import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
    }
}

const AGSlice = createSlice({
    name: 'continuosAG',
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
        parentSelectionUpdated: (state, method) => {
            state['parent_selector'].operator_name = method.payload.operator_name;
            state['parent_selector'].parameters = method.payload.parameters;
        },
        survivorSelectionUpdated: (state, method) => {
            state['survivor_selector'].operator_name = method.payload.operator_name;
            state['survivor_selector'].parameters = method.payload.parameters;
        }
      }
});

export const { 
    mutationUpdated,
    crossoverUpdated,
    parentSelectionUpdated,
    survivorSelectionUpdated 
} = AGSlice.actions;
export default AGSlice.reducer;
