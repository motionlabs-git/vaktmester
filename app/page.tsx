import FooterCTA from './components/Layout/FooterCTA'
import Hero from './components/Sections/Main/Hero/Hero'
import HvorforOss from './components/Sections/Main/HvorforOss/HvorforOss'
import OmOss from './components/Sections/Main/OmOss/OmOss'
import Tjenester from './components/Sections/Main/Tjenester/Tjenester'

export default function Home() {
	return (
		<>
			<Hero />
			<Tjenester />
			<OmOss />
			<HvorforOss />

			<FooterCTA />
		</>
	)
}
