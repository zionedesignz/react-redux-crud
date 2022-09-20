import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navigation from './components/Navigation'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'

function Main() {
	return (
		<div className='bg-zinc-900 h-screen text-white mx-auto p-5 sm:p-10 md:p-15'>
			<BrowserRouter>
				<div className='grid grid-cols-2 items-center mb-8'>
					<h1 className='text-4xl font-light justify-self-start w-max uppercase'>
						to do list
					</h1>
					<Navigation />
				</div>
				<Routes>
					<Route path='/' element={<ToDoList />} exact />
					<Route path='/create' element={<ToDoForm />} exact />
					<Route path='/update/:id' element={<ToDoForm />} exact />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default Main
