'use client'
import {Button} from "@/components/elements/Button";
import {useRouter} from "next/navigation";
import {useAppSelector} from "@/store/hooks";
import {getDictionary} from "@/internationalization/dictionary";

interface ListHeaderProps {
    crudId: string
    crudName: string
}

export const ListHeader = ({ crudId, crudName }: ListHeaderProps) => {
    const router = useRouter()
    const { lang } = useAppSelector(state => state.config)
    const dict = getDictionary(lang)

    return (
        <header className="flex justify-between gap-3">
            <h1 className="text-2xl font-bold text-gray-800">{crudName}</h1>
            <div className="flex gap-3">
                <Button variant="outlined" color="error">
                    {dict.crud.deleteCrud}
                </Button>
                <Button variant="outlined">
                    {dict.crud.editCrud}
                </Button>
                <Button
                    variant="contained"
                    onClick={() => router.push(`/crud/${crudId}/new`)}
                >{dict.crud.list.registerNewItem}</Button>
            </div>

        </header>
    )
}