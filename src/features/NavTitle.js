import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    main_title:'Continuos'
}

const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        titleUpdated: (state, navTitle) => { 
            console.log(navTitle);
            state.main_title = navTitle.payload.main_title
        }
      }
});

export const { titleUpdated } = bannerSlice.actions;
export default bannerSlice.reducer;
