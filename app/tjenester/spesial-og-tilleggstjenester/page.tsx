import Button from '@/app/components/Global/Button'
import ContactUs from '@/app/components/Global/ContactUs'
import PageHeading from '@/app/components/Global/PageHeading'
import { Contact } from '@/app/constants/contact'
import { Metadata } from 'next'
import { CircleArrowRightFill } from '@gravity-ui/icons'
import Image from 'next/image'
import Tjenester from '@/app/components/Sections/Main/Tjenester/Tjenester'

export const metadata: Metadata = {
	title: ``,
	description: '',
}

const page = () => {
	return (
		<>
			<PageHeading
				image={'/images/hoytrikking.jpg'}
				title={'Spesial og tilleggstjenester'}
				text={
					'Vi tilbyr også fleksible spesialtjenester og enkeltoppdrag i Bergen basert på kundens behov. Vi kan raskt tilpasse oss ulike situasjoner og levere effektive løsninger både ved planlagte oppdrag og akutte behov.'
				}
			/>

			<section>
				<div className='section-wrapper flex flex-col-reverse lg:flex-row-reverse gap-10'>
					<div className='flex-1'>
						<Image
							src={'/images/roof_repair_2.jpg'}
							alt={
								'Vaktmester Bergen - Spesial og tilleggstjenester'
							}
							width={800}
							height={800}
							className='object-cover w-full h-full aspect-square'
						/>
					</div>

					<div className='flex-1'>
						<h3>Omfang av tjenesten</h3>

						<p className='mt-4 '>
							Vi tilbyr fleksible spesialtjenester innen
							eiendomsvedlikehold i Bergen tilpasset borettslag,
							bedrifter og private eiendommer.
						</p>

						<p className='mt-4 '>
							Rask respons og effektive arbeidsmetoder gjør oss i
							stand til å håndtere både planlagte oppdrag og
							akutte vedlikeholdsbehov.
						</p>

						<h4 className='mt-6'>Vår tilnærming til tjenesten</h4>
						<ul className='text-lg mt-4'>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>
								Enkeltoppdrag
							</li>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>{' '}
								Akutte vedlikeholdsoppdrag
							</li>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>{' '}
								Ekstra rengjøring
							</li>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>{' '}
								Vedlikehold rundt bygninger
							</li>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>{' '}
								Fleksible tilleggstjenester
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
				deny='/tjenester/spesial-og-tilleggstjenester'
			/>
			<ContactUs />
		</>
	)
}

export default page
