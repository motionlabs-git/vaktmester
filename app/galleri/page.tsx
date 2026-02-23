import { Metadata } from 'next'
import Gallery from '../components/Sections/Gallery/Gallery'
import PageHeading from '../components/Global/PageHeading'

export const metadata: Metadata = {
	title: `Galleri | Utførte Oppdrag og Referanser`,
	description:
		'Se bilder fra våre utførte oppdrag innen renhold av bygg, fasadevask, snørydding og eiendomsservice i Bergen. Vaktmester Bergen leverer pålitelige tjenester til borettslag, sameier og næringseiendom.',
}

const page = () => {
	return (
		<>
			<PageHeading
				image={'/testimg.jpg'}
				title={'Galleri av vårt arbeid'}
				text={
					'Se bilder fra våre utførte oppdrag innen renhold av bygg, fasadevask, snørydding og eiendomsservice i Bergen. Vaktmester Bergen leverer pålitelige tjenester til borettslag, sameier og næringseiendom.'
				}
			/>

			<Gallery />
		</>
	)
}

export default page
