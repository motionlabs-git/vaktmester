import Link from 'next/link'
import React from 'react'

const FooterLink = ({
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
			className={`${path === link ? 'text-primaryAccent' : 'text-white'} font-bold hover:text-primaryAccent duration-200 w-fit`}
		>
			<Link className='py-2' href={link}>
				{text}
			</Link>
		</li>
	)
}

export default FooterLink
