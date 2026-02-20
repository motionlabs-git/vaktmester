import { Metadata } from 'next'
import PageHeading from '../components/Global/PageHeading'
import Image from 'next/image'
import ContactForm from '../components/Sections/KontaktOss/ContactForm'
import { Envelope, Handset, House } from '@gravity-ui/icons'
import { Contact } from '../constants/contact'
import Link from 'next/link'

export const metadata: Metadata = {
	title: ``,
	description: '',
}

const page = () => {
	return (
		<>
			<PageHeading
				image={'/testimg.jpg'}
				title={'Kontakt oss'}
				text={
					'lasdjflaksdjflk ldsaj fljadslk jlasdj lfjasdl  j lasdjflaksdjflk lk jlasdj lfjasdl lasdjflaksdjflk ldsaj fljadslk jlasdj lfjasdl  j lasdjflaksdjflk lk jlasdj lfjasdl lasdjflaksdjflk ldsaj fljadslk jlasdj lfjasdl  j lasdjflaksdjflk lk jlasdj lfjasdl  j'
				}
			/>

			{/* <ContactOss /> */}

			<section>
				<div className='section-wrapper '>
					<ul className='flex flex-col flex-wrap sm:flex-row pt-12 gap-4 md:gap-8 w-full text-left'>
						<li className='whiteBox flex-1 p-10 md:p-8 flex items-center gap-6'>
							<span className='min-w-14 w-14 sm:min-w-16 sm:w-16 aspect-square bg-lightGray flex justify-center items-center rounded-full text-black'>
								<Handset width={20} height={20} />
							</span>

							<div>
								<p className='text-xl font-bold'>Telefon</p>
								<Link
									aria-label='Plenklipperen phone link'
									href={`phone:${Contact.phone}`}
									className='text-nowrap '
								>
									{Contact.phone}
								</Link>
							</div>
						</li>

						<li className='whiteBox flex-1 p-10 md:p-8 flex items-center gap-6'>
							<span className='min-w-14 w-14 sm:min-w-16 sm:w-16 aspect-square bg-lightGray flex justify-center items-center rounded-full text-black'>
								<Envelope width={20} height={20} />
							</span>

							<div>
								<p className='text-xl font-bold'>E-post</p>
								<Link
									aria-label='Plenklipperen email link'
									href={`mailto:${Contact.mail}`}
									className='text-nowrap'
								>
									{Contact.mail}
								</Link>
							</div>
						</li>

						<li className='whiteBox flex-1 p-10 md:p-8 flex items-center gap-6'>
							<span className='min-w-14 w-14 sm:min-w-16 sm:w-16 aspect-square bg-lightGray flex justify-center items-center rounded-full text-black'>
								<House width={20} height={20} />
							</span>

							<div>
								<p className='text-xl font-bold'>Adresse</p>
								<p>{Contact.address}</p>
							</div>
						</li>
					</ul>
				</div>
			</section>

			<section className='relative flex-col md:flex-row flex justify-center w-full md:mt-12 !py-0 md:pb-16'>
				<div className='section-wrapper justify-center flex gap-20 relative z-10 '>
					<div className='flex-1 hidden md:block '></div>
					<div className='flex-1 md:pb-16'>
						<h3>
							Ønsker du en samarbeidspartner som er solid og til å
							stole på?
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
		</>
	)
}

export default page
