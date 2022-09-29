import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

const initialState = {
	toDos: [
		{
			id: uuid(),
			title: 'UX corrections',
			description:
				'Apply UX corrections on configuration components for best user experience',
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
	]
}

export const toDosSlice = createSlice({
	name: 'toDoSlice',
	initialState,
	reducers: {
		createToDo: (state, action) => {
			const { payload } = action
			state.toDos = [...state.toDos, payload]
		},
		updateToDo: (state, action) => {
			const { payload } = action
			state.toDos = state.toDos.map(toDo =>
				toDo.id === payload.id ? payload : toDo
			)
		},
		deleteToDo: (state, action) => {
			const { payload } = action
			state.toDos = state.toDos.filter(toDo => toDo.id !== payload)
		}
	}
})

export const { createToDo, updateToDo, deleteToDo } = toDosSlice.actions
export default toDosSlice.reducer
