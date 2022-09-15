import { configureStore } from '@reduxjs/toolkit'

import toDosSliceReducer from '../features/task/toDoSlice'

export const store = configureStore({
	reducer: {
		toDos: toDosSliceReducer
	}
})
