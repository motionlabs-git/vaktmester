import Link from 'next/link'
import React from 'react'

const Button = ({
	className,
	text,
	link,
	blank,
}: {
	className?: string
	text: string
	link: string
	blank?: boolean
}) => {
	return (
		<Link
			target={blank ? '_blank' : '_self'}
			href={link}
			aria-label={text + ' Button'}
			className={`${className} text-nowrap block w-fit h-fit bg-primary text-white font-bold py-[1em] px-[3em] hover:bg-primaryAccent duration-200`}
		>
			{text}
		</Link>
	)
}

export default Button
