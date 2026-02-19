'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from '@gravity-ui/icons'
import { usePathname } from 'next/navigation'
import { NavigationLinks } from '@/app/constants/navigationLinks'
import NavLink from './NavLink'
import NavLinkWithSubmenu from './NavLinkWithSubmenu'
import HamburgerIcon from './HamburgerIcon'
import Button from '../Global/Button'

const Navigation = () => {
	const path = usePathname()

	return (
		<header className='w-full flex justify-center bg-lightGray shadow-2xl z-50'>
			<nav className='max-w-[var(--siteWidth)] w-full px-4 items-center flex justify-between'>
				<Link
					href={'/'}
					aria-label='Vaktmester Bergen - Main page'
					className='w-60'
				>
					<Image
						src={'/brand/Plenklipperen_logo.png'}
						alt={'Vaktmester Bergen Logo'}
						width={300}
						height={200}
						className='w-full'
					/>
				</Link>

				<div className='flex items-center gap-4 lg:gap-10'>
					<ul className='hidden md:flex items-center gap-4 lg:gap-10 font-bold text-md '>
						{NavigationLinks.slice(0, -1).map((link) =>
							link.subLinks ? (
								<NavLinkWithSubmenu
									key={link.link}
									text={link.text}
									link={link.link}
									path={path.split('/')[0]}
									submenu={link.subLinks}
								/>
							) : (
								<NavLink
									key={link.link}
									text={link.text}
									link={link.link}
									path={path}
								/>
							)
						)}
					</ul>

					<HamburgerIcon handleClick={() => null} />

					<Button
						className={'text-sm hidden md:flex'}
						text={'Kontakt oss'}
						link={'/'}
					/>
					{/* <Link
						href={'/'}
						className='hidden sm:block bg-primary text-white font-bold text-md py-4 px-8 hover:bg-primaryAccent duration-200 text-nowrap'
					>
						Kontakt oss
					</Link> */}
				</div>
			</nav>
		</header>
	)
}

export default Navigation
