const ToDoCardTitle = ({ title, priority }) => {
	const priorityColors = {
		1: { bg: 'bg-red-700', txt: 'text-red-100' },
		2: { bg: 'bg-orange-600', txt: 'text-orange-100' },
		3: { bg: 'bg-green-600', txt: 'text-green-100' },
		4: { bg: 'bg-blue-500', txt: 'text-blue-100' }
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
