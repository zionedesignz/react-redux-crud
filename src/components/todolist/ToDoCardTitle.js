const ToDoCardTitle = ({ title, priority }) => {
	const priorityColors = {
		1: { bg: 'bg-red-700', txt: 'text-red-200' },
		2: { bg: 'bg-orange-600', txt: 'text-orange-200' },
		3: { bg: 'bg-green-600', txt: 'text-green-200' },
		4: { bg: 'bg-blue-500', txt: 'text-blue-200' }
	}

	return (
		<h2
			className={`${priorityColors[priority]['bg']} ${priorityColors[priority]['txt']} text-xl font-bold whitespace-nowrap rounded-lg justify-self-start px-2 py-1`}
		>
			{title}
		</h2>
	)
}

export default ToDoCardTitle
