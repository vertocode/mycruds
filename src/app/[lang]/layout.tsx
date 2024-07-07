import Providers from '@/store/provider'

import { Header } from '@/components/modules/Header'
import { PreLoadLanguage } from '@/components/modules/PreLoadLanguage'
import {AvailableLanguages} from "@/types/Language"

interface LayoutProps {
    children: React.ReactNode,
    params: {
        lang: AvailableLanguages
    }
}

export default async function RootLayout({ children }: LayoutProps) {
    return (
        <>
            <PreLoadLanguage />
            <Providers>
                <Header />
                {children}
            </Providers>
        </>
    )
}
