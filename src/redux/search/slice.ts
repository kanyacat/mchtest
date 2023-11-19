import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface SearchSliceState {
	searchValue: string
}

const initialState: SearchSliceState = {
	searchValue: ''
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload
		}
	}
})

// Action creators are generated for each case reducer function
export const { setSearchValue } = searchSlice.actions
export const searchSelector = (state: RootState) => state.search.searchValue

export default searchSlice.reducer
