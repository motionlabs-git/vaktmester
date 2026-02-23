import React from 'react'
import PageHeading from '../components/Global/PageHeading'
import { Metadata } from 'next'
import SideImageBlock from '../components/Sections/Tjenester/SideImageBlock'
import { ServicesLinks } from '../constants/navigationLinks'
import ContactUs from '../components/Global/ContactUs'

export const metadata: Metadata = {
	title: `Tjenester innen renhold, vedlikehold av bygg og eiendomsservice i Bergen`,
	description:
		'Vi tilbyr profesjonelle vaktmestertjenester i Bergen inkludert renhold av bygg, teknisk vedlikehold, utendørs vedlikehold og snørydding. Skredderssydd eiendomsservice for borettslag, sameier og næringseiendom i Bergen.',
}

const page = () => {
	return (
		<>
			<PageHeading
				image={'/testimg.jpg'}
				title={'Tjenester'}
				text={
					'Vi tilbyr et bredt spekter av vaktmestertjenester og eiendomsvedlikehold i Bergen for borettslag, bedrifter og private eiendommer. Våre tjenester inkluderer renhold av bygg, utendørs vedlikehold, teknisk service og komplett eiendomsservice – alt tilpasset dine behov for trygg drift og et velholdt bygg gjennom hele året.'
				}
			/>

			<section>
				<div className='section-wrapper flex flex-col gap-24'>
					{ServicesLinks.map((tjen, i) => {
						return (
							<SideImageBlock
								key={tjen.link}
								title={tjen.title}
								texts={tjen.text}
								link={tjen.link}
								image={tjen.image}
								reversed={(i + 1) % 2 === 1}
							/>
						)
					})}
				</div>
			</section>

			<ContactUs />
		</>
	)
}

export default page
