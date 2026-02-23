import Button from '@/app/components/Global/Button'
import Image from 'next/image'
import Link from 'next/link'
const EmblaSlide = ({
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
		<div className='embla__slide'>
			<div className='w-full h-full relative'>
				<div className='absolute w-full h-full inset-0 flex justify-start items-end '>
					<div className='w-full pt-20 heroOverlay'>
						<div className=' px-4 md:px-0 md:pl-[5vw] pb-20 md:pb-[5vw] md:pt-10 md:max-w-9/10'>
							<h1 className='text-white max-w-6/10 md:text-nowrap'>
								{title}
							</h1>
							<p className='mt-4 text-xl text-white  md:max-w-[60vw] xl:max-w-[40vw]'>
								{text}
							</p>

							<div className='flex gap-4 mt-6 flex-wrap'>
								<Button
									className='text-md'
									text='Ga til tjeneste'
									link={link}
								/>

								<Button
									className='text-md'
									text='Kontakt oss'
									link='/kontakt-oss'
								/>
							</div>
						</div>
					</div>
				</div>

				<Image
					src={image}
					alt={'Bilde ' + title}
					width={2000}
					height={1200}
					className='w-full h-full object-cover user-select-none'
				/>
			</div>
		</div>
	)
}

export default EmblaSlide
