'use client'
import {ListHeader} from "@/components/modules/Cruds/List/ListHeader";
import {DataTableCrud} from "@/components/modules/Cruds/List/DataTableCrud";
import {useState} from "react";

interface CrudListProps {
    params: {
        crudId: string
    }
}

export default function CrudList({ params: { crudId } }: CrudListProps) {
    const [crudName, setCrudName] = useState<string>('')

    return (
        <div className="mt-5 max-h-[1000px]">
            <ListHeader crudId={crudId} crudName={crudName}/>
            <DataTableCrud crudId={crudId} onUpdateCrudName={(name: string) => setCrudName(name)}/>
        </div>
    )
}