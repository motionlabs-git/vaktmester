import Image from 'next/image'

const PageHeading = ({
	image,
	title,
	text,
}: {
	image: string
	title: string
	text: string
}) => {
	return (
		<section className='!py-0 !block h-[80vh] md:h-[60vh]'>
			<div className='h-3/4 w-full select-none'>
				<Image
					src={image}
					alt={title}
					width={1200}
					height={1000}
					className='w-full h-full object-cover '
				/>
			</div>

			<div className='w-full h-1/4 flex justify-center px-4'>
				<div className='whiteBox text-center h-fit -translate-y-1/2 md:-translate-y-1/3 p-10 w-full md:max-w-1/2'>
					<h2>{title}</h2>
					<p className='mt-6 text-darkGray'>
						<em>{text}</em>
					</p>
				</div>
			</div>
		</section>
	)
}

export default PageHeading
