const ToDoCard = ({ children }) => (
	<div className='bg-zinc-700 rounded-lg py-3 px-4 grid gap-2'>{children}</div>
)

const Header = ({ children }) => (
	<div className='grid grid-cols-2 grid-flow-row'>{children}</div>
)

const Body = ({ children }) => <div>{children}</div>

const Footer = ({ children }) => (
	<div className='grid grid-cols-2 gap-2'>{children}</div>
)

ToDoCard.Header = Header
ToDoCard.Body = Body
ToDoCard.Footer = Footer

export default ToDoCard