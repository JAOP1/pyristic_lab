import { configureStore } from '@reduxjs/toolkit'
import continuosAGReduce from './reducers/AGStore';
import continuosEEReduce from './reducers/EEStore';
import continuosEPReduce from './reducers/EPStore';
import loggerStore from './reducers/loggerStore';
export default configureStore({
  reducer: {
    continuosAG: continuosAGReduce,
    continuosEE: continuosEEReduce,
    continuosEP: continuosEPReduce,
    Logger:loggerStore
  }
})