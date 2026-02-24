import Button from '@/app/components/Global/Button'
import Image from 'next/image'
import Link from 'next/link'
const EmblaSlide = ({
	title,
	text,
	image,
	link,
	h1,
}: {
	title: string
	text: string
	image: string
	link: string
	h1?: boolean
}) => {
	return (
		<div className='embla__slide'>
			<div className='w-full h-full relative'>
				<div className='absolute w-full h-full inset-0 flex justify-start items-end '>
					<div className='w-full pt-10 md:pt-20 heroOverlay bg-primary/45 md:bg-transparent'>
						<div className=' px-4 md:px-0 md:pl-[5vw] pb-10 md:pb-[5vw] md:pt-10 md:max-w-9/10 '>
							{h1 ? (
								<h1 className='text-white max-w-6/10 md:text-nowrap'>
									{title}
								</h1>
							) : (
								<p className='text-white text-3xl md:text-4xl lg:text-7xl font-bold leading-[1.2em]'>
									{title}
								</p>
							)}
							<p className='mt-4 text-base md:text-xl text-white  md:max-w-[60vw] xl:max-w-[40vw]'>
								{text}
							</p>

							<div className='flex gap-4 mt-6 flex-wrap'>
								<Button
									className='text-sm md:text-base '
									text='Ga til tjeneste'
									link={link}
								/>

								<Button
									className='text-sm md:text-base '
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
