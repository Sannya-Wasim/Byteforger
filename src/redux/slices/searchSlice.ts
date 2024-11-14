import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SearchState {
  value: string
}

const initialState: SearchState = {
  value: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    globalSearch : (state, action) =>{
        state.value = action.payload
        // console.log("Action.payload", action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { globalSearch } = searchSlice.actions

export default searchSlice.reducer