'use client'
import { useRef } from 'react'
import Input from './Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
	ContactFormType,
	ContactFormSchema,
} from '@/app/types/contact-form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
	const formRef = useRef<null | HTMLFormElement>(null)

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		reset,
		setError,
	} = useForm<ContactFormType>({
		resolver: zodResolver(ContactFormSchema),
		reValidateMode: 'onSubmit',
	})

	const onSubmit: SubmitHandler<ContactFormType> = async () => {
		await emailjs.init({
			publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
			blockHeadless: true,
		})

		try {
			if (!formRef.current) {
				throw new Error('missing form')
			}

			await emailjs
				.sendForm(
					process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
					process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID!,
					formRef.current
				)
				.then(
					() => {
						reset()
					},
					(error) => {
						setError('root', {
							message: 'Something went wrong, try again later.',
						})

						console.log(error)

						throw new Error(
							'Something went wrong, try again later.',
							error
						)
					}
				)
		} catch (e: unknown) {
			if (e instanceof TypeError) setError('root', { message: e.message })
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
			<Input
				{...register('name')}
				error={errors.name}
				id='name'
				required
				placeholder='Navn'
			/>

			<fieldset className='flex flex-col gap-4 lg:flex-row lg:gap-2'>
				<Input
					{...register('phone')}
					error={errors.phone}
					id='phone'
					placeholder='Telefon'
				/>
				<Input
					{...register('email')}
					error={errors.email}
					id='email'
					required
					placeholder='E-post'
				/>
			</fieldset>

			<fieldset className='flex gap-2 mt-2'>
				<span className='flex-1'>
					<label htmlFor='message' className='required'>
						Beskjed
					</label>

					<textarea
						id='message'
						className='w-full block mt-2 '
						rows={8}
						placeholder={'Beskjed...'}
						{...register('message')}
					></textarea>

					{errors.message && (
						<span className='text-sm text-red-400'>
							{errors.message.message}
						</span>
					)}
				</span>
			</fieldset>

			<button
				type='submit'
				className={`text-nowrap self-center block w-fit h-fit bg-primary text-white font-bold py-[1em] px-[3em] hover:bg-primaryAccent duration-200`}
			>
				Send form
			</button>
		</form>
	)
}

export default ContactForm
