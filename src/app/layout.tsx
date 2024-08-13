import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'MyCruds',
	applicationName: 'mycruds',
	creator: 'vertocode',
	description: 'Since everything in the development area is essentially a CRUD, I decided to create a CRUD creator where any user can create their own CRUD about any topic. For example, if the user has a clothing store, they can register all their items, search for them, and edit/delete them when needed.',
	icons: [{ url: '/logo.png' }],
	generator: 'Next.js'
}

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={clsx(inter.className, 'bg-gray-100')}>
				{children}
			</body>
		</html>
	)
}
