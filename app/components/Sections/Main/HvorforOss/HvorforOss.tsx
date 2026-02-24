import { SealCheck } from '@gravity-ui/icons'

const HvorforOss = () => {
	return (
		<section className='flex justify-center'>
			<div className='section-wrapper flex flex-col md:flex-row gap-10'>
				<div className='flex-1'>
					<h2>Derfor velger kunder oss i Bergen</h2>

					<p className='mt-10'>
						Vi tilbyr profesjonelle vaktmestertjenester og
						eiendomsservice i Bergen tilpasset borettslag, sameier,
						næringsbygg og private eiendommer. Vi arbeider blant
						annet med eiendommer i Fana, Åsane, Askøy, Sandsli og
						Sandviken, samt vedlikehold av næringslokaler som KIWI
						butikker i Bergen.
					</p>

					<p className='mt-4'>
						Med fokus på kvalitet, fleksibilitet og langsiktig
						vedlikehold sørger vi for at eiendommen din fungerer
						optimalt gjennom hele året – både innendørs og utendørs.
					</p>
				</div>

				<div className='flex-2'>
					<h3>Dine fordeler med vår eiendomsservice</h3>

					<div className='flex flex-col gap-0 sm:flex-row sm:gap-10'>
						<div className='flex-1'>
							<ul>
								<li className='flex gap-4 mt-10'>
									<SealCheck
										width={30}
										height={30}
										className='text-2xl text-primary'
									/>
									<div>
										<h4>
											Komplett eiendomsservice i Bergen
										</h4>
										<p className='mt-2 text-darkGray'>
											Vi tilbyr helhetlig drift og
											vedlikehold av bygg i Bergen for
											borettslag, næringsbygg og private
											eiendommer.
										</p>
									</div>
								</li>

								<li className='flex gap-4 mt-10'>
									<SealCheck
										width={30}
										height={30}
										className='text-2xl text-primary'
									/>
									<div>
										<h4>Renhold og vedlikehold av bygg</h4>
										<p className='mt-2 text-darkGray'>
											Profesjonell rengjøring av
											fellesområder, inngangspartier og
											fasader sikrer et rent og
											representativt bygg.
										</p>
									</div>
								</li>

								<li className='flex gap-4 mt-10'>
									<SealCheck
										width={30}
										height={30}
										className='text-2xl text-primary'
									/>
									<div>
										<h4>Teknisk vedlikehold</h4>
										<p className='mt-2 text-darkGray'>
											Forebyggende service og mindre
											reparasjoner bidrar til trygg drift
											og reduserer risikoen for skader.
										</p>
									</div>
								</li>

								<li className='flex gap-4 mt-10'>
									<SealCheck
										width={30}
										height={30}
										className='text-2xl text-primary'
									/>
									<div>
										<h4>Vedlikehold av uteområder</h4>
										<p className='mt-2 text-darkGray'>
											Vi sørger for rene og trygge
											uteområder rundt eiendommen gjennom
											hele året i Bergen.
										</p>
									</div>
								</li>
							</ul>
						</div>

						<div className='flex-1'>
							<ul>
								<li className='flex gap-4 mt-10'>
									<SealCheck
										width={30}
										height={30}
										className='text-2xl text-primary'
									/>
									<div>
										<h4>Gressklipping og hageservice</h4>
										<p className='mt-2 text-darkGray'>
											Vi tilbyr også plenklipping og
											enkelt hagevedlikehold for
											borettslag og eiendommer i Bergen.
										</p>
									</div>
								</li>

								<li className='flex gap-4 mt-10'>
									<SealCheck
										width={30}
										height={30}
										className='text-2xl text-primary'
									/>
									<div>
										<h4>Snørydding i Bergen</h4>
										<p className='mt-2 text-darkGray'>
											Effektiv brøyting og strøing av
											gangveier og uteområder i
											vintersesongen.
										</p>
									</div>
								</li>

								<li className='flex gap-4 mt-10'>
									<SealCheck
										width={30}
										height={30}
										className='text-2xl text-primary'
									/>
									<div>
										<h4>Fleksible serviceavtaler</h4>
										<p className='mt-2 text-darkGray'>
											Vi tilpasser våre tjenester etter
											eiendommens behov og tilbyr
											skreddersydde avtaler.
										</p>
									</div>
								</li>

								<li className='flex gap-4 mt-10'>
									<SealCheck
										width={30}
										height={30}
										className='text-2xl text-primary'
									/>
									<div>
										<h4>Lokal aktør i Bergen</h4>
										<p className='mt-2 text-darkGray'>
											Som lokal leverandør av
											vaktmestertjenester i Bergen er vi
											raskt på plass ved behov.
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HvorforOss
