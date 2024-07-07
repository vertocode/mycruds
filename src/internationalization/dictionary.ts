import {AvailableLanguages} from "@/types/Language";
import {InternationalizationTexts} from "@/types/InternationalizationTexts"
import {pt} from "./pt";
import {en} from "./en";

export const getDictionary = (lang: AvailableLanguages): InternationalizationTexts => {
    if (lang === 'pt') return pt
    if (lang === 'en') return en
    return pt
}