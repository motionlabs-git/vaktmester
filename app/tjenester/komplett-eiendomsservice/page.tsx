import Button from '@/app/components/Global/Button'
import ContactUs from '@/app/components/Global/ContactUs'
import PageHeading from '@/app/components/Global/PageHeading'
import { Contact } from '@/app/constants/contact'
import { Metadata } from 'next'
import { CircleArrowRightFill } from '@gravity-ui/icons'
import Image from 'next/image'
import Tjenester from '@/app/components/Sections/Main/Tjenester/Tjenester'

export const metadata: Metadata = {
	title: `Komplett eiendomsservice i Bergen`,
	description:
		'Komplett eiendomsservice i Bergen med regelmessig tilsyn av bygg, vedlikehold av fellesområder og skreddersydde vaktmesteravtaler.',
}

const page = () => {
	return (
		<>
			<PageHeading
				image={'/images/vaktmester_bergen_roof_check.jpg'}
				title={'Komplett eiendomsservice'}
				text={
					'Vi leverer komplett eiendomsservice i Bergen for borettslag, bedrifter og eiendomseiere. Tjenestene inkluderer regelmessig vedlikehold, tilsyn av bygg og skreddersydde serviceavtaler tilpasset kundens behov.'
				}
			/>

			<section>
				<div className='section-wrapper flex flex-col-reverse lg:flex-row-reverse gap-10'>
					<div className='flex-1'>
						<Image
							src={'/images/teknisk-vedlikehold.jpeg'}
							alt={'Vaktmester Bergen - Teknisk vedlikehold'}
							width={800}
							height={800}
							className='object-cover w-full h-full aspect-square'
						/>
					</div>

					<div className='flex-1'>
						<h3>Omfang av tjenesten</h3>

						<p className='mt-4 '>
							Komplett eiendomsservice i Bergen innebærer
							regelmessig tilsyn av bygg, vedlikehold av
							fellesområder og oppfølging av eiendommens tekniske
							tilstand. Vi utfører slike tjenester blant annet i
							Bergen Fana, Sandsli og nærliggende områder.
						</p>

						<p className='mt-4 '>
							Vi tilbyr skreddersydde vaktmesteravtaler som sikrer
							stabil drift og langsiktig vedlikehold av borettslag
							og næringseiendom i hele Bergen-regionen.
						</p>

						<h4 className='mt-6'>Vår tilnærming til tjenesten</h4>
						<ul className='text-lg mt-4'>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>
								Regelmessig tilsyn av bygg
							</li>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>{' '}
								Planlagt vedlikehold
							</li>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>{' '}
								Serviceavtaler
							</li>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>{' '}
								Oppfølging av eiendom
							</li>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>{' '}
								Helhetlig vaktmester service
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
				deny='/tjenester/komplett-eiendomsservice'
			/>

			<ContactUs />
		</>
	)
}

export default page
