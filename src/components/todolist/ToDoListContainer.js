import { Link } from 'react-router-dom'

import ToDoCard from './ToDoCard'
import ToDoCardDescription from './ToDoCardDescription'
import ToDoCardStatusIcon from './ToDoCardStatusIcon'
import ToDoCardTitle from './ToDoCardTitle'
import ToDoListContainerStatus from './ToDoListContainerStatus'

const ToDoListContainer = ({ toDos, type, show = true, handleDelete }) => (
	<div
		className={`${
			show ? 'opacity-100 h-max' : 'opacity-0 h-0 hidden'
		} transition-opacity duration-200`}
	>
		<ToDoListContainerStatus toDos={toDos} type={type} />
		<div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8'>
			{toDos.map(({ id, title, description, completed, priority }) => (
				<ToDoCard key={id}>
					<ToDoCard.Header>
						<ToDoCardTitle title={title} priority={priority} />
						<ToDoCardStatusIcon status={completed} />
					</ToDoCard.Header>
					<ToDoCard.Body>
						<ToDoCardDescription description={description} />
					</ToDoCard.Body>
					<ToDoCard.Footer>
						<button
							className='text-zinc-300 text-center text-bold rounded bg-zinc-600 border-0 py-1 px-4 focus:outline-none hover:bg-zinc-800 w-full'
							onClick={() => handleDelete(id)}
						>
							Delete
						</button>
						<Link
							className='text-zinc-300 text-center text-bold rounded bg-zinc-600 border-0 py-1 px-4 focus:outline-none hover:bg-zinc-800 w-full'
							to={`/update/${id}`}
						>
							Update
						</Link>
					</ToDoCard.Footer>
				</ToDoCard>
			))}
		</div>
	</div>
)

export default ToDoListContainer
