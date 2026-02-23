import Image from 'next/image'
import ContactForm from '../Sections/KontaktOss/ContactForm'

const ContactUs = () => {
	return (
		<section className='relative flex-col md:flex-row flex justify-center w-full md:mt-12 !py-0 md:pb-16'>
			<div className='section-wrapper justify-center flex gap-20 relative z-10 '>
				<div className='flex-1 hidden md:block '></div>
				<div className='flex-1 md:pb-16'>
					<h3>
						Ønsker du en stabil partner for vedlikehold av eiendom?
					</h3>

					<div className='mt-10 whiteBox p-10 '>
						<ContactForm />
					</div>
				</div>
			</div>

			<div className='md:absolute md:inset-0 w-full h-full mt-12 md:mt-0'>
				<Image
					src={'/images/house_cleaning.png'}
					alt={'test'}
					width={1200}
					height={1000}
					className='w-full h-full object-cover object-top user-select-none'
				/>
			</div>
		</section>
	)
}

export default ContactUs
