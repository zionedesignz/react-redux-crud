import NavigationLink from './NavigationLink'

const Navigation = () => (
	<nav className='justify-self-end w-max'>
		<ul className='flex gap-5'>
			<NavigationLink path='/' name='To Do List' />
			<NavigationLink path='/create' name='Create' />
		</ul>
	</nav>
)

export default Navigation
