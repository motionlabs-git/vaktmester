'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavigationLinks } from '@/app/constants/navigationLinks'
import NavLink from './NavLink'
import NavLinkWithSubmenu from './NavLinkWithSubmenu'
import HamburgerIcon from './HamburgerIcon'
import Button from '../Global/Button'
import { useEffect, useRef, useState } from 'react'
import MobileNavigation from './MobileNavigation'

const Navigation = () => {
	const path = usePathname()
	const [mobileNavigation, setMobileNavigation] = useState(false)
	const mobileNavRef = useRef<null | HTMLElement>(null)

	const openMobileNav = () => {
		setMobileNavigation(true)

		setTimeout(() => {
			mobileNavRef.current?.classList.add('open')
		}, 250)
	}

	const closeMobileNav = () => {
		mobileNavRef.current?.classList.remove('open')

		setTimeout(() => {
			setMobileNavigation(true)
		}, 250)
	}

	useEffect(() => {
		closeMobileNav()
	}, [path])

	return (
		<header className='w-full flex justify-center bg-lightGray shadow-2xl z-50'>
			{mobileNavigation && (
				<MobileNavigation
					ref={mobileNavRef}
					handleClose={closeMobileNav}
				/>
			)}

			<nav className='max-w-[var(--siteWidth)] w-full px-4 items-center gap-4 flex justify-between'>
				<Link
					href={'/'}
					aria-label='Vaktmester Bergen - Main page'
					className='w-44 md:w-60'
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

					<HamburgerIcon handleClick={openMobileNav} opened={false} />

					<Button
						className={'text-sm hidden md:flex'}
						text={'Kontakt oss'}
						link={'/'}
					/>
				</div>
			</nav>
		</header>
	)
}

export default Navigation
