import * as z from 'zod'

export const ContactFormSchema = z.object({
	name: z.string().nonempty('Dette feltet er obligatorisk'),
	email: z.email('Ugyldig e-post').nonempty('Dette feltet er obligatorisk'),
	phone: z
		.string()
		.transform((val) => val.trim())
		.refine((val) => val === '' || /^(?:\+47\s?)?(?:\d\s?){8}$/.test(val), {
			message: 'Ugyldig telefonnummer',
		})
		.optional(),
	address: z.string().nullable(),
	message: z.string().nonempty('Dette feltet er obligatorisk'),
	// gdpr: z.literal<boolean>(true, 'Souhlas musí být udělen'),
})

export type ContactFormType = z.infer<typeof ContactFormSchema>
