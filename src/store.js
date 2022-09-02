import { configureStore } from '@reduxjs/toolkit'
import continuosAGReduces from './features/AGStore';

export default configureStore({
  reducer: {
    continuosAG: continuosAGReduces
  }
})