'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect } from 'react'
import EmblaSlide from './EmblaSlide'
import { ChevronLeft, ChevronRight } from '@gravity-ui/icons'

const Hero = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 5000 }),
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
		<section className='!px-0 !py-0 h-[calc(100vh-var(--navHeight))] bg-red-500'>
			<div className='embla w-full h-full relative'>
				<div className='embla__viewport' ref={emblaRef}>
					<div className='embla__container'>
						<EmblaSlide title={''} text={''} />
						<EmblaSlide title={''} text={''} />
						<EmblaSlide title={''} text={''} />
					</div>
				</div>

				<div className='absolute inset-0 flex justify-between items-center pointer-events-none px-4'>
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
