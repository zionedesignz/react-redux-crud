import { Link, useLocation } from 'react-router-dom'

const NavigationLink = ({ path, name }) => {
	const { pathname } = useLocation()

	return (
		<li
			className={`text-right text-bold text-xl ${
				pathname === path
					? 'text-white underline underline-offset-4'
					: 'text-zinc-400 no-underline'
			} focus:outline-none hover:text-white`}
		>
			<Link to={path}>{name}</Link>
		</li>
	)
}
export default NavigationLink
