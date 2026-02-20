import React from 'react'
import ContactForm from './ContactForm'

const ContactOss = () => {
	return (
		<section>
			<div className='section-wrapper flex gap-20'>
				<div className='flex-3'>
					<h3>
						Ønsker du en samarbeidspartner som er solid og til å
						stole på?
					</h3>

					<div className='mt-10 whiteBox p-10'>
						<ContactForm />
					</div>
				</div>

				<div className='flex-2'>
					<h3>Kontaktinformasjon</h3>

					<div className='mt-10'>
						<h4>Address</h4>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactOss
