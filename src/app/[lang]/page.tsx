'use client'

import {useForm} from "react-hook-form";
import FormProvider, {RHFTextField} from "@/components/form";
import {Button} from "@mui/material";
import Link from "next/link";
import {getDictionary} from "@/internationalization/dictionary";
import { useAppSelector } from '@/store/hooks'


export default function LoginPage() {
    const methods = useForm()
    const { getValues,  handleSubmit } = methods

    const lang = useAppSelector(state => state.config.lang)
    const { login } = getDictionary(lang)

    const onSubmit = handleSubmit((e) => {
        console.log(getValues())
    })

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">{login.title}</h1>
                </div>
                <FormProvider methods={methods} className="space-y-6" onSubmit={onSubmit}>
                    <div>
                        <RHFTextField name="email" type="email" label={login.email.label} placeholder={login.email.placeholder} required />
                    </div>
                    <div>
                        <RHFTextField name="password" type="password" label={login.password.label} placeholder={login.password.placeholder} required />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        {login.submitLabel}
                    </Button>
                    <p className="text-sm text-gray-600">
                        {login.dontHaveAccountYet} <Link href="/register" className="font-medium text-blue-600 hover:underline">{login.createAccount}</Link>
                    </p>
                </FormProvider>
            </div>
        </div>
    )
}
