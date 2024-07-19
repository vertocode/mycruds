import {useAppSelector} from "@/store/hooks";

export const Container = ({ children }: { children: React.ReactNode }) => {
    const { cruds } = useAppSelector(state => state.crud)

    return (
        <div style={cruds.length > 0 ? { marginLeft: '300px' } : {}}>
            {children}
        </div>
    )
}