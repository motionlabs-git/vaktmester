'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect } from 'react'
import EmblaSlide from './EmblaSlide'
import { ChevronLeft, ChevronRight } from '@gravity-ui/icons'

const Hero = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 5000, stopOnInteraction: false }),
	])

	useEffect(() => {
		if (!emblaApi) return
		emblaApi.plugins().autoplay?.play()
	}, [emblaApi])

	const goToPrev = () => {
		emblaApi?.scrollPrev()
	}
	const goToNext = () => emblaApi?.scrollNext()

	return (
		<section className='!px-0 !py-0 h-[calc(100dvh-var(--navHeight))]'>
			<div className='embla w-full h-full relative'>
				<div className='embla__viewport' ref={emblaRef}>
					<div className='embla__container'>
						<EmblaSlide
							title={'Vaktmester Bergen'}
							text={
								'Vi følger opp eiendommer og uteområder i Fana, Åsane og Askøy med regelmessig tilsyn og vedlikehold.'
							}
							image={'/images/vaktmester_bergen_roof_check.jpg'}
							link={'/tjenester/komplett-eiendomsservice'}
							h1
						/>
						<EmblaSlide
							title={'Butikkvedlikehold'}
							text={
								'Vi sørger for løpende vedlikehold av næringseiendom og dagligvarebutikker som KIWI i Bergen og Sandsli.'
							}
							image={'/images/vaktmester_window_cleaning.jpg'}
							link={'/tjenester/utendors-vedlikehold-av-eiendom'}
						/>
						<EmblaSlide
							title={'Uteområder i orden'}
							text={
								'Vedlikehold av grøntarealer og eiendommer i Bergen sentrum, Askøy og omkringliggende bydeler.'
							}
							image={'/images/trefelling.jpg'}
							link={'/tjenester/utendors-vedlikehold-av-eiendom'}
						/>

						<EmblaSlide
							title={'Teknisk drift'}
							text={
								'Teknisk oppfølging og serviceoppdrag på bygg i Fana og Sandsli gjennom hele året.'
							}
							image={'/images/jerry_bulb_change.jpg'}
							link={'/tjenester/teknisk-vedlikehold-av-bygg'}
						/>

						<EmblaSlide
							title={'Eiendomsvedlikehold'}
							text={
								'Regelmessig renhold og utvendig vedlikehold av eiendommer i Sandsli og Sandviken.'
							}
							image={'/images/vaktmester_house_cleaning.jpeg'}
							link={'/tjenester/renhold-og-rengjoring-av-bygg'}
						/>
					</div>
				</div>

				<div className='absolute hidden inset-0 md:flex justify-between items-center pointer-events-none px-4'>
					<button
						onClick={goToPrev}
						className='embla__prev group pointer-events-auto w-10 aspect-square bg-primary hover:bg-primaryAccent duration-200 text-white flex justify-center items-center'
					>
						<ChevronLeft className='group-hover:-translate-x-0.5 duration-200' />
					</button>

					<button
						onClick={goToNext}
						className='embla__prev group pointer-events-auto w-10 aspect-square bg-primary hover:bg-primaryAccent duration-200 text-white flex justify-center items-center'
					>
						<ChevronRight className='group-hover:translate-x-0.5 duration-200' />
					</button>
				</div>
			</div>
		</section>
	)
}

export default Hero
