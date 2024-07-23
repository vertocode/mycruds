import {ListHeader} from "@/components/modules/Cruds/List/ListHeader";
import {DataTableCrud} from "@/components/modules/Cruds/List/DataTableCrud";

interface CrudListProps {
    params: {
        crudId: string
    }
}

export default function CrudList({ params: { crudId } }: CrudListProps) {
    return (
        <div className="mt-5 max-h-[1000px]">
            <ListHeader crudId={crudId} />
            <DataTableCrud />
        </div>
    )
}