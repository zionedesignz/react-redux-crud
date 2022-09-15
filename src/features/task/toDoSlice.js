import { createSlice } from '@reduxjs/toolkit'

export const toDosSlice = createSlice({
	name: 'toDos',
	initialState: [],
	reducers: {}
})

//export const { create, read, update, delete } = toDoSlice.actions
export default toDosSlice.reducer
