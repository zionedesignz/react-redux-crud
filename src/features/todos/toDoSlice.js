import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

export const readToDos = createAsyncThunk('toDos/readToDos', async thunkAPI => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([
				{
					id: uuid(),
					title: 'Play games',
					description: 'Play any game with be happy and fun',
					completed: false,
					priority: 3
				},
				{
					id: uuid(),
					title: 'Develop new feature',
					description: 'New feature for auth users',
					completed: false,
					priority: 2
				},
				{
					id: uuid(),
					title: 'Clean',
					description: 'Clean dishes and sweep floor',
					completed: false,
					priority: 4
				},
				{
					id: uuid(),
					title: 'Take care of Baby',
					description: 'Play with the baby and love him very much',
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
