import React from 'react'

const HamburgerIcon = ({
	handleClick,
	opened,
}: {
	handleClick: () => void
	opened?: boolean
}) => {
	if (!opened) {
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

	return (
		<button
			onClick={handleClick}
			className='relative w-8 h-8 min-w-8 aspect-square flex md:hidden gap-2 justify-center flex-col'
		>
			<span className='h-0.5 w-full bg-primary absolute rotate-45'></span>
			<span className='h-0.5 w-full bg-primary -rotate-45'></span>
		</button>
	)
}

export default HamburgerIcon
