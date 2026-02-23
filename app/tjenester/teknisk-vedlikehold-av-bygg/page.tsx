import Button from '@/app/components/Global/Button'
import ContactUs from '@/app/components/Global/ContactUs'
import PageHeading from '@/app/components/Global/PageHeading'
import { Contact } from '@/app/constants/contact'
import { Metadata } from 'next'
import { CircleArrowRightFill } from '@gravity-ui/icons'
import Image from 'next/image'
import Tjenester from '@/app/components/Sections/Main/Tjenester/Tjenester'

export const metadata: Metadata = {
	title: `Teknisk vedlikehold av bygg i Bergen`,
	description:
		'Teknisk vedlikehold av bygg i Bergen med inspeksjon, mindre reparasjoner og service av takrenner, dører og installasjoner for stabil drift av eiendom.',
}

const page = () => {
	return (
		<>
			<PageHeading
				image={'/images/vaktmester_bergen_roof_check.jpg'}
				title={'Teknisk vedlikehold av bygg'}
				text={
					'Vi tilbyr pålitelig teknisk vedlikehold av bygg i Bergen, inkludert inspeksjoner, reparasjoner og forebyggende service. Målet vårt er å forhindre problemer før de oppstår og sikre at eiendommen fungerer trygt og effektivt.'
				}
			/>

			<section>
				<div className='section-wrapper flex flex-col-reverse lg:flex-row-reverse gap-10'>
					<div className='flex-1'>
						<Image
							src={'/images/vaktmester_bergen_pilot.jpg'}
							alt={'testimg'}
							width={800}
							height={800}
							className='object-cover w-full h-full aspect-square'
						/>
					</div>

					<div className='flex-1'>
						<h3>Slik jobber vi</h3>
						<p className='mt-4 '>
							Vi tilbyr teknisk vedlikehold av bygg i Bergen
							inkludert inspeksjoner, mindre reparasjoner og
							forebyggende service på bygningsdeler.
						</p>
						<p className='mt-4 '>
							Gjennom planlagt vedlikehold av takrenner, dører og
							installasjoner forhindrer vi skader og sikrer stabil
							drift av eiendommen.
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
								Inspeksjon av bygg
							</li>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>{' '}
								Mindre reparasjoner
							</li>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>{' '}
								Vedlikehold av takrenner
							</li>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>{' '}
								Service på dører og porter
							</li>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>{' '}
								Forebyggende teknisk vedlikehold
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
				deny='/tjenester/teknisk-vedlikehold-av-bygg'
			/>

			<ContactUs />
		</>
	)
}

export default page
