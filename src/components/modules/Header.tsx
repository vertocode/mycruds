'use client'

import {useEffect, useState} from 'react'
import Image from "next/image";
import Link from "next/link";
import {useAppDispatch} from "@/store/hooks";
import {setLang} from "@/store/config/configSlice";
import {AvailableLanguages} from "@/types/Language";
import BRFlag from '@/assets/br-flag.png'
import USFlag from '@/assets/us-flag.png'

export const Header = () => {
    const [language, setLanguage] = useState<AvailableLanguages>('en');

    const dispatch = useAppDispatch()

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'en' ? 'pt' : 'en'));
    }

    useEffect(() => {
        dispatch(setLang(language))
    }, [language]);

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-1">
                    <div className="flex-shrink-0">
                        <Link href={'/'}>
                            <Image width={100} height={40} className="h-8 w-auto" src="https://i.imgur.com/QpVjcUv.png" alt="Logo" />
                        </Link>
                    </div>
                    <div>
                        <button
                            onClick={toggleLanguage}
                            className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium rounded-md text-sm px-4 py-2 flex gap-2"
                        >
                            {language === 'pt' ? (
                                <Image src={BRFlag} alt="BR Flag" width={20} height={20} />
                            ) : (
                                <Image src={USFlag} alt="US Flag" width={20} height={20} />
                            )}
                            {language.toUpperCase()}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
