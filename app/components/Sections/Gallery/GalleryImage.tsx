import React from 'react'
import Image from 'next/image'

const GalleryImage = ({
	img,
	title,
	handleClick,
}: {
	img: string
	title: string
	handleClick: () => void
}) => {
	return (
		<div
			onClick={handleClick}
			className='w-full aspect-4/5 overflow-hidden cursor-pointer select-none'
		>
			<Image
				src={img}
				alt={title}
				width={500}
				height={500}
				className='w-full h-full object-cover'
			/>
		</div>
	)
}

export default GalleryImage
