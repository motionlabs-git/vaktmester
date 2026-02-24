'use client'
import { NavigationLinks } from '@/app/constants/navigationLinks'
import { Contact } from '@/app/constants/contact'
import Image from 'next/image'
import Link from 'next/link'
import { EnvelopeOpen, Smartphone, MapPin, House } from '@gravity-ui/icons'
import { usePathname } from 'next/navigation'
import FooterLink from './FooterLink'
import Button from '../Global/Button'

const Footer = () => {
	const path = usePathname()
	const year = new Date().getFullYear()

	return (
		<footer>
			<div className='px-4 py-16 md:py-24 bg-darkGray text-white flex justify-center'>
				<div className='max-w-[var(--siteWidth)] w-full flex gap-10 flex-col-reverse md:flex-row justify-between'>
					<div className='flex-2'>
						<Link
							href={'/'}
							aria-label='Vaktmester Bergen - Main page'
							className='block w-60 md:w-70'
						>
							<Image
								src={'/brand/logo.png'}
								alt={'Vaktmester Bergen Logo'}
								width={400}
								height={300}
								className='w-full'
							/>
						</Link>

						<div>
							<p className='font-bold'>
								Vaktmester Bergen fra Plenklipperen.no AS
							</p>

							<Button
								blank
								text={'Se plenklipperen'}
								className='text-sm mt-4'
								link={'https://gressservice.no/'}
							/>
						</div>
					</div>

					<div className='flex-1'>
						<h4>Kontakt</h4>
						<ul className='mt-2'>
							<li className=''>
								<Link
									className='flex gap-2 items-center hover:text-primaryAccent duration-200 py-2 w-fit'
									href={`phone:${Contact.phone}`}
								>
									<Smartphone /> {Contact.phone}
								</Link>
							</li>
							<li className=''>
								<Link
									className='flex gap-2 items-center hover:text-primaryAccent duration-200 py-2 w-fit'
									href={`mailto:${Contact.mail}`}
								>
									<EnvelopeOpen /> {Contact.mail}
								</Link>
							</li>
							<li className=''>
								<Link
									className='flex gap-2 items-center hover:text-primaryAccent duration-200 py-2 w-fit'
									href={Contact.addressLink}
									target='_blank'
								>
									<MapPin /> {Contact.address}
								</Link>
							</li>
						</ul>
					</div>

					<div className='flex-1'>
						<h4>Menu</h4>
						<ul className='mt-2'>
							{NavigationLinks.map((link) => (
								<FooterLink
									key={link.link}
									text={link.text}
									link={link.link}
									path={path}
								/>
							))}
						</ul>
					</div>
				</div>
			</div>

			<div className='bg-darkGrayAccent w-full text-white px-4 text-xs py-4 flex justify-center'>
				<div className=' flex gap-4 md:gap-10  flex-wrap'>
					<p>
						&#169; {year === 2025 ? year : `2025 - ${year}`} | {''}
						<Link
							className='hover:text-primaryAccent'
							href={'/'}
							aria-label='VaktmesterBergen'
						>
							VaktmesterBergen
						</Link>
					</p>

					<p>
						This website was created by
						<Link
							target='_blank'
							href={'https://motionlabs.cz/'}
							className='ml-1 hover:text-primaryAccent'
							aria-label='MotionLabs link'
						>
							<Image
								src={'/ml_logo.svg'}
								alt={'MotionLabs logo'}
								width={100}
								height={100}
								className='inline w-6 pb-1 invert'
							/>{' '}
							MotionLabs
						</Link>
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
