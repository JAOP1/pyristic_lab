import { configureStore } from '@reduxjs/toolkit'
import bannerReducer from './features/NavTitle';

export default configureStore({
  reducer: {
    banner: bannerReducer
  }
})