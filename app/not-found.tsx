import { Metadata } from 'next'
import Button from './components/Global/Button'

export const metadata: Metadata = {
	title: `Oi! Denne siden ble ikke funnet`,
	description:
		'Vi tilbyr profesjonell gressklipp, hagevedlikehold, trefelling og snørydding for private og bedrifter i Bergen. Rask respons og pålitelig service hele året.',
	keywords: [
		'gressklipping Bergen',
		'plenklipping Bergen',
		'plenklipper Bergen',
		'hagearbeid Bergen',
		'hagestell Bergen',
		'vedlikehold av hage Bergen',
		'klippe plen Bergen',
		'kantklipping Bergen',
		'beskjæring av busker Bergen',
		'beskjæring av trær Bergen',
		'hekkeklipping Bergen',
		'fjerning av ugress Bergen',
		'hage service Bergen',
		'utendørs vedlikehold Bergen',
		'plen service Bergen',
		'profesjonell plenklipping Bergen',
		'snømåking Bergen',
		'snørydding Bergen',
		'strøing Bergen',
		'vintertjenester Bergen',
		'brøyting Bergen',
		'takmåking Bergen',
		'feiing av uteområder Bergen',
		'rengjøring av terrasse Bergen',
		'høytrykksspyling Bergen',
		'spyling av uteområder Bergen',
		'hage hjelp Bergen',
		'lokal gartner Bergen',
		'plenpleie Bergen',
		'sesongarbeid hage Bergen',
	],
	authors: [{ name: 'Motionlabs', url: 'https://motionlabs.cz' }],
	twitter: {
		card: 'summary_large_image',
	},
	openGraph: {
		title: 'Plenklipperen - Hagevedlikehold og Snørydding i Bergen',
		description: '',
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
					className={'mt-10 text-lg'}
					text={'Ga hjem'}
					link={'/'}
				/>
			</div>
		</section>
	)
}

export default PageNotFound
