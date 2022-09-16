import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import { createToDo, updateToDo } from '../features/todos/toDoSlice'

function ToDoForm() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { id } = useParams()
	const toDosState = useSelector(state => state.toDos)

	const [toDo, setToDo] = useState({
		title: '',
		description: '',
		completed: false
	})

	useEffect(() => {
		if (id && toDosState) {
			const toDo = toDosState.find(toDo => toDo.id === id)
			setToDo(toDo)
		}
	}, [id, toDosState])

	const handleChange = e => {
		const { name, type, checked, value } = e.target
		const val = type === 'checkbox' ? checked : value
		setToDo({ ...toDo, [name]: val })
	}

	const handleSubmit = e => {
		e.preventDefault()
		id
			? dispatch(updateToDo(toDo))
			: dispatch(createToDo({ ...toDo, id: uuid() }))
		e.target.reset()
		navigate('/')
	}

	return (
		toDo && (
			<form onSubmit={handleSubmit}>
				<label htmlFor='title'>
					Title
					<input
						type='text'
						name='title'
						id='title'
						placeholder='title'
						value={toDo.title}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor='description'>
					Description
					<textarea
						name='description'
						placeholder='description'
						id='description'
						cols='30'
						rows='10'
						style={{ resize: 'none' }}
						value={toDo.description}
						onChange={handleChange}
					></textarea>
				</label>
				<label htmlFor='completed'>
					Completed
					<input
						type='checkbox'
						name='completed'
						id='completed'
						checked={toDo.completed}
						onChange={handleChange}
					/>
				</label>
				<button type='submit'>
					{id ? 'Update To Do' : 'Create To Do'}
				</button>
			</form>
		)
	)
}

export default ToDoForm
