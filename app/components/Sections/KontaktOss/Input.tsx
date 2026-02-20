import React, { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

const Input: React.FC<
	InputHTMLAttributes<HTMLInputElement> & {
		error?: FieldError
		id: string
		placeholder: string
		required?: boolean
	}
> = ({ error, id, placeholder, required, ...props }) => {
	return (
		<span className='flex-1'>
			<label htmlFor={id} className={`${required && 'required'}`}>
				{placeholder}
			</label>
			<input
				type='text'
				id={id}
				className='w-full block mt-2'
				placeholder={placeholder}
				{...props}
			/>
			{error && (
				<span className='text-sm text-red-400'>{error.message}</span>
			)}
		</span>
	)
}

export default Input
