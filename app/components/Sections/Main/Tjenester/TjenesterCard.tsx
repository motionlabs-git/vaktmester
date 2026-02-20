import Image from 'next/image'
import Button from '@/app/components/Global/Button'

const TjenesterCard = () => {
	return (
		<div className='shadow-2xl bg-lightGrayAccent col-span-1 w-full h-full flex flex-col'>
			<Image
				src={'/testimg.jpg'}
				alt={'testimg'}
				width={400}
				height={400}
				className='w-full aspect-video object-cover'
			></Image>

			<div className='p-4 flex-1 flex flex-col justify-between'>
				<div>
					<h3>alsdfjl</h3>

					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Tempore sit fugiat, voluptatem sequi vel deleniti
						quam ipsum, a
					</p>
				</div>

				<Button
					className='text-base mt-4 justify-self-end'
					text='Les mer'
					link='/'
				/>
			</div>
		</div>
	)
}

export default TjenesterCard
