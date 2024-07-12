'use client'

import FormProvider, {RHFTextField} from "@/components/form";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {AddDynamicField} from "@/components/modules/Cruds/New/CrudForm/AddDynamicField";

export const CrudForm = () => {
    const schema = yup.object().shape({
        name: yup.string().required('Nome requerido').max(25, 'Nome do Crud deve ter no maximo 25 caracteres'),
    })

    const methods = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    })

    return (
        <FormProvider methods={methods} className="text-gray-800">
            <h1>Criação de Crud</h1>
            <div>
                <p>Primeiro precisamos escolher um nome para todo o seu Crud, este nome sera usado no formulario de criacao, edicao, e listagem.</p>
                <RHFTextField name="name" label="Nome do Crud" className="max-w-80 text-white"/>
            </div>
            <AddDynamicField />
        </FormProvider>
    )
}