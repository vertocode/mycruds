import { Sidebar } from '@/components/modules/Sidebar'
import { Container } from '@/components/modules/Container'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Sidebar />
			<Container>
				{children}
			</Container>
			<div className="h-32"></div>
		</>
	)
}