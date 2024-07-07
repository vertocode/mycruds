'use client'

import { store } from '@/store'
import { setLang } from '@/store/config/configSlice'
import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import {AvailableLanguages} from "@/types/Language";

export const PreLoadLanguage = () => {
  const params = useParams()

  useEffect(() => {
    if (params?.lang) {
      store.dispatch(setLang(params.lang as AvailableLanguages))
    }
  }, [])

  return null
}
