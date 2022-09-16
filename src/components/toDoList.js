import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { deleteToDo } from '../features/todos/toDoSlice'

function ToDoList() {
	const dispatch = useDispatch()
	const toDosState = useSelector(state => state.toDos)
	const toDosPending = toDosState.filter(toDo => toDo.completed === false)

	const handleDelete = id => {
		dispatch(deleteToDo(id))
	}

	return (
		<>
			<h2>{toDosPending.length} task to do</h2>
			{toDosState.map(({ id, title, description, completed }) => (
				<React.Fragment key={id}>
					<h4>{title}</h4>
					<p>{description}</p>
					<p>{completed ? 'Completed' : 'Pending'}</p>
					<button onClick={() => handleDelete(id)}>Delete</button>
					<Link to={`/update/${id}`}>Update</Link>
				</React.Fragment>
			))}
		</>
	)
}

export default ToDoList
