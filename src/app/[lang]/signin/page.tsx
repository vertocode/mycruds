'use client'

import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import FormProvider, { RHFTextField } from '@/components/form'
import { Button } from '@/components/elements/Button'
import Link from 'next/link'
import { getDictionary } from '@/internationalization/dictionary'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { login } from '@/api/auth'
import { useSnackbar } from '@/components/elements/Snackbar'
import { initializeUser } from '@/store/user/userSlice'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const lang = useAppSelector(state => state.config.lang)
	const dictionary = getDictionary(lang)


	const schema = Yup.object().shape({
		email: Yup.string().required(dictionary.email.required).email(dictionary.email.shouldBeValid),
		password: Yup.string().required(dictionary.password.required).min(6, dictionary.password.shouldInclude6Chars)
	})

	const methods = useForm({
		mode: 'onChange',
		resolver: yupResolver(schema)
	})
	const { getValues,  handleSubmit } = methods

	const dispatch = useAppDispatch()

	const router = useRouter()

	const { enqueueSnackbar } = useSnackbar()

	const onSubmit = handleSubmit(async (e) => {
		try {
			setIsLoading(true)
			const { email, password } = getValues()
			const response = await login(email, password)
			if (response?._id) {
				dispatch(initializeUser(response))
				enqueueSnackbar(dictionary.login.feedback.success, { variant: 'success' })
				router.push('/crud/new')
			} else if (response?.errorCode === 'user_not_found') {
				enqueueSnackbar(dictionary.login.feedback.userNotFound, { variant: 'error' })
			} else {
				throw new Error(`Unexpected error: ${response}`)
			}
		} catch (error) {
			enqueueSnackbar(dictionary.login.feedback.error, { variant: 'error' })
		} finally {
			setIsLoading(false)
		}
	})

	return (
		<div className="bg-gray-100 min-h-[80vh] flex items-center justify-center">
			<div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
				<div>
					<h1 className="text-2xl font-bold text-gray-800">{dictionary.login.title}</h1>
				</div>
				<FormProvider methods={methods} className="space-y-6" onSubmit={onSubmit}>
					<RHFTextField name="email" type="email" label={dictionary.email.label} placeholder={dictionary.email.placeholder} required />
					<RHFTextField name="password" type="password" label={dictionary.password.label} placeholder={dictionary.password.placeholder} required />
					<Button loading={isLoading} type="submit" className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
						{dictionary.login.submitLabel}
					</Button>
					<p className="text-sm text-gray-600">
						{dictionary.login.dontHaveAccountYet} <Link href="/signup" className="font-medium text-blue-600 hover:underline">{dictionary.login.createAccount}</Link>
					</p>
				</FormProvider>
			</div>
		</div>
	)
}
