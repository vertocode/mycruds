'use client'

import {useForm} from "react-hook-form";
import FormProvider, {RHFTextField} from "@/components/form";
import {Button} from "@mui/material";
import Link from "next/link";
import {getDictionary} from "@/internationalization/dictionary";
import { useAppSelector } from '@/store/hooks'
import {login} from "@/api/auth";
import { useSnackbar } from '@/components/elements/Snackbar'


export default function LoginPage() {
    const methods = useForm()
    const { getValues,  handleSubmit } = methods

    const lang = useAppSelector(state => state.config.lang)
    const { login: loginDictionary } = getDictionary(lang)

    const { enqueueSnackbar } = useSnackbar()

    const onSubmit = handleSubmit(async (e) => {
        console.log(getValues())

        try {
            const { email, password } = getValues()
            const response = await login(email, password)
            if (response?._id) {
                enqueueSnackbar(loginDictionary.feedback.success, { variant: 'success' })
            } else if (response?.errorCode === 'user_not_found') {
                enqueueSnackbar(loginDictionary.feedback.userNotFound, { variant: 'error' })
            } else {
                throw new Error(`Unexpected error: ${response}`)
            }
        } catch (error) {
            enqueueSnackbar(loginDictionary.feedback.error, { variant: 'error' })
        }
    })

    return (
        <div className="bg-gray-100 min-h-[90vh] flex items-center justify-center">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">{loginDictionary.title}</h1>
                </div>
                <FormProvider methods={methods} className="space-y-6" onSubmit={onSubmit}>
                    <RHFTextField name="email" type="email" label={loginDictionary.email.label} placeholder={loginDictionary.email.placeholder} required />
                    <RHFTextField name="password" type="password" label={loginDictionary.password.label} placeholder={loginDictionary.password.placeholder} required />
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        {loginDictionary.submitLabel}
                    </Button>
                    <p className="text-sm text-gray-600">
                        {loginDictionary.dontHaveAccountYet} <Link href="/register" className="font-medium text-blue-600 hover:underline">{loginDictionary.createAccount}</Link>
                    </p>
                </FormProvider>
            </div>
        </div>
    )
}
