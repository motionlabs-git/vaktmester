import Image from 'next/image'
import TjenesterCard from './TjenesterCard'

const Tjenester = () => {
	return (
		<section>
			<div className='section-wrapper '>
				<h2>Tjenester</h2>

				<div className='mt-10 grid grid-cols-3 gap-10'>
					<TjenesterCard />
					<TjenesterCard />
					<TjenesterCard />
					<TjenesterCard />
					<TjenesterCard />
				</div>
			</div>
		</section>
	)
}

export default Tjenester
