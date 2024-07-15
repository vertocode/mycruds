'use client'

import TextField from "@mui/material/TextField";
import {Button} from "@/components/elements/Button";
import {useAppSelector} from "@/store/hooks";
import {getDictionary} from "@/internationalization/dictionary";
import {useState} from "react";

export const AddOption = ({ setValue }: { setValue: (option: string) => void }) => {
    const [typedOption, setTypedOption] = useState<string>('')
    const {lang} = useAppSelector(state => state.config)
    const dictionary = getDictionary(lang)

    return (
        <div className="flex gap-4 flex-wrap">
            <TextField
                onChange={(e) => setTypedOption(e.target.value)}
                label={dictionary.crud.typeNewOption}
                value={typedOption}
            />
            <Button
                className={"px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white max-h-10 mt-2" + (typedOption ? '' : ' opacity-50 cursor-not-allowed')}
                disabled={!typedOption}
                onClick={() => {
                    if (!typedOption) return
                    setValue(typedOption)
                    setTypedOption('')
                }}
            >{dictionary.addOption}</Button>
        </div>
    )
}