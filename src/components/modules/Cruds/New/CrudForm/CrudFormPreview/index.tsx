import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Iconify from "@/components/elements/Iconify";
import {useMemo} from "react";
import {isNil} from "lodash";
import {DynamicForm} from "@/components/elements/DynamicForm";

interface CrudFormPreviewProps {
    methods: any
}

export const CrudFormPreview = ({ methods }: CrudFormPreviewProps) => {
    const values = methods.watch()
    console.log(values, '<<< values')
    const fields = useMemo(() => {
        if (!values || !values.fields) return []
        return values.fields.filter(field => {
            const { name, type } = field || {}
            return !isNil(name) && !isNil(type)
        }).map(field => ({
            label: field.name,
            type: field.type,
            required: !!field.required,
            options: field?.options || []
        }))
    }, [values])

    return (
        <Accordion className="mt-5">
            <AccordionSummary
                expandIcon={<Iconify icon="ph:arrow-up-bold" />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <h2 className="text-gray-600 flex gap-1 items-center">
                    Pré-visualização do seu formulário
                    <Iconify icon="mdi:table" />
                </h2>
            </AccordionSummary>
            <AccordionDetails key={JSON.stringify(fields)}>
                {fields.length
                    ? <DynamicForm fields={fields} />
                    : (
                    <p>
                        Nao foi preenchido nenhum campo para existir pré-visualização, por favor preencha para poder visualizar.
                    </p>
                )}

            </AccordionDetails>
        </Accordion>
    )
}