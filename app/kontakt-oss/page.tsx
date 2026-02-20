import { Metadata } from 'next'
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
				title={'Kontakt oss'}
				text={
					'lasdjflaksdjflk ldsaj fljadslk jlasdj lfjasdl  j lasdjflaksdjflk lk jlasdj lfjasdl lasdjflaksdjflk ldsaj fljadslk jlasdj lfjasdl  j lasdjflaksdjflk lk jlasdj lfjasdl lasdjflaksdjflk ldsaj fljadslk jlasdj lfjasdl  j lasdjflaksdjflk lk jlasdj lfjasdl  j'
				}
			/>

			<section>
				<div className='section-wrapper'></div>
			</section>
		</>
	)
}

export default page
