'use client'
import { NavigationLinks } from '@/app/constants/navigationLinks'
import { Contact } from '@/app/constants/contact'
import Image from 'next/image'
import Link from 'next/link'
import { EnvelopeOpen, Smartphone, MapPin } from '@gravity-ui/icons'
import { usePathname } from 'next/navigation'
import FooterLink from './FooterLink'

const Footer = () => {
	const path = usePathname()

	return (
		<footer className='px-4 py-16 md:py-24 bg-darkGray text-white flex justify-center'>
			<div className='max-w-[var(--siteWidth)] w-full flex gap-4 md:gap-10 justify-between'>
				<div className='flex-2'>
					<Link
						href={'/'}
						aria-label='Vaktmester Bergen - Main page'
						className='block w-60'
					>
						<Image
							src={'/brand/logo.png'}
							alt={'Vaktmester Bergen Logo'}
							width={300}
							height={200}
							className='w-full'
						/>
					</Link>

					<div>
						<p className='font-bold'>
							Vaktmester Bergen - Plenkliperen
						</p>
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
								<EnvelopeOpen /> {Contact.address}
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
		</footer>
	)
}

export default Footer
