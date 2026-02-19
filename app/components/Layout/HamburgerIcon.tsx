import React from 'react'

const HamburgerIcon = ({ handleClick }: { handleClick: () => void }) => {
	return (
		<button
			onClick={handleClick}
			className='w-8 py-8 min-w-8 aspect-square flex md:hidden gap-2 justify-center flex-col'
		>
			<span className='h-0.5 w-full bg-primary'></span>
			<span className='h-0.5 w-full bg-primary'></span>
			<span className='h-0.5 w-full bg-primary'></span>
		</button>
	)
}

export default HamburgerIcon
