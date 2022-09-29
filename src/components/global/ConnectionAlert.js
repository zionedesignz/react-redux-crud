import React, { useEffect, useState } from 'react'

const ConnectionAlert = () => {
	const [alertConection, setAlertConection] = useState(false)

	useEffect(() => {
		window.addEventListener('online', getOnLineStatus)
		window.addEventListener('offline', getOnLineStatus)
		return () => {
			window.removeEventListener('online', getOnLineStatus)
			window.removeEventListener('offline', getOnLineStatus)
		}
	}, [])

	const getOnLineStatus = () => {
		const connection =
			typeof navigator !== 'undefined' &&
			typeof navigator.onLine === 'boolean'
				? navigator.onLine
				: false

		connection ? setAlertConection(false) : setAlertConection(true)
		return connection
	}

	if (alertConection) {
		const interval = setInterval(() => {
			const hasConnection = getOnLineStatus()
			if (hasConnection) {
				window.location.reload()
				clearInterval(interval)
			}
		}, 1000)
	}

	return (
		alertConection && (
			<div className='sm:absolute h-max w-full bg-zinc-900 -top-4 mx-auto'>
				<p className='bg-red-600 w-full text-white text-bold text-center pt-1 pb-1 mx-auto sm:rounded sm:text-lg sm:w-1/2 sm:pt-5'>
					No hay conexión a internet
				</p>
			</div>
		)
	)
}

export default ConnectionAlert
