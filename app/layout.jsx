// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import {Montserrat} from 'next/font/google'
import { cn } from '../lib/utils'
import './globals.css'
import localFont from "next/font/local";

const fontHeading = localFont({
    src: [
        {
            path: '../public/font.ttf',
            weight: '400'
        }
    ],
    variable: '--font-heading',
})

const fontBody = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-body',
})

export default function Layout({ children }) {
    return (
        <html lang="en">
        <head>
            <title>Fortuna v179</title>
            <link rel="icon" type="image/x-icon" href="/favicon.png"/>

            <meta property="og:title" content="Fortuna"/>
            <meta property="og:description" content="v179 MapleStory Private Server"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://fortunams.org"/>
            <meta property="og:image" content="https://fortunams.org/logo.png"/>
            <meta property="og:locale" content="en_US"/>

            <meta name="description" content="v179 MapleStory Private Server"/>
            <meta name="author" content="jaczerob"/>
            <meta name="keywords" content="fortuna, maplestory, v179, 5th job, gms, private server, maplestory private server"/>
        </head>
        <body
            className={cn(
                'antialiased',
                fontHeading.variable,
                fontBody.variable
            )}

            style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(176, 176, 176, 0.5), rgba(0, 0, 0, 0.5)), url(background.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundPosition: `50% 50%` }}

            suppressHydrationWarning
        >
        {children}
        </body>
        </html>
    )
}