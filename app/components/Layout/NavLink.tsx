import Link from 'next/link'

const NavLink = ({
	text,
	link,
	path,
}: {
	text: string
	link: string
	path: string
}) => {
	return (
		<li
			className={`flex items-center hover:text-primaryAccent duration-200 ${link === path ? 'text-primary' : 'text-black'}`}
		>
			<Link
				className={`block h-full py-2 md:py-8 px-2 text-nowrap ${path === link ? 'text-primaryAccent' : ''}`}
				href={link}
			>
				{text}
			</Link>
		</li>
	)
}

export default NavLink
