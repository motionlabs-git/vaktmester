import { Metadata } from 'next'
import PageHeading from '../components/Global/PageHeading'
import Image from 'next/image'
import FooterCTA from '../components/Layout/FooterCTA'
import Button from '../components/Global/Button'
import { Contact } from '../constants/contact'
import HvorforOss from '../components/Sections/Main/HvorforOss/HvorforOss'

export const metadata: Metadata = {
	title: `Om oss | Profesjonell Drift, Renhold og Eiendomsservice`,
	description:
		'Vaktmestertjenester i Bergen – renhold, teknisk vedlikehold, uteområder og snørydding for borettslag og næringseiendom.',
}

const page = () => {
	return (
		<>
			<PageHeading
				image={'/images/boys_working.jpg'}
				title={'Om oss'}
				text={
					'Vi tilbyr profesjonelle vaktmestertjenester og eiendomsservice i Bergen for borettslag, bedrifter og private eiendommer.'
				}
			/>

			<section>
				<div className='section-wrapper flex flex-col lg:flex-row gap-10'>
					<div className='flex-1'>
						<Image
							src={'/images/team.jpg'}
							alt={'Om Vaktmester Bergen - Plenklipperen'}
							width={800}
							height={800}
							className='object-cover w-full h-full '
						/>
					</div>

					<div className='flex-1'>
						<h3>Vaktmester Bergen fra Plenklipperen</h3>

						<p className='mt-4 text-lg'>
							Vi leverer profesjonelle vaktmestertjenester og
							eiendomsservice i Bergen for borettslag, sameier,
							næringsbygg og private eiendommer. Med solid
							erfaring innen renhold av bygg, teknisk vedlikehold
							og utendørs vedlikehold sørger vi for at eiendommen
							din fremstår trygg, funksjonell og godt vedlikeholdt
							gjennom hele året. Vi jobber strukturert og
							effektivt for å sikre stabil drift og langsiktig
							verdi på eiendommen.
						</p>

						<p className='mt-4 text-lg'>
							Vårt team består av pålitelige og erfarne
							medarbeidere som utfører både regelmessig
							vedlikehold og forebyggende service i Bergen.
							Gjennom tett dialog med styret eller eier tilpasser
							vi våre serviceavtaler etter eiendommens behov.
							Målet vårt er å forebygge problemer før de oppstår
							og levere en løsning som gir forutsigbarhet,
							kvalitet og trygghet.
						</p>

						<p className='mt-4 italic text-primary border-l-2 border-primary pl-4 py-1 text-lg'>
							En pålitelig samarbeidspartner for
							eiendomsvedlikehold i Bergen.
						</p>

						<p className='mt-4 text-lg'>
							Vi tilbyr også gressklipping og enkelt
							hagevedlikehold i Bergen som en del av vår
							eiendomsservice. For kunder som har behov for mer
							omfattende plenklipping, hekkeklipping og komplett
							hageservice, henviser vi til vårt spesialiserte
							nettsted for hagetjenester, hvor du finner mer
							informasjon om våre dedikerte løsninger innen grønt
							vedlikehold i Bergen.
						</p>

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

			<HvorforOss />

			<FooterCTA />
		</>
	)
}

export default page
