const Input = ({ type, id, value, handleChange }) => (
	<label
		className={`font-bold text-md text-white flex ${
			type === 'checkbox' ? 'items-center' : 'flex-col'
		} capitalize gap-2`}
		htmlFor={id}
	>
		{id}
		<input
			className='text-gray-300 text-basic font-normal rounded bg-zinc-600 border-0 p-2 focus:outline-none focus:bg-zinc-500 focus:text-gray-800 hover:bg-zinc-500 hover:text-gray-800'
			type={type}
			name={id}
			id={id}
			value={value}
			checked={value}
			onChange={handleChange}
		/>
	</label>
)

export default Input
