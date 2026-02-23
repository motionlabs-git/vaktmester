import Button from '@/app/components/Global/Button'
import Image from 'next/image'

const OmOss = () => {
	return (
		<section className='relative flex justify-center'>
			<div className='w-full h-[80vh] pt-40 sm:pt-20'>
				<Image
					src={'/images/team2.jpg'}
					alt={'Vaktmester Bergen - Om oss'}
					width={1200}
					height={1000}
					className='w-full h-full object-cover'
				/>
			</div>

			<div className='absolute inset-0 right-0 flex justify-center pt-12 '>
				<div className='section-wrapper flex justify-end'>
					<div className='whiteBox w-2xl h-fit p-10'>
						<h3>Om oss</h3>

						<p className='mt-6 text-darkGray'>
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

						<p className='mt-6 text-darkGray'>
							Vi tilbyr også gressklipping og enkelt
							hagevedlikehold i Bergen som en del av vår
							eiendomsservice. For kunder som har behov for mer
							omfattende plenklipping, hekkeklipping og komplett
							hageservice, henviser vi til vårt spesialiserte
							nettsted for hagetjenester, hvor du finner mer
							informasjon om våre dedikerte løsninger innen grønt
							vedlikehold i Bergen.
						</p>

						<Button
							className={'text-base mt-6'}
							text={'Les om oss'}
							link={'/om-oss'}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default OmOss
