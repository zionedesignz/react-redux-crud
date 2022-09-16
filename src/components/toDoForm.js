import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'

import { createToDo } from '../features/todos/toDoSlice'

function ToDoForm() {
	const dispatch = useDispatch()
	const [toDo, setToDo] = useState({
		title: '',
		description: '',
		complete: false
	})

	const handleChange = e => {
		const key = e.target.name
		const value = e.target.value
		setToDo({ ...toDo, [key]: value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		e.target.reset()
		dispatch(createToDo({ ...toDo, id: uuid() }))
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='title'
				placeholder='title'
				onChange={handleChange}
			/>
			<textarea
				name='description'
				placeholder='description'
				cols='30'
				rows='10'
				style={{ resize: 'none' }}
				onChange={handleChange}
			></textarea>
			<button type='submit'>Add To Do</button>
		</form>
	)
}

export default ToDoForm
