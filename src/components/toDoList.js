import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { deleteToDo } from '../features/todos/toDoSlice'

function ToDoList() {
	const dispatch = useDispatch()
	const toDosState = [...useSelector(state => state.toDos)].sort((a, b) => {
		if (a.completed === false && b.completed === true) {
			return -1
		}
		if (a.completed === true && b.completed === false) {
			return 1
		}
		return 0
	})
	const toDosPending = toDosState.filter(toDo => toDo.completed === false)
	const hasToDosPending = toDosPending.length > 0

	const handleDelete = id => {
		dispatch(deleteToDo(id))
	}

	return (
		<div className='w-full'>
			{hasToDosPending ? (
				<h2 className='text-md font-thin mb-4 text-center bg-red-600 rounded-full px-4 py-1 w-max'>
					<span className='font-bold text-lg'>
						{`${toDosPending.length} `}
					</span>
					{`task${toDosPending.length === 1 ? '' : 's'} to do`}
				</h2>
			) : (
				<h2 className='text-md font-thin mb-4 text-center bg-green-400 rounded-full px-4 py-1 w-max'>
					Hasn't tasks to do
				</h2>
			)}
			<div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
				{toDosState.map(({ id, title, description, completed }) => (
					<div className='bg-zinc-700 rounded-lg py-3 px-4' key={id}>
						<div className='grid grid-cols-2 grid-flow-row'>
							<h2 className='whitespace-nowrap font-bold text-lg text-white justify-self-start'>
								{title}
							</h2>
							<p
								className={`border border-zinc-600 border-double rounded-full p-2 w-max justify-self-end text-sm ${
									completed
										? 'text-green-400'
										: 'text-red-600'
								}`}
							>
								{completed ? 'Completed' : 'Pending'}
							</p>
						</div>
						<p className='text-gray-300 text-base py-4'>
							{description}
						</p>
						<div className='grid grid-cols-2 gap-2 mt-3'>
							<button
								className='text-white text-center text-bold rounded bg-zinc-600 border-0 py-1 px-4 focus:outline-none hover:bg-zinc-800'
								onClick={() => handleDelete(id)}
							>
								Delete
							</button>
							<Link
								className='text-white text-center text-bold rounded bg-zinc-600 border-0 py-1 px-4 focus:outline-none hover:bg-zinc-800'
								to={`/update/${id}`}
							>
								Update
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ToDoList
