"use client"

import Image from "next/image";
import Link from "next/link";
import {Dialog, DialogContent, DialogDescription} from "../ui/dialog";
import {useState} from "react";
import {Button} from "../ui/button";
import {Input} from "../ui/input";
import RegisterUser from "../actions/register";
import {useSession} from "next-auth/react";

export default function Header(props) {
    const { data: session, status } = useSession();
    const id = session?.user?.id;

    return (
        <header {...props}>
            <div className="container mx-auto flex flex-col items-center justify-center">
                <Image src="/logo.png" alt="Logo" width="1000" height="100"/>
            </div>
                {
                    status === 'authenticated' ?
                        <AuthenticatedLinks discordId={id} className="md:flex gap-4 mt-6 items-center justify-center h-16 grid-cols-2 grid"/> :
                        <UnauthenticatedLinks className="md:flex gap-4 mt-6 items-center justify-center h-16 grid-cols-2 grid"/>
                }
        </header>
    )
}

function UnauthenticatedLinks(props) {
    return (
        <nav {...props}>
            <Link
                target="_blank"
                href="https://discord.gg/BWq9u2t8rq"
                className="text-3xl font-medium hover:underline underline-offset-4 pr-4"
                prefetch={false}
                style={{textDecorationColor: `#E2BC44`, textDecorationThickness: `3px`}}
            >
                <h5 className="text-center text-white" style={{
                    textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44, 3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44`
                }}>DISCORD</h5>
            </Link>
            <Link
                href="/api/auth/signin"
                className="text-3xl font-medium hover:underline underline-offset-4 pr-4"
                prefetch={false}
                style={{textDecorationColor: `#E2BC44`, textDecorationThickness: `3px`}}
            >
                <h5 className="text-center text-white" style={{
                    textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44, 3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44`
                }}>SIGN-IN</h5>
            </Link>
        </nav>
    )
}

function AuthenticatedLinks(props) {
    const [usernameStr, setUsernameStr] = useState('');
    const [passwordStr, setPasswordStr] = useState('');
    const [open, setOpen] = useState(false);

    return (
        <nav {...props}>
            <Link
                target="_blank"
                href="https://discord.gg/BWq9u2t8rq"
                className="text-3xl font-medium hover:underline underline-offset-4 pr-4"
                prefetch={false}
                style={{textDecorationColor: `#E2BC44`, textDecorationThickness: `3px`}}
            >
                <h5 className="text-center text-white" style={{
                    textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44, 3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44`
                }}>DISCORD</h5>
            </Link>
            <Link href="#"
                  className="text-3xl font-medium hover:underline underline-offset-4 pr-4"
                  prefetch={false}
                  onClick={() => alert("Type @vote in game to vote!")}
                  style={{textDecorationColor: `#E2BC44`, textDecorationThickness: `3px`}}
            >
                <h5 className="text-center text-white" style={{
                    textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44, 3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44`
                }}>VOTE</h5>
            </Link>
            <Link href="#" className="text-3xl font-medium hover:underline underline-offset-4 pr-4"
                  prefetch={false}
                  onClick={() => setOpen(true)}
                  style={{textDecorationColor: `#E2BC44`, textDecorationThickness: `3px`}}>
                <h5 className="text-center text-white" style={{
                    textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44, 3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44`
                }}>CREATE ACCOUNT</h5>
            </Link>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="bg-white content-center text-center">
                    <DialogDescription>
                        <Input type="text" placeholder="Username" value={usernameStr} className="mt-2"
                               onChange={(ev) => setUsernameStr(ev.target.value)}/>
                        <Input type="password" placeholder="Password" className="mt-2 mb-2" value={passwordStr}
                               onChange={(ev) => setPasswordStr(ev.target.value)}/>
                        <Button className="rounded-lg bg-white border-black border-[1px]" onClick={() => {
                            RegisterUser(usernameStr, passwordStr, props.discordId)
                                .then(_ => {
                                    alert('Successfully registered');
                                })
                                .catch(error => {
                                    alert(error.message);
                                })
                                .finally(() => setOpen(false));
                        }}>Register</Button>
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        </nav>
    )
}

function getDiscordID() {

}