import { configureStore } from '@reduxjs/toolkit'
import continuosAGReduce from './storage_reducers/AGStore';
import continuosEEReduce from './storage_reducers/EEStore';
import continuosEPReduce from './storage_reducers/EPStore';
export default configureStore({
  reducer: {
    continuosAG: continuosAGReduce,
    continuosEE: continuosEEReduce,
    continuosEP: continuosEPReduce
  }
})