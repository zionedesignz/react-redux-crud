import NavigationLink from './NavigationLink'

const Navigation = () => (
	<nav className='row-start-2 row-span-1 column-start-1 column-span-2 w-max justify-self-end sm:row-start-1 sm:row-span-2 sm:column-start-2 sm:column-span-1'>
		<ul className='flex gap-5 pt-3 sm:pt-0'>
			<NavigationLink path='/' name='To Do List' />
			<NavigationLink path='/create' name='Create' />
		</ul>
	</nav>
)

export default Navigation
