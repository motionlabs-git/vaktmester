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
		default: `Vaktmester Bergen – Renhold og Vedlikehold av Bygg`,
		template: 'Vaktmester Bergen - %s ',
	},
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
		google: 'pD9CLc51fXfzSQU_RgLUULvOSd-T0v5_lqxlgtfYS7c',
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
