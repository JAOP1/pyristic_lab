import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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

const EPSlice = createSlice({
    name: 'continuosEP',
    initialState,
    reducers: {
        mutationUpdatedEP: (state, method) => { 
            state['mutation_operator'].operator_name = method.payload.operator_name;
            state['mutation_operator'].parameters = method.payload.parameters;
        },
        adaptiveMutationUpdatedEP: (state, method) => {
            state['adaptive_mutation_operator'].operator_name = method.payload.operator_name;
            state['adaptive_mutation_operator'].parameters = method.payload.parameters;
        },
        survivorSelectionUpdatedEP: (state, method) => {
            state['survivor_selector'].operator_name = method.payload.operator_name;
            state['survivor_selector'].parameters = method.payload.parameters;
        }
      }
});

export const { 
    mutationUpdatedEP,
    adaptiveMutationUpdatedEP,
    survivorSelectionUpdatedEP 
} = EPSlice.actions;
export default EPSlice.reducer;
