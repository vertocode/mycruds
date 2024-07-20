'use client'
import {useAppSelector} from "@/store/hooks";

export const Container = ({ children }: { children: React.ReactNode }) => {
    const { cruds } = useAppSelector(state => state.crud)

    return (
        <div className={cruds.length ? 'ml-72 mr-10' : 'mx-10'}>
            {children}
        </div>
    )
}