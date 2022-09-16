import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { deleteToDo } from '../features/todos/toDoSlice'

function ToDoList() {
	const dispatch = useDispatch()
	const toDosState = useSelector(state => state.toDos)

	const handleDelete = id => {
		dispatch(deleteToDo(id))
	}

	return toDosState.map(toDo => (
		<React.Fragment key={toDo.id}>
			<h3>{toDo.title}</h3>
			<p>{toDo.description}</p>
			<p>{toDo.completed ? 'Completed' : 'Pending'}</p>
			<button onClick={() => handleDelete(toDo.id)}>Delete To Do</button>
		</React.Fragment>
	))
}

export default ToDoList
