import { ChevronDown } from '@gravity-ui/icons'
import Link from 'next/link'
import { useLayoutEffect, useRef, useState } from 'react'

const NavLinkWithSubmenu = ({
	text,
	link,
	path,
	submenu,
}: {
	text: string
	link: string
	path: string
	submenu: {
		title: string
		subTitle: string
		image: string
		link: string
	}[]
}) => {
	const [isSubmenu, setIsSubmenu] = useState(false)
	const submenuRef = useRef<null | HTMLDivElement>(null)

	const openSubmenu = () => {
		setIsSubmenu(true)
	}

	const closeSubmenu = () => {
		setIsSubmenu(false)
	}

	useLayoutEffect(() => {
		submenuRef.current?.classList.add('open')
	}, [isSubmenu])

	return (
		<li
			onMouseEnter={openSubmenu}
			onMouseLeave={closeSubmenu}
			className='group relative flex items-center text-blackduration-200'
		>
			<Link
				className={`h-full py-8 px-2 flex items-center gap-1 hover:text-primaryAccent  ${path === link ? 'text-primaryAccent' : 'text-black'}`}
				href={link}
			>
				{text}{' '}
				<ChevronDown className='group-hover:translate-y-0.5 duration-200' />
			</Link>

			{isSubmenu && (
				<div
					ref={submenuRef}
					id='submenu'
					className='absolute close w-80 left-1/2 -translate-x-1/2 top-full bg-lightGray shadow-2xl px-8 p-4 z-50 border-b-2 border-primary'
				>
					<ul>
						{submenu.map((i) => (
							<li
								key={i.link}
								className={`py-2 hover:text-primaryAccent duration-200 w-fit ${i.link === path ? 'text-primary' : 'text-black'}`}
							>
								<Link href={i.link}>{i.title}</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</li>
	)
}

export default NavLinkWithSubmenu
