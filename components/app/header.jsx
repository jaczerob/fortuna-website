"use client"

import Image from "next/image";
import Link from "next/link";

export default function Header(props) {
    return (
        <header {...props}>
            <div className="container mx-auto flex flex-col items-center justify-center">
                <Image src="/logo.png" alt="Logo" width="1000" height="100"/>
            </div>
            <nav className="md:flex gap-4 mt-6 items-center justify-center h-16 grid-cols-2 grid">
                <Link target="_blank" href="https://discord.gg/BWq9u2t8rq" className="text-3xl font-medium hover:underline underline-offset-4 pr-4"
                      prefetch={false}>
                    <h5 className="text-center text-white" style={{
                        textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44, 3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44`
                    }}>DISCORD</h5>
                </Link>
            </nav>
        </header>
    )
}