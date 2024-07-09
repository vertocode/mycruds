'use client'

import * as Yup from 'yup'
import {useForm} from "react-hook-form";
import FormProvider, {RHFTextField} from "@/components/form";
import {Button} from "@mui/material";
import Link from "next/link";
import {getDictionary} from "@/internationalization/dictionary";
import {useAppDispatch, useAppSelector} from '@/store/hooks'
import {register} from "@/api/auth";
import { useSnackbar } from '@/components/elements/Snackbar'
import {initializeUser} from "@/store/user/userSlice";
import {yupResolver} from "@hookform/resolvers/yup";


export default function SignUpPage() {
    const lang = useAppSelector(state => state.config.lang)
    const dictionary = getDictionary(lang)

    const schema = Yup.object().shape({
        name: Yup.string().required(dictionary.name.required),
        email: Yup.string().required(dictionary.email.required).email(dictionary.email.shouldBeValid),
        password: Yup.string().required(dictionary.password.required).min(6, dictionary.password.shouldInclude6Chars),
        repeatPassword: Yup.string().required(dictionary.repeatPassword.required).oneOf([Yup.ref('password')], dictionary.repeatPassword.shouldMatchPassword)
    })

    const methods = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })
    const { getValues,  handleSubmit } = methods


    const dispatch = useAppDispatch()

    const { enqueueSnackbar } = useSnackbar()

    const onSubmit = handleSubmit(async (e) => {
        try {
            const { email, password, name } = getValues()
            const response = await register({ email, password, name })
            if (response?._id) {
                dispatch(initializeUser(response))
                enqueueSnackbar(dictionary.signUp.feedback.success, { variant: 'success' })
            } else {
                throw new Error(`Unexpected error: ${response}`)
            }
        } catch (error) {
            enqueueSnackbar(dictionary.signUp.feedback.error, { variant: 'error' })
        }
    })

    return (
        <div className="bg-gray-100 min-h-[90vh] flex items-center justify-center">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">{dictionary.signUp.title}</h1>
                </div>
                <FormProvider methods={methods} className="space-y-6" onSubmit={onSubmit}>
                    <RHFTextField name="name" type="text" label={dictionary.name.label} placeholder={dictionary.name.placeholder} required />
                    <RHFTextField name="email" type="email" label={dictionary.email.label} placeholder={dictionary.email.placeholder} required />
                    <RHFTextField name="password" type="password" label={dictionary.password.label} placeholder={dictionary.password.placeholder} required />
                    <RHFTextField name="repeatPassword" type="password" label={dictionary.repeatPassword.label} placeholder={dictionary.repeatPassword.placeholder} required />
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        {dictionary.signUp.submitLabel}
                    </Button>
                </FormProvider>
                <p className="text-sm text-gray-600">
                    {dictionary.signUp.alreadyHaveAccount} <Link href="/" className="font-medium text-blue-600 hover:underline">{dictionary.signUp.login}</Link>
                </p>
            </div>
        </div>
    )
}
