import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteToDo } from '../../features/todos/toDoSlice'
import ToDoListContainer from './ToDoListContainer'
import ToDoShowCompletedButton from './ToDoShowCompletedButton'

const ToDoList = ({ showCompletedToDos, handleToggleShowCompletedToDos }) => {
	const dispatch = useDispatch()
	const toDosState = useSelector(state => state.toDos)
	const [toDosPending, setToDosPending] = useState()
	const [toDosCompleted, setToDosCompleted] = useState()

	useEffect(() => {
		if (toDosState) {
			setToDosPending(
				toDosState
					.filter(toDo => toDo.completed === false)
					.sort((a, b) => {
						if (a.priority < b.priority) return -1
						if (a.priority > b.priority) return 1
						return 0
					})
			)
			setToDosCompleted(
				toDosState
					.filter(toDo => toDo.completed === true)
					.sort((a, b) => {
						if (a.priority < b.priority) return -1
						if (a.priority > b.priority) return 1
						return 0
					})
			)
		}
	}, [toDosState])

	const handleDelete = id => dispatch(deleteToDo(id))

	let content = <p>Loading...</p>

	if (toDosPending && toDosCompleted) {
		content = (
			<>
				<ToDoShowCompletedButton
					handleToggleShowCompletedToDos={
						handleToggleShowCompletedToDos
					}
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

	return <>{content}</>
}

export default ToDoList
