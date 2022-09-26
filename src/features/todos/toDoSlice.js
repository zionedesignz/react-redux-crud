import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

export const readToDos = createAsyncThunk('toDos/readToDos', async thunkAPI => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([
				{
					id: uuid(),
					title: 'UX corrections',
					description: 'Apply UX corrections on configuration components for best user experience',
					completed: false,
					priority: 3
				},
				{
					id: uuid(),
					title: 'Develop new feature',
					description: 'New feature for user auth',
					completed: false,
					priority: 2
				},
				{
					id: uuid(),
					title: 'Refactor',
					description: 'Refactor the code on service component',
					completed: false,
					priority: 4
				},
				{
					id: uuid(),
					title: 'Fix bug',
					description: 'Fix bug on main layout',
					completed: true,
					priority: 1
				}
			])
		}, 500)
	}).then(data => data)
})

export const toDosSlice = createSlice({
	name: 'toDos',
	initialState: [],
	reducers: {
		createToDo: (state, action) => {
			const { payload } = action
			return [...state, payload]
		},
		updateToDo: (state, action) => {
			const { payload } = action
			return state.map(toDo => (toDo.id === payload.id ? payload : toDo))
		},
		deleteToDo: (state, action) => {
			const { payload } = action
			return state.filter(toDo => toDo.id !== payload)
		}
	},
	extraReducers: {
		[readToDos.fulfilled]: (state, { payload }) => payload
	}
})

export const { createToDo, updateToDo, deleteToDo } = toDosSlice.actions
export default toDosSlice.reducer
