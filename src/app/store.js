import { configureStore } from '@reduxjs/toolkit'

import toDosSliceReducer from '../features/todos/toDoSlice'

export const store = configureStore({
	reducer: {
		toDos: toDosSliceReducer
	}
})
