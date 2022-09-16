import React from 'react'
import {Link} from 'react-router-dom'

function Navigation() {
	

	return (
		<nav>
			<ul>
                <li>
                    <Link to='/create'>Create</Link>
                </li>
            </ul>
		</nav>
	)
}

export default Navigation
