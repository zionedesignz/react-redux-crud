import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navigation from './components/navigation/Navigation'
import ToDoForm from './components/todoform/ToDoForm'
import ToDoList from './components/todolist/ToDoList'

function Main() {
	const [showCompletedToDos, setShowCompletedToDos] = useState(false)

	const handleToggleShowCompletedToDos = () =>
		setShowCompletedToDos(!showCompletedToDos)

	return (
		<div className='bg-zinc-900 min-h-screen text-white mx-auto p-5 sm:p-10 md:p-15'>
			<BrowserRouter>
				<header className='grid grid-cols-2 items-center mb-4'>
					<h1 className='text-4xl font-light justify-self-start w-max'>
						TO DO LIST
					</h1>
					<Navigation />
				</header>
				<Routes>
					<Route
						path='/'
						element={
							<ToDoList
								showCompletedToDos={showCompletedToDos}
								handleToggleShowCompletedToDos={
									handleToggleShowCompletedToDos
								}
							/>
						}
						exact
					/>
					<Route path='/create' element={<ToDoForm />} exact />
					<Route path='/update/:id' element={<ToDoForm />} exact />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default Main
