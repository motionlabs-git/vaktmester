import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Navigation from './components/Layout/Navigation'
import Footer from './components/Layout/Footer'

const roboto = Roboto({
	variable: '--font-roboto',
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	metadataBase: new URL('https://gressservice.no'),
	authors: [{ name: 'Motionlabs', url: 'https://motionlabs.cz' }],
	title: {
		default: `Plenklipperen - Hagevedlikehold og Snørydding i Bergen`,
		template: 'Plenklipperen - %s',
	},
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
	twitter: {
		card: 'summary_large_image',
	},
	openGraph: {
		title: 'Plenklipperen - Hagevedlikehold og Snørydding i Bergen',
		description:
			'Vi tilbyr profesjonell gressklipp, hagevedlikehold, trefelling og snørydding for private og bedrifter i Bergen. Rask respons og pålitelig service hele året.',
		images: '/brand/open-graph.png',
	},
	icons: {
		icon: {
			url: '/brand/favicon.ico',
			href: '/brand/favicon.ico',
		},
		apple: {
			url: '/brand/apple-touch-icon.png',
			href: '/brand/apple-touch-icon.png',
		},
	},
	verification: {
		google: 'zUuHMhenAqauIr2rNk1JmfK-_GsLAhWf5WuLgu_TpS4',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='no'>
			<body className={`${roboto.className} font-roboto antialiased`}>
				<Navigation />

				<main>{children}</main>

				<Footer />
			</body>
		</html>
	)
}
