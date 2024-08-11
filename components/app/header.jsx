"use client"

import Image from "next/image";
import Link from "next/link";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "../ui/dialog";
import {useState} from "react";

export default function Header(props) {
    const [openVote, setOpenVote] = useState(false);

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
                <Link href="#"
                      className="text-3xl font-medium hover:underline underline-offset-4 pr-4"
                      prefetch={false}
                      onClick={() => alert("Type @vote in game to vote!")}
                >
                    <h5 className="text-center text-white" style={{
                        textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44, 3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44`
                    }}>VOTE</h5>
                </Link>
                <Link href="#" className="text-3xl font-medium hover:underline underline-offset-4 pr-4"
                      prefetch={false}
                      onClick={() => alert("You can auto-register through the client!")}>
                    <h5 className="text-center text-white" style={{
                        textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44, 3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44`
                    }}>REGISTER</h5>
                </Link>
            </nav>
        </header>
    )
}