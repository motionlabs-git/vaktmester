import React from 'react'

const Icon = ({ children }: { children: React.JSX.Element }) => {
	return (
		<span className='w-10 h-10 aspect-square min-w-10 bg-primary flex justify-center items-center'>
			{children}
		</span>
	)
}

export default Icon
