import Button from '@/app/components/Global/Button'
import Image from 'next/image'

const OmOss = () => {
	return (
		<section className='relative flex justify-center'>
			<div className='w-full h-[80vh] pt-12'>
				<Image
					src={'/testimg.jpg'}
					alt={'testimg'}
					width={1200}
					height={1000}
					className='w-full h-full object-cover'
				/>
			</div>

			<div className='absolute inset-0 right-0 flex justify-center pt-12'>
				<div className='section-wrapper flex justify-end'>
					<div className='whiteBox w-2xl h-fit p-10'>
						<h3>Om oss</h3>

						<p className='mt-6 text-darkGray'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dicta est, suscipit possimus fugiat delectus
							quibusdam exercitationem facere doloremque quas enim
							consequatur temporibus culpa ratione amet sint
							obcaecati incidunt aliquam. Itaque.
						</p>

						<p className='mt-6 text-darkGray'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dicta est, suscipit possimus fugiat delectus
							quibusdam exercitationem facer
						</p>

						<p className='mt-6 text-darkGray'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dicta est, suscipit possimus fugiat delectus
							quibusdam exercitationem facer
						</p>

						<Button
							className={'text-base mt-6'}
							text={'Les mer'}
							link={'/'}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default OmOss
