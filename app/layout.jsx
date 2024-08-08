// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import {Montserrat, Open_Sans} from 'next/font/google'
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