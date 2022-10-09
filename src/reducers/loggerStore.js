import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    logs:[]
};

const LoggerSlice = createSlice({
    name:'Logger',
    initialState,
    reducers:{
        addLog: (state, action) => {
            state.logs.unshift({ ...action.payload, id:uuidv4() });
        }
    }
});

export const { 
   addLog
} = LoggerSlice.actions;
export default LoggerSlice.reducer;
