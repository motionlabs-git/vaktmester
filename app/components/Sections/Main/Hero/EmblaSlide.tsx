import Button from '@/app/components/Global/Button'
import Image from 'next/image'
import Link from 'next/link'
const EmblaSlide = ({ title, text }: { title: string; text: string }) => {
	return (
		<div className='embla__slide'>
			<div className='w-full h-full relative'>
				<div className='absolute w-full h-full inset-0 flex justify-start items-end '>
					<div className='w-full pt-20 heroOverlay'>
						<div className=' pl-[5vw] pb-[5vw] pt-10 max-w-9/10'>
							<h1 className='text-white max-w-6/10 text-nowrap'>
								Vaktmester Bergen
							</h1>
							<p className='mt-4 text-xl text-white max-w-[50vw]'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Dolorum, cupiditate quo, est
								eius eveniet eaque deleniti ratione quis ducimus
								mollitia totam porro veniam inventore placeat
								perspiciatis quae non praesentium nam.
							</p>

							<div className='flex gap-4 mt-6'>
								<Button
									className='text-md'
									text='Om oss'
									link='/'
								/>

								<Button
									className='text-md'
									text='Kontakt oss'
									link='/'
								/>
							</div>
						</div>
					</div>
				</div>

				<Image
					src={'/testimg.jpg'}
					alt={'testimg'}
					width={2000}
					height={1200}
					className='w-full h-full object-cover user-select-none'
				/>
			</div>
		</div>
	)
}

export default EmblaSlide
