import { useSelector } from 'react-redux'

import './App.css'
import ToDoForm from './components/toDoForm'
import ToDoList from './components/toDoList'

function App() {
	const toDosState = useSelector(state => state.toDos)

	return (
		<div className='App'>
			<h1>To do List</h1>
			<ToDoForm />
			<ToDoList />
		</div>
	)
}

export default App
