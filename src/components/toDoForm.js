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
			<form
				onSubmit={handleSubmit}
				className='bg-zinc-700 rounded-lg py-3 px-4 grid grid-cols-1 gap-3 md:w-1/2 xl:w-1/3 mx-auto'
			>
				<label
					className='font-bold text-md text-white flex flex-col'
					htmlFor='title'
				>
					Title
					<input
						className='text-gray-400 text-basic font-normal rounded bg-zinc-600 border-0 p-2 mt-2 focus:outline-none focus:bg-zinc-500 focus:text-gray-800 hover:bg-zinc-500 hover:text-gray-800'
						type='text'
						name='title'
						id='title'
						value={toDo.title}
						onChange={handleChange}
					/>
				</label>
				<label
					className='font-bold text-md text-white flex flex-col'
					htmlFor='description'
				>
					Description
					<textarea
						className='text-gray-400 text-basic font-normal rounded bg-zinc-600 border-0 p-2 mt-2 focus:outline-none focus:bg-zinc-500 hover:bg-zinc-500 hover:text-gray-800 focus:text-gray-800'
						name='description'
						id='description'
						cols='30'
						rows='10'
						style={{ resize: 'none' }}
						value={toDo.description}
						onChange={handleChange}
					></textarea>
				</label>
				<label
					className='font-bold text-md text-white flex items-center'
					htmlFor='completed'
				>
					Completed
					<input
						className='border-0 py-1 px-4 focus:outline-none hover:border-zinc-800 ml-2'
						type='checkbox'
						name='completed'
						id='completed'
						checked={toDo.completed}
						onChange={handleChange}
					/>
				</label>
				<button
					type='submit'
					className='text-white text-center text-bold rounded bg-zinc-600 border-0 py-1 px-4 focus:outline-none hover:bg-zinc-800 w-1/2 mx-auto'
				>
					{id ? 'Update To Do' : 'Create To Do'}
				</button>
			</form>
		)
	)
}

export default ToDoForm
