import Image from 'next/image'
import Link from 'next/link'
import HamburgerIcon from './HamburgerIcon'
import { NavigationLinks } from '@/app/constants/navigationLinks'
import NavLink from './NavLink'
import { usePathname } from 'next/navigation'
import React, { RefObject, useLayoutEffect } from 'react'
import Button from '../Global/Button'
import FeatherIcon from 'feather-icons-react'
import Icon from '../Global/Icon'
import { Contact } from '@/app/constants/contact'

const MobileNavigation = ({
	ref,
	handleClose,
}: {
	ref: RefObject<HTMLElement | null>
	handleClose: () => void
}) => {
	const path = usePathname()

	return (
		<aside
			ref={ref}
			id='mobileNav'
			className='md:hidden flex flex-col  fixed inset-0 left-0 z-50 w-full h-dvh bg-white px-4 pt-5 pb-10'
		>
			<div className='flex justify-between items-center'>
				<Link
					href={'/'}
					aria-label='Vaktmester Bergen - Main page'
					className='w-44'
					onClick={handleClose}
				>
					<Image
						src={'/brand/Plenklipperen_logo.png'}
						alt={'Vaktmester Bergen Logo'}
						width={300}
						height={200}
						className='w-full'
					/>
				</Link>

				<HamburgerIcon opened handleClick={handleClose} />
			</div>

			<div className='mt-10 flex-1 flex flex-col justify-between h-full'>
				<div>
					<ul className='items-center font-bold text-xl'>
						{NavigationLinks.slice(0, -1).map((link) =>
							link.subLinks ? (
								<React.Fragment key={link.link}>
									<NavLink
										text={link.text}
										link={link.link}
										path={path}
									/>
									<ul className='pl-10'>
										{link.subLinks.map((sublink) => (
											<Link
												key={sublink.link}
												aria-label={
													'Link to ' + sublink.title
												}
												className='py-2 text-base block'
												href={sublink.link}
											>
												<li>{sublink.title}</li>
											</Link>
										))}
									</ul>
								</React.Fragment>
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

					<Button
						className={'text-base mt-4'}
						text={'Kontakt oss'}
						link={'/kontakt-oss'}
					/>
				</div>
				<div className='flex gap-2 text-white'>
					<Link href={Contact.igLink} target='_blank'>
						<Icon>
							<FeatherIcon
								color='white'
								icon={'instagram'}
							></FeatherIcon>
						</Icon>
					</Link>

					<Link href={Contact.fbLink} target='_blank'>
						<Icon>
							<FeatherIcon
								color='white'
								icon={'facebook'}
							></FeatherIcon>
						</Icon>
					</Link>
				</div>
			</div>
		</aside>
	)
}

export default MobileNavigation
