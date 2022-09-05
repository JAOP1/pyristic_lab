import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    adaptive_mutation: {
        operator_name:'No selected',
        parameters:[]
    },
    mutation:{
        operator_name:'No selected',
        parameters:[]
    },
    survivor_selection:{
        operator_name:'No selected',
        parameters:[]
    }
}

const EPSlice = createSlice({
    name: 'continuosEP',
    initialState,
    reducers: {
        mutationUpdated: (state, method) => { 
            state['mutation'].operator_name = method.payload.operator_name;
            state['mutation'].parameters = method.payload.parameters;
        },
        crossoverUpdated: (state, method) => {
            state['crossover'].operator_name = method.payload.operator_name;
            state['crossover'].parameters = method.payload.parameters;
        },
        parentSelectionUpdated: (state, method) => {
            state['parent_selection'].operator_name = method.payload.operator_name;
            state['parent_selection'].parameters = method.payload.parameters;
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
    parentSelectionUpdated,
    survivorSelectionUpdated 
} = EPSlice.actions;
export default EPSlice.reducer;
