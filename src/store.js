import { configureStore } from '@reduxjs/toolkit'
import continuosAGReduce from './reducers/AGStore';
import continuosEEReduce from './reducers/EEStore';
import continuosEPReduce from './reducers/EPStore';
import combinatorialAGReduce from './reducers/AGCombStore';
import loggerStore from './reducers/loggerStore';
export default configureStore({
  reducer: {
    continuosAG: continuosAGReduce,
    continuosEE: continuosEEReduce,
    continuosEP: continuosEPReduce,
    combinatorialAG: combinatorialAGReduce,
    Logger:loggerStore
  }
})