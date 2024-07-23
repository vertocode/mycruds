'use client'

import Image from "next/image";
import BRFlag from "@/assets/br-flag.png";
import USFlag from "@/assets/us-flag.png";
import {useEffect, useState} from "react";
import {AvailableLanguages} from "@/types/Language";
import {setLang} from "@/store/config/configSlice";
import {useAppDispatch} from "@/store/hooks";

export const FlagButton = () => {
    const [language, setLanguage] = useState<AvailableLanguages>('en');
    const dispatch = useAppDispatch()

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'en' ? 'pt' : 'en'));
    }

    useEffect(() => {
        dispatch(setLang(language))
    }, [language]);

    return (
        <button
            onClick={toggleLanguage}
            className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium rounded-md text-sm px-4 py-2 flex gap-2"
        >
            {language === 'pt' ? (
                <Image src={BRFlag} alt="BR Flag" width={20} height={20}/>
            ) : (
                <Image src={USFlag} alt="US Flag" width={20} height={20}/>
            )}
            {language.toUpperCase()}
        </button>
    )
}