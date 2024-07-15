'use client'

import FormProvider, {RHFTextField} from "@/components/form";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {AddDynamicField} from "@/components/modules/Cruds/New/CrudForm/AddDynamicField";
import {useAppSelector} from "@/store/hooks";
import {getDictionary} from "@/internationalization/dictionary";
import {CrudName} from "@/components/modules/Cruds/New/CrudForm/CrudName";
import {Button} from "@/components/elements/Button";
import Iconify from "@/components/elements/Iconify";
import {useState} from "react";
import {CrudFormPreview} from "@/components/modules/Cruds/New/CrudForm/CrudFormPreview";

export const CrudForm = () => {
    const [showPreviewForm, setShowPreviewForm] = useState<boolean>(false)
    const {lang} = useAppSelector(state => state.config)
    const dictionary = getDictionary(lang)
    const schema = yup.object().shape({
        name: yup.string().required(dictionary.name.required).min(3, dictionary.name.shouldInclude3Chars).max(25, dictionary.name.shouldInclude25Chars)
    })

    const methods = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })

    console.log(methods.getValues())

    return (
        <FormProvider methods={methods} className="text-gray-800">
            <div className="flex flex-col justify-center mt-10 bg-gray-100">
                <h1 className="mb-4 text-3xl font-bold text-gray-700">{dictionary.crud.new.createCrud}</h1>
                <CrudName />
                <AddDynamicField methods={methods}/>
                <CrudFormPreview methods={methods}/>
            </div>
            <Button
                type="submit"
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