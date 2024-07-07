import {NextRequest, NextResponse} from 'next/server'
import {match} from '@formatjs/intl-localematcher'

const locales = ['en', 'pt', 'es']

function getLocale(request: NextRequest) {
    const acceptLanguages = request.headers.get('accept-language')
    const defaultLocale = 'pt'
    const languages = acceptLanguages?.split(',').map((type) => type.split(';')[0].trim().replace('*', defaultLocale)) ?? ['pt']
    return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const params = request.nextUrl.search

    if (pathname.includes('/images') || pathname.includes('favicon')) {
        return
    }
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        return NextResponse.redirect(new URL(`/${locale}/${pathname}${params}`, request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)'
        // Optional: only run on root (/) URL
        // '/'
    ]
}
