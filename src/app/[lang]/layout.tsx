import Providers from '@/store/provider'

import { Navbar } from '@/components/modules/Navbar'
import { PreLoadLanguage } from '@/components/modules/PreLoadLanguage'
import { AvailableLanguages } from '@/types/Language'
import { Footer } from '@/components/modules/Footer'
import { PreLoadUser } from '@/components/modules/PreLoadUser'
import { PreLoadCrud } from '@/components/modules/PreLoadCrud'

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
				<Navbar />
				{children}
			</Providers>
			<Footer />
		</>
	)
}
