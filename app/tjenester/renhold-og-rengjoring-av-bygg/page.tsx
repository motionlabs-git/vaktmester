import Button from '@/app/components/Global/Button'
import ContactUs from '@/app/components/Global/ContactUs'
import PageHeading from '@/app/components/Global/PageHeading'
import { Contact } from '@/app/constants/contact'
import { Metadata } from 'next'
import { CircleArrowRightFill } from '@gravity-ui/icons'
import Image from 'next/image'
import Tjenester from '@/app/components/Sections/Main/Tjenester/Tjenester'

export const metadata: Metadata = {
	title: `Renhold av bygg i Bergen - Fasadevask og rengjøring`,
	description:
		'Profesjonell rengjøring av bygg i Bergen inkludert fasadevask, trapperom og fellesområder. Renholdstjenester for borettslag, sameier og næringsbygg i Bergen.',
}

const page = () => {
	return (
		<>
			<PageHeading
				image={'/images/vaktmester_bergen_hoytrikking2.jpeg'}
				title={'Renhold og rengjøring av bygg'}
				text={
					'Vi tilbyr profesjonell rengjøring av bygg i Bergen for borettslag, bedrifter og private eiendommer. Vi sørger for grundig vask av fasader, inngangspartier og fellesområder slik at eiendommen fremstår ren, representativ og godt vedlikeholdt gjennom hele året.'
				}
			/>

			<section>
				<div className='section-wrapper flex flex-col-reverse lg:flex-row-reverse gap-10'>
					<div className='flex-1'>
						<Image
							src={'/images/building_cleaning.jpg'}
							alt={
								'Vaktmester Bergen - Renhold og rengjøring av bygg'
							}
							width={800}
							height={800}
							className='object-cover w-full h-full aspect-square'
						/>
					</div>

					<div className='flex-1'>
						<h3>Dette får du med tjenesten</h3>

						<p className='mt-4 '>
							Vi tilbyr profesjonell renhold av bygg i Bergen med
							fokus på regelmessig vedlikehold av fasader,
							inngangspartier og fellesområder i borettslag og
							næringsbygg.
						</p>

						<p className='mt-4 '>
							Ved bruk av moderne rengjøringsutstyr og effektive
							metoder sikrer vi langvarig beskyttelse av
							overflater og reduserer behovet for fremtidige
							reparasjoner.
						</p>

						<h4 className='mt-6'>
							Arbeidsoppgaver vi vanligvis utfører under våre
							faste besøk:
						</h4>
						<ul className='text-lg mt-4'>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>
								Fasadevask
							</li>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>{' '}
								Rengjøring av fellesområder
							</li>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>{' '}
								Vask av inngangspartier
							</li>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>{' '}
								Renhold av trapperom
							</li>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>{' '}
								Regelmessig byggvedlikehold
							</li>
						</ul>

						<div className='flex gap-4 flex-wrap mt-10'>
							<Button
								className={'text-base md:text-lg'}
								text={Contact.phone}
								link={`tel:${Contact.phone}`}
							/>

							<Button
								className={'text-base md:text-lg'}
								text={Contact.mail}
								link={`mailto:${Contact.mail}`}
							/>
						</div>
					</div>
				</div>
			</section>

			<Tjenester
				title='Andre relevante tjenester'
				deny='/tjenester/renhold-og-rengjoring-av-bygg'
			/>

			<ContactUs />
		</>
	)
}

export default page
