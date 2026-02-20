import { Metadata } from 'next'
import Gallery from '../components/Sections/Gallery/Gallery'
import PageHeading from '../components/Global/PageHeading'

export const metadata: Metadata = {
	title: ``,
	description: '',
}

const page = () => {
	return (
		<>
			<PageHeading
				image={'/testimg.jpg'}
				title={'Galleri av vårt arbeid'}
				text={
					'lasdjflaksdjflk ldsaj fljadslk jlasdj lfjasdl  j lasdjflaksdjflk lk jlasdj lfjasdl lasdjflaksdjflk ldsaj fljadslk jlasdj lfjasdl  j lasdjflaksdjflk lk jlasdj lfjasdl lasdjflaksdjflk ldsaj fljadslk jlasdj lfjasdl  j lasdjflaksdjflk lk jlasdj lfjasdl  j'
				}
			/>

			<Gallery />
		</>
	)
}

export default page
