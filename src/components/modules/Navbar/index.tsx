import { FlagButton } from '@/components/modules/Navbar/FlagButton'
import { Logo } from '@/components/modules/Navbar/Logo'
import { UserButton } from '@/components/modules/Navbar/UserButton'

export const Navbar = () => {
	return (
		<>
			<div className="h-[50px]"/>
			<header className="bg-white shadow-md fixed left-0 right-0 top-0 z-10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-1">
					<Logo/>
					<div className="flex gap-4">
						<FlagButton/>
						<UserButton/>
					</div>
				</div>
			</header>
		</>
	)
}
