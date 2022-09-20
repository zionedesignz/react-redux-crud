import React from 'react'
import {Link} from 'react-router-dom'

function Navigation() {
	

	return (
		<nav className='justify-self-end w-max'>
			<ul className='flex gap-5'>
				<li className='text-white text-right text-bold text-xl decoration-0 focus:outline-none hover:text-zinc-400 hover:underline underline-offset-8'>
                    <Link to='/'>To Do List</Link>
                </li>
                <li className='text-white text-right text-bold text-xl decoration-0 focus:outline-none hover:text-zinc-400 hover:underline underline-offset-8'>
                    <Link to='/create'>Create</Link>
                </li>
            </ul>
		</nav>
	)
}

export default Navigation
