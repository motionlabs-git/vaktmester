import { Metadata } from 'next'
import PageHeading from '../components/Global/PageHeading'
import Image from 'next/image'
import ContactForm from '../components/Sections/KontaktOss/ContactForm'
import { Envelope, Handset, House } from '@gravity-ui/icons'
import { Contact } from '../constants/contact'
import Link from 'next/link'
import ContactUs from '../components/Global/ContactUs'

export const metadata: Metadata = {
	title: `Kontakt oss | Renhold og Eiendomsservice`,
	description:
		'Kontakt Vaktmester Bergen for profesjonelle vaktmestertjenester, renhold av bygg, snørydding og vedlikehold av eiendom i Bergen. Vi tilbyr skreddersydde løsninger for borettslag, sameier og næringseiendom.',
}

const page = () => {
	return (
		<>
			<PageHeading
				image={'/images/team2.jpg'}
				title={'Kontakt oss'}
				text={
					'Har du spørsmål eller ønsker et uforpliktende tilbud på vaktmestertjenester i Bergen? Ta gjerne kontakt med oss for en hyggelig og rask tilbakemelding.'
				}
			/>

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

			<ContactUs />
		</>
	)
}

export default page
