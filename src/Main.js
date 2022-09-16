import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Navigation from './components/Navigation'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'

function Main() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navigation />
				<h1>To Do List</h1>
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
