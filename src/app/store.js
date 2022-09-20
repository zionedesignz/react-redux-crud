import { configureStore } from '@reduxjs/toolkit'

import toDosSlice from '../features/todos/toDoSlice'

export const store = configureStore({
	reducer: {
		toDos: toDosSlice
	}
})
