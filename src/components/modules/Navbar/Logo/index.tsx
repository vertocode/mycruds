import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => {
	return (
		<Link href={'/'}>
			<Image width={100} height={40} className="h-8 w-auto" src="https://i.imgur.com/QpVjcUv.png" alt="Logo" />
		</Link>
	)
}