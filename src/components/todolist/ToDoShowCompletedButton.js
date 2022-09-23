const ToDoShowCompletedButton = ({ show, handleToggleShowCompletedToDos }) => (
	<div className='flex justify-end w-full'>
		<label htmlFor='toggleButton' className='flex items-center w-max mb-2'>
			<div className='pr-3 text-zinc-400 font-thin'>Show completed</div>
			<div className='relative'>
				<input
					type='checkbox'
					id='toggleButton'
					className='sr-only peer'
					checked={show}
					onChange={handleToggleShowCompletedToDos}
				/>
				<div className='bg-zinc-700 rounded-full cursor-pointer w-10 h-5'></div>
				<div className='absolute left-1 top-0.5 bg-zinc-500 w-4 h-4 rounded-full transition  peer-checked:translate-x-4 duration-200 peer-checked:bg-zinc-300'></div>
			</div>
		</label>
	</div>
)

export default ToDoShowCompletedButton
