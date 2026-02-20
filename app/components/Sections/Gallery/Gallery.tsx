'use client'
import { useState } from 'react'
import GalleryImage from './GalleryImage'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Xmark } from '@gravity-ui/icons'

const gallery = [
	{
		img: '/testimg.jpg',
		title: 'Gressklipping i Bergen – velstelt plen etter profesjonell klipp',
	},
	{
		img: '/testimg.jpg',
		title: 'Gressklipping i Bergen – velstelt plen etter profesjonell klipp',
	},
	{
		img: '/testimg.jpg',
		title: 'Gressklipping i Bergen – velstelt plen etter profesjonell klipp',
	},
]

const Gallery = () => {
	const [selectedImage, setSelectedImage] = useState<null | number>(null)

	const nextImage = () => {
		setSelectedImage((prev) =>
			prev !== null ? (prev + 1) % gallery.length : null
		)
	}

	const prevImage = () => {
		setSelectedImage((prev) =>
			prev !== null ? (prev - 1 + gallery.length) % gallery.length : null
		)
	}

	return (
		<section>
			{selectedImage !== null && (
				<div className='fixed inset-0 w-screen h-dvh  bg-darkGreen/50 backdrop-blur-xs z-50 py-24 px-4 flex gap-4 items-center justify-center select-none'>
					<button
						onClick={prevImage}
						className='absolute z-50 left-6 md:left-0 md:relative group pointer-events-auto w-10 aspect-square bg-primary hover:bg-primaryAccent duration-200 text-white flex justify-center items-center'
					>
						<ChevronLeft className='group-hover:-translate-x-0.5 duration-200' />
					</button>

					<div className='relative aspect-4/5 overflow-hidden h-auto w-xl'>
						<button
							onClick={() => setSelectedImage(null)}
							className='absolute top-2 right-2 group pointer-events-auto w-10 aspect-square bg-primary hover:bg-primaryAccent duration-200 text-white flex justify-center items-center'
						>
							<Xmark />
						</button>

						<Image
							src={gallery[selectedImage].img}
							alt={'lasdkjflkdasfj'}
							width={1000}
							height={1000}
							className='w-full h-full object-cover'
						/>
					</div>

					<button
						onClick={nextImage}
						className=' absolute z-50 right-6 md:left-0 md:relative group pointer-events-auto w-10 aspect-square bg-primary hover:bg-primaryAccent duration-200 text-white flex justify-center items-center'
					>
						<ChevronRight className='group-hover:translate-x-0.5 duration-200' />
					</button>
				</div>
			)}

			<div className='section-wrapper'>
				<div className='grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-3'>
					{gallery.map((img, i) => (
						<GalleryImage
							key={i}
							img={img.img}
							title={img.title}
							handleClick={() => setSelectedImage(i)}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Gallery
