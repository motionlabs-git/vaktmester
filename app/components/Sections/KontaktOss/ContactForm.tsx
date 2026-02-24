'use client'
import { useRef } from 'react'
import Input from './Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
	ContactFormType,
	ContactFormSchema,
} from '@/app/types/contact-form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'

const ContactForm = () => {
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

	const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
		try {
			await axios.post('/api/v1/email', data).then((res) => {
				if (res.status !== 200) {
					setError('root', {
						message: 'Something went wrong, try again later',
					})
				}

				reset()
			})
		} catch (e) {
			setError('root', {
				message: 'Something went wrong, try again later',
			})
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

			<Input
				{...register('address')}
				error={errors.address}
				id='address'
				placeholder='Adresse'
			/>

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

			{errors.root && (
				<span className='text-sm mt-2 text-red-400'>
					{errors.root.message}
				</span>
			)}

			<button
				aria-label='Submit form'
				type='submit'
				className={`text-nowrap self-center block w-fit h-fit bg-primary text-white font-bold py-[1em] px-[3em] hover:bg-primaryAccent duration-200`}
			>
				{isSubmitting ? 'Sender...' : 'Send forespørsel'}
			</button>

			{isSubmitSuccessful && (
				<span className='text-base mt-2 text-primary text-center'>
					Skjemaet er sendt inn, vi svarer så snart som mulig.
				</span>
			)}
		</form>
	)
}

export default ContactForm
