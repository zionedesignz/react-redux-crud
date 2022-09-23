const ToDoFormError = ({ error }) => (
	<div
		className={`${
			error ? 'opacity-100 h-max' : 'opacity-0 h-0'
		} transition-opacity duration-200 w-full`}
	>
		<p className='text-center text-red-400'>{error}</p>
	</div>
)

export default ToDoFormError
