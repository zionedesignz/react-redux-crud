import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

const initialState = [
	{
		id: uuid(),
		title: 'Make program',
		description: 'Make program about fitness',
		completed: false
	},
	{
		id: uuid(),
		title: 'Play games',
		description: 'Play any game with be happy and fun',
		completed: false
	},
	{
		id: uuid(),
		title: 'Take care of Baby',
		description: 'Play with baby and love he',
		completed: false
	}
]

export const toDosSlice = createSlice({
	name: 'toDos',
	initialState: initialState,
	reducers: {
		createToDo: (state, action) => {
			const { payload } = action
			return [...state, payload]		
		},
		readToDos: (state, action) => {},
		updateToDo: (state, action) => {},
		deleteToDo: (state, action) => {
			const { payload } = action
			return state.filter(toDo => toDo.id !== payload)
		}
	}
})

export const { createToDo, readToDos, updateToDo, deleteToDo } =
	toDosSlice.actions
export default toDosSlice.reducer
