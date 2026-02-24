import { Metadata } from 'next'
import Button from './components/Global/Button'

export const metadata: Metadata = {
	title: `Oi! Denne siden ble ikke funnet`,
	authors: [{ name: 'Motionlabs', url: 'https://motionlabs.cz' }],
	description:
		'Vaktmestertjenester i Bergen – renhold, teknisk vedlikehold, uteområder og snørydding for borettslag og næringseiendom.',
	keywords: [
		'vaktmester bergen',
		'vaktmester tjenester bergen',
		'vaktmesterfirma bergen',
		'eiendomsservice bergen',
		'drift og vedlikehold bergen',
		'teknisk drift bergen',
		'byggvedlikehold bergen',
		'vedlikehold av bygg bergen',
		'facility management bergen',
		'eiendomsdrift bergen',
		'renhold og vedlikehold bergen',
		'gårdsvaktmester bergen',
		'sameie vaktmester bergen',
		'borettslag vaktmester bergen',
		'vaktmestertjenester for bedrifter bergen',
		'vaktmester nær meg bergen',
		'lokal vaktmester bergen',
		'vaktmester service bergen',
		'eiendom vedlikehold bergen',
		'utendørs vedlikehold bergen',
		'snørydding bergen',
		'gressklipping bergen',
		'hagearbeid bergen',
		'vintervedlikehold bergen',
		'småreparasjoner bergen',
		'tilsyn av eiendom bergen',
		'teknisk vaktmester bergen',
		'vaktmester avtale bergen',
		'profesjonell vaktmester bergen',
		'eiendomsservice for sameie bergen',
	],
	twitter: {
		card: 'summary_large_image',
	},
	openGraph: {
		title: 'Vaktmester Bergen – Renhold og Vedlikehold av Bygg',
		description:
			'Vaktmestertjenester i Bergen – renhold, teknisk vedlikehold, uteområder og snørydding for borettslag og næringseiendom.',
		images: '/brand/open-graph.png',
	},
	robots: {
		index: false,
		follow: false,
	},
}

const PageNotFound = () => {
	return (
		<section className='min-h-[80vh] flex flex-col items-center justify-center'>
			<div className='section-wrapper flex flex-col items-center'>
				<h1 className='text-center text-primary'>Feil 404</h1>
				<h2 className='text-center'>
					Oi! Denne siden ble ikke funnet.
				</h2>
				<p className='mt-4'>
					Beklager, men siden du leter etter ble ikke funnet.
				</p>

				<Button
					className={'mt-10 text-base md:text-lg'}
					text={'Gå hjem'}
					link={'/'}
				/>
			</div>
		</section>
	)
}

export default PageNotFound
