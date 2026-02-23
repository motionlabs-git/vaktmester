import Button from '@/app/components/Global/Button'
import ContactUs from '@/app/components/Global/ContactUs'
import PageHeading from '@/app/components/Global/PageHeading'
import { Contact } from '@/app/constants/contact'
import { Metadata } from 'next'
import { CircleArrowRightFill } from '@gravity-ui/icons'
import Image from 'next/image'

export const metadata: Metadata = {
	title: ``,
	description: '',
}

const page = () => {
	return (
		<>
			<PageHeading
				image={'/testimg.jpg'}
				title={'Utendørs vedlikehold av eiendom'}
				text={
					'Vi tar oss av uteområdene rundt eiendommen din i Bergen slik at de forblir ryddige, trygge og velstelte gjennom hele sesongen. Vi utfører vedlikehold av gangveier, uteplasser og områder rundt bygninger med fokus på kvalitet og langsiktig vedlikehold.'
				}
			/>

			<section>
				<div className='section-wrapper flex flex-col-reverse lg:flex-row-reverse gap-10'>
					<div className='flex-1'>
						<Image
							src={'/testimg.jpg'}
							alt={'testimg'}
							width={800}
							height={800}
							className='object-cover w-full h-full aspect-square'
						/>
					</div>

					<div className='flex-1'>
						<h3>Omfang av tjenesten</h3>

						<p className='mt-4 '>
							Vi utfører utendørs vedlikehold av eiendom i Bergen
							inkludert rengjøring av gangveier, uteplasser og
							harde flater rundt bolig- og næringsbygg.
						</p>

						<p className='mt-4 '>
							Gjennom regelmessig vedlikehold og forebyggende
							tiltak sørger vi for trygge uteområder og reduserer
							slitasje på eiendommens overflater.
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
								Vedlikehold av gangveier
							</li>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>{' '}
								Rengjøring av uteområder
							</li>
							<li className='flex gap-2 items-center mt-4'>
								<CircleArrowRightFill
									className='text-primary'
									width={20}
									height={20}
								/>{' '}
								Fjerning av løv og smuss
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
								Sesongbasert eiendomsvedlikehold
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

			<ContactUs />
		</>
	)
}

export default page
