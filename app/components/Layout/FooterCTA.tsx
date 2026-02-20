import React from 'react'
import Button from '../Global/Button'

const FooterCTA = () => {
	return (
		<div className='w-full flex justify-center bg-darkBlue text-white py-16'>
			<div className='section-wrapper w-full flex flex-col md:flex-row items-center gap-10'>
				<div className='flex-1'>
					<h3>
						Ønsker du en samarbeidspartner som er solid og til å
						stole på?
					</h3>
					<p className='mt-4'>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Commodi officia, voluptatum quaerat consequuntu
					</p>
				</div>

				<Button
					className={
						'text-lg border border-white !bg-darkBlue hover:!bg-primary'
					}
					text={'Kontakt oss'}
					link={'/'}
				/>
			</div>
		</div>
	)
}

export default FooterCTA
