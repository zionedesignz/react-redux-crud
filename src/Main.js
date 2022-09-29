import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ConnectionAlert from './components/global/ConnectionAlert'
import Navigation from './components/navigation/Navigation'
import ToDoForm from './components/todoform/ToDoForm'
import ToDoList from './components/todolist/ToDoList'

function Main() {
	const [showCompletedToDos, setShowCompletedToDos] = useState(false)

	const handleToggleShowCompletedToDos = () =>
		setShowCompletedToDos(!showCompletedToDos)

	return (
		<>
			<ConnectionAlert />
			<div className='bg-zinc-900 min-h-screen text-white mx-auto p-5 sm:p-10 md:p-15'>
				<BrowserRouter>
					<header className='grid grid-cols-auto grid-rows-auto items-center mb-4'>
						<h1 className='row-start-1 row-span-1 column-start-1 column-span-2 text-4xl font-light w-max justify-self-start sm:row-start-1 sm:row-span-2 sm:column-start-1 sm:column-span-1'>
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
						<Route
							path='/update/:id'
							element={<ToDoForm />}
							exact
						/>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	)
}

export default Main
