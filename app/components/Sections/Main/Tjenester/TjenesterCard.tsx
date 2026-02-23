import Image from 'next/image'
import Button from '@/app/components/Global/Button'

const TjenesterCard = ({
	title,
	text,
	image,
	link,
}: {
	title: string
	text: string
	image: string
	link: string
}) => {
	return (
		<div className='shadow-2xl bg-lightGrayAccent col-span-1 w-full h-full flex flex-col'>
			<Image
				src={image}
				alt={title}
				width={400}
				height={400}
				className='w-full aspect-video object-cover'
			></Image>

			<div className='p-4 flex-1 flex flex-col justify-between'>
				<div>
					<h3>{title}</h3>

					<p className='mt-4'>{text}</p>
				</div>

				<Button
					className='text-base mt-4 justify-self-end'
					text='Les mer'
					link={link}
				/>
			</div>
		</div>
	)
}

export default TjenesterCard
