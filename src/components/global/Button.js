const Button = ({ type, text }) => (
	<button
		type={type}
		className='text-white text-center text-bold rounded bg-zinc-600 border-0 py-1 px-4 focus:outline-none hover:bg-zinc-800 w-full'
	>
		{text}
	</button>
)

export default Button
