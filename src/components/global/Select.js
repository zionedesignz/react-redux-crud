const Select = ({ id, value, options, handleChange }) => (
	<label
		className='font-bold text-md text-white flex flex-col capitalize gap-2'
		htmlFor={id}
	>
		{id}
		<select
			className='text-gray-300 text-basic font-normal rounded bg-zinc-600 border-0 p-2 focus:outline-none focus:bg-zinc-500 hover:bg-zinc-500 hover:text-gray-800 focus:text-gray-800'
			name={id}
			id={id}
			defaultValue={value}
			onChange={handleChange}
		>
			{Object.entries(options).map(([key, value]) => (
				<option value={key} key={key}>
					{value}
				</option>
			))}
		</select>
	</label>
)

export default Select
