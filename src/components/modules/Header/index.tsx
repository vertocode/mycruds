import {FlagButton} from "@/components/modules/Header/FlagButton";
import {Logo} from "@/components/modules/Header/Logo";
import {UserButton} from "@/components/modules/Header/UserButton";

export const Index = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-1">
                    <div>
                        <Logo />
                    </div>
                    <div className="flex gap-4">
                        <FlagButton />
                        <UserButton />
                    </div>
                </div>
            </div>
        </header>
    )
}
