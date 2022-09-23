import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuid, validate as uuidValidate } from 'uuid'

import { createToDo, updateToDo } from '../../features/todos/toDoSlice'
import Button from '../global/Button'
import Input from '../global/Input'
import Select from '../global/Select'
import TextArea from '../global/TextArea'
import ToDoFormError from './ToDoFormError'

const ToDoForm = () => {
	const priorityOptions = {
		1: 'Critical',
		2: 'High',
		3: 'Medium',
		4: 'Low'
	}
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { id: pathId } = useParams()
	const toDosState = useSelector(state => state.toDos)

	const [toDo, setToDo] = useState({
		id: uuid(),
		title: '',
		description: '',
		completed: false,
		priority: 4
	})
	const [error, setError] = useState()

	useEffect(() => {
		if (pathId && toDosState) {
			const toDo = toDosState.find(toDo => toDo.id === pathId)
			setToDo(toDo)
		}
	}, [pathId, toDosState])

	const handleChange = e => {
		const { name, type, checked, value } = e.target
		const valueByType = {
			text: value,
			textarea: value,
			checkbox: checked,
			'select-one': parseInt(value)
		}
		setToDo({ ...toDo, [name]: valueByType[type] })
	}

	const handleSubmit = e => {
		e.preventDefault()
		setError()
		const { id, title, description, priority, completed } = toDo
		if (
			!uuidValidate(id) ||
			!title.trim() ||
			!description.trim() ||
			!priority ||
			typeof completed !== 'boolean'
		) {
			setError('Missing arguments for create task to do')
		} else {
			pathId ? dispatch(updateToDo(toDo)) : dispatch(createToDo(toDo))
			e.target.reset()
			navigate('/')
		}
	}

	return (
		toDo && (
			<form
				onSubmit={handleSubmit}
				className='bg-zinc-700 rounded-lg py-3 px-4 grid grid-cols-1 gap-3 md:w-1/2 xl:w-1/3 mx-auto'
			>
				<Input
					type='text'
					id='title'
					value={toDo.title}
					handleChange={handleChange}
				/>
				<TextArea
					id='description'
					value={toDo.description}
					handleChange={handleChange}
				/>
				<Select
					id='priority'
					value={toDo.priority}
					options={priorityOptions}
					handleChange={handleChange}
				/>
				<Input
					type='checkbox'
					id='completed'
					value={toDo.completed}
					handleChange={handleChange}
				/>
				<div className='w-1/2 mx-auto'>
					<Button
						type='submit'
						text={pathId ? 'Update To Do' : 'Create To Do'}
					/>
				</div>
				<ToDoFormError error={error} />
			</form>
		)
	)
}

export default ToDoForm
