import Image from 'next/image'
import Button from '../../Global/Button'

const SideImageBlock = ({
	title,
	texts,
	link,
	image,
	reversed,
}: {
	title: string
	texts: string[]
	link: string
	image: string
	reversed?: boolean
}) => {
	return (
		<div
			className={`flex flex-col-reverse ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'}  gap-10`}
		>
			<div className='flex-1'>
				<Image
					src={image}
					alt={title}
					width={800}
					height={800}
					className='object-cover w-full h-full'
				/>
			</div>

			<div className='flex-1'>
				<h3>{title}</h3>

				{texts.map((t, key) => (
					<p key={key} className='mt-4 '>
						{t}
					</p>
				))}

				<div className='flex gap-4 flex-wrap mt-10'>
					<Button text={'Ga til tjeneste'} link={link} />
				</div>
			</div>
		</div>
	)
}

export default SideImageBlock
