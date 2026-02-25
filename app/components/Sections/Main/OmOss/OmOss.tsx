import Button from '@/app/components/Global/Button'
import Image from 'next/image'
import Link from 'next/link'

const OmOss = () => {
	return (
		<section className='relative flex flex-col md:flex-row justify-center'>
			<div className='w-full h-[80vh] pt-40 sm:pt-20'>
				<Image
					src={'/images/vaktmester_bergen_hoytrikking2.jpeg'}
					alt={'Vaktmester Bergen - Om oss'}
					width={1200}
					height={1000}
					className='w-full h-full object-cover object-left'
				/>
			</div>

			<div className='relative w-full md:absolute inset-0 right-0 flex justify-center md:pt-12 -translate-y-16'>
				<div className='section-wrapper flex justify-end'>
					<div className='whiteBox md:w-2xl h-fit p-10'>
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
							hageservice, henviser vi til vårt{' '}
							<Link
								href={'https://www.gressservice.no/'}
								target='_blank'
								className='text-primary'
							>
								spesialiserte nettsted forhagetjenester
							</Link>
							, hvor du finner mer informasjon om våre dedikerte
							løsninger innen grønt vedlikehold i Bergen.
						</p>

						<div className='mt-6 flex flex-wrap gap-2'>
							<Button
								className={'text-base'}
								text={'Les om oss'}
								link={'/om-oss'}
							/>

							<Button
								className={'text-base'}
								text={'Hagetjenester'}
								link={'https://www.gressservice.no/'}
								blank
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default OmOss
