import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import toDosReducer from '../features/todos/toDoSlice'

const persistConfig = {
	key: 'toDosList',
	storage,
	whitelist: ['toDos']
}

const persistedReducer = persistReducer(persistConfig, toDosReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk]
})

export const persistor = persistStore(store)
