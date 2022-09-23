import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteToDo, readToDos } from '../../features/todos/toDoSlice'
import ToDoListContainer from './ToDoListContainer'
import ToDoShowCompletedButton from './ToDoShowCompletedButton'

const ToDoList = ({ showCompletedToDos, handleToggleShowCompletedToDos }) => {
	const dispatch = useDispatch()
	const toDosState = useSelector(state => state.toDos)
	const toDosPending = toDosState
		.filter(toDo => toDo.completed === false)
		.sort((a, b) => {
			if (a.priority < b.priority) return -1
			if (a.priority > b.priority) return 1
			return 0
		})
	const toDosCompleted = toDosState
		.filter(toDo => toDo.completed === true)
		.sort((a, b) => {
			if (a.priority < b.priority) return -1
			if (a.priority > b.priority) return 1
			return 0
		})

	useEffect(() => {
		if (toDosState.length === 0) {
			dispatch(readToDos())
		}
	}, [dispatch, toDosState])

	const handleDelete = id => dispatch(deleteToDo(id))

	return (
		<>
			<ToDoShowCompletedButton
				handleToggleShowCompletedToDos={handleToggleShowCompletedToDos}
				show={showCompletedToDos}
			/>
			<ToDoListContainer
				toDos={toDosPending}
				type='pending'
				handleDelete={handleDelete}
			/>
			<ToDoListContainer
				toDos={toDosCompleted}
				type='completed'
				show={showCompletedToDos}
				handleDelete={handleDelete}
			/>
		</>
	)
}

export default ToDoList
