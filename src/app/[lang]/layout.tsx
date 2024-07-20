import Providers from '@/store/provider'

import { Index } from '@/components/modules/Header'
import { PreLoadLanguage } from '@/components/modules/PreLoadLanguage'
import {AvailableLanguages} from "@/types/Language"
import {Footer} from "@/components/modules/Footer";
import {PreLoadUser} from "@/components/modules/PreLoadUser";
import {PreLoadCrud} from "@/components/modules/PreLoadCrud";

interface LayoutProps {
    children: React.ReactNode
    params: {
        lang: AvailableLanguages
    }
}

export default async function RootLayout({ children }: LayoutProps) {
    return (
        <>
            <PreLoadLanguage />
            <Providers>
                <PreLoadUser />
                <PreLoadCrud />
                <Index />
                {children}
            </Providers>
            <Footer />
        </>
    )
}
