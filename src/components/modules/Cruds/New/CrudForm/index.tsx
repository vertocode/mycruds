'use client'

import FormProvider from "@/components/form";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {AddDynamicField} from "@/components/modules/Cruds/New/CrudForm/AddDynamicField";
import {useAppSelector} from "@/store/hooks";
import {getDictionary} from "@/internationalization/dictionary";
import {CrudName} from "@/components/modules/Cruds/New/CrudForm/CrudName";
import {Button} from "@/components/elements/Button";
import Iconify from "@/components/elements/Iconify";
import {CrudFormPreview} from "@/components/modules/Cruds/New/CrudForm/CrudFormPreview";
import {useState} from "react";
import {createCrud} from "@/api/crud";
import {useSnackbar} from "@/components/elements/Snackbar";
import {CrudField} from "@/types/Crud";

export const CrudForm = () => {
    const {lang} = useAppSelector(state => state.config)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { enqueueSnackbar } = useSnackbar()
    const { user } = useAppSelector(state => state.user)

    const dictionary = getDictionary(lang)
    const schema = yup.object().shape({
        name: yup.string().required(dictionary.name.required).min(3, dictionary.name.shouldInclude3Chars).max(25, dictionary.name.shouldInclude25Chars),
        fields: yup.array().of(yup.object().shape({
           name: yup.string()
               .required(dictionary.name.required)
               .min(3, dictionary.name.shouldInclude3Chars)
               .max(25, dictionary.name.shouldInclude25Chars)
               .test('unique', dictionary.name.shouldBeUnique, (value, context) => {
                   if (!context || !context?.from) return true
                   const [_, objectGroup] = context?.from || {}

                   if (!objectGroup) return true
                   const { fields } = objectGroup?.value || {}
                   if (!fields) return true

                   const names = fields?.map((field: any) => field.name)
                   return names?.filter((name: string) => name === value).length === 1
               }),
            options: yup.array().of(yup.string().min(3, dictionary.name.shouldInclude3Chars).max(25, dictionary.name.shouldInclude25Chars))
        }))
    })

    const methods = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })

    const handleSubmit = methods.handleSubmit(async (data) => {
        setIsLoading(true)
        try {
            const crud = {
                name: data.name,
                fields: data.fields ? data.fields.map(field => {
                    const typedField = field as unknown as CrudField
                    return {
                        label: typedField.label,
                        type: typedField?.type,
                        required: !!typedField?.required,
                        options: typedField?.options
                    }
                }) : [],
                creatorUserEmail: user?.email || ''
            }
            const response = await createCrud(crud)
            enqueueSnackbar(dictionary.crud.new.feedback.success, { variant: 'success' })
        } catch (e) {
            console.error(e)
            enqueueSnackbar(dictionary.crud.new.feedback.error, { variant: 'error' })
        } finally {
            setIsLoading(false)
        }
    })

    return (
        <FormProvider methods={methods} className="text-gray-800" onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center mt-10 bg-gray-100">
                <h1 className="mb-4 text-3xl font-bold text-gray-700">{dictionary.crud.new.createCrud}</h1>
                <CrudName />
                <AddDynamicField methods={methods}/>
                <CrudFormPreview methods={methods}/>
            </div>
            <Button
                type="submit"
                loading={isLoading}
                className="mt-4 float-end bg-blue-700 text-white px-5 py-3 gap-1 flex hover:bg-blue-800"
            >
                <span>
                    {dictionary.crud.new.createCrud}
                </span>
                <Iconify icon="ph:rocket" />
            </Button>
        </FormProvider>
    )
}