import Image from 'next/image'
import TjenesterCard from './TjenesterCard'
import { ServicesLinks } from '@/app/constants/navigationLinks'

const Tjenester = ({ title, deny }: { title?: string; deny?: string }) => {
	return (
		<section>
			<div className='section-wrapper '>
				<h2>{title ?? 'Tjenester'}</h2>

				<div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-10'>
					{ServicesLinks.map((tjenester) => {
						if (tjenester.link !== deny)
							return (
								<TjenesterCard
									key={tjenester.link}
									title={tjenester.title}
									text={tjenester.subTitle}
									image={tjenester.image}
									link={tjenester.link}
								/>
							)
					})}
				</div>
			</div>
		</section>
	)
}

export default Tjenester
