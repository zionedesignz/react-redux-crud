const ToDoListContainerStatus = ({ toDos, type }) => {
	const hasToDos = toDos.length > 0
	const toDosLength = toDos.length
	const messageStatus = {
		completed: { has: 'completed', notHas: "Hasn't completed tasks" },
		pending: { has: 'to do', notHas: "Hasn't tasks to do" }
	}

	return hasToDos ? (
		<h2 className='text-md text-center text-zinc-300 font-thin border-2 border-zinc-800 rounded-lg w-max h-9 mb-4 px-2'>
			<span className='text-lg font-bold '>{toDosLength}</span>
			{` task${toDosLength > 1 ? 's' : ''} ${messageStatus[type]['has']}`}
		</h2>
	) : (
		<h2 className='text-md text-center text-zinc-300 font-thin border-2 border-zinc-800 rounded-lg w-max h-9 mb-4 px-2'>
			{messageStatus[type]['notHas']}
		</h2>
	)
}

export default ToDoListContainerStatus
