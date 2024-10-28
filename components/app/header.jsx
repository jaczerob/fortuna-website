"use client"

import Image from "next/image";
import Link from "next/link";
import {Dialog, DialogContent, DialogDescription} from "../ui/dialog";
import {useState} from "react";
import {Button} from "../ui/button";
import {Input} from "../ui/input";
import RegisterUser from "../actions/register";
import {signIn, useSession} from "next-auth/react";
import UnstuckUser from "../actions/unstuck";

export default function Header(props) {
    const {data: session, status} = useSession();
    const id = session?.user?.id;
    const isAdmin = session?.account?.isAdmin || false;
    const voteUrl = session?.account?.usernames || [];

    return (
        <header {...props}>
            <div className="container mx-auto flex flex-col items-center justify-center">
                <Image src="/logo.png" alt="Logo" width="1000" height="100"/>
            </div>
            {
                status === 'authenticated' ?
                    <AuthenticatedLinks discordId={id}
                                        isAdmin={isAdmin}
                                        className="md:flex gap-4 mt-6 items-center justify-center h-16 grid-cols-2 grid"
                                        voteUrl={voteUrl}
                    /> :
                    <UnauthenticatedLinks
                        className="md:flex gap-4 mt-6 items-center justify-center h-16 grid-cols-2 grid"/>
            }
        </header>
    )
}

function UnauthenticatedLinks({className}) {
    const [open, setOpen] = useState(false);

    return (
        <nav className={className}>
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
                  style={{textDecorationColor: `#E2BC44`, textDecorationThickness: `3px`}}
            >
                <h5 className="text-center text-white" style={{
                    textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44, 3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44`
                }}>CREATE ACCOUNT</h5>
            </Link>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="bg-white">
                    <DialogDescription className="mt-4 text-center">
                        <p className="text-justify">For an added layer of security, we request that you authorize
                            through Discord before creating an account. The only information we store is your Discord
                            account ID which we will associate with your account.</p><br/>
                        <p className="text-justify">Press the below link to authenticate and then click Create Account
                            again to create your account.</p><br/>
                        <Button onClick={() => signIn('discord', null, {prompt: 'none'})}
                                className="rounded-lg bg-white hover:underline hover:bg-white underline-offset-4 text-center">Authenticate
                            through Discord</Button>
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        </nav>
    )
}

function AuthenticatedLinks({discordId, isAdmin, className, voteUrl}) {
    const [usernameStr, setUsernameStr] = useState('');
    const [passwordStr, setPasswordStr] = useState('');
    const [open, setOpen] = useState(false);
    const [openVote, setOpenVote] = useState(false);
    const [openUnstuck, setOpenUnstuck] = useState(false);

    return (
        <nav className={className}>
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
                  onClick={() => setOpenVote(true)}
                  style={{textDecorationColor: `#E2BC44`, textDecorationThickness: `3px`}}
            >
                <h5 className="text-center text-white" style={{
                    textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44, 3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44`
                }}>VOTE</h5>
            </Link>
            <Link href="#"
                  className="text-3xl font-medium hover:underline underline-offset-4 pr-4"
                  prefetch={false}
                  onClick={() => setOpenUnstuck(true)}
                  style={{textDecorationColor: `#E2BC44`, textDecorationThickness: `3px`}}
            >
                <h5 className="text-center text-white" style={{
                    textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44, 3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44`
                }}>UNSTUCK</h5>
            </Link>
            <Link href="#" className="text-3xl font-medium hover:underline underline-offset-4 pr-4"
                  prefetch={false}
                  onClick={() => setOpen(true)}
                  style={{textDecorationColor: `#E2BC44`, textDecorationThickness: `3px`}}>
                <h5 className="text-center text-white" style={{
                    textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44, 3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44`
                }}>CREATE ACCOUNT</h5>
            </Link>
            {
                isAdmin ? <Link href="#" className="text-3xl font-medium hover:underline underline-offset-4 pr-4"
                                prefetch={false}
                                onClick={() => window.open('/admin', '_blank')}
                                style={{textDecorationColor: `#E2BC44`, textDecorationThickness: `3px`}}>
                    <h5 className="text-center text-white" style={{
                        textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44, 3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44`
                    }}>ADMIN</h5>
                </Link> : <div/>
            }
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="bg-white content-center text-center">
                    <DialogDescription className="mt-4">
                        <Input type="text" placeholder="Username" value={usernameStr}
                               onChange={(ev) => setUsernameStr(ev.target.value)}/>
                        <Input type="password" placeholder="Password" className="mt-2 mb-2" value={passwordStr}
                               onChange={(ev) => setPasswordStr(ev.target.value)}/>
                        <Button className="rounded-lg bg-white border-black border-[1px]" onClick={() => {
                            RegisterUser(usernameStr, passwordStr, discordId)
                                .then(response => alert(response))
                                .catch(error => alert(error.message))
                                .finally(() => setOpen(false));
                        }}>Register</Button>
                    </DialogDescription>
                </DialogContent>
            </Dialog>
            <Dialog open={openVote} onOpenChange={setOpenVote}>
                <DialogContent className="bg-white content-center text-center">
                    <DialogDescription className="mt-4">
                        {
                            voteUrl.length > 0 ?
                                voteUrl.map((username, i) => {
                                    return (
                                        <Link key={i}
                                              target={`_blank`}
                                              href={`https://gtop100.com/topsites/MapleStory/sitedetails/Fortuna-v179-103846?vote=1&pingUsername=${username}`}
                                              className="text-xl font-medium hover:underline underline-offset-4 pr-4"
                                              prefetch={false}
                                              style={{
                                                  textDecorationColor: `#E2BC44`,
                                                  textDecorationThickness: `3px`
                                              }}>
                                            Vote for {username}
                                        </Link>
                                    )
                                }) :
                                <div>You have no accounts!</div>
                        }
                    </DialogDescription>
                </DialogContent>
            </Dialog>
            <Dialog open={openUnstuck} onOpenChange={setOpenUnstuck}>
                <DialogContent className="bg-white content-center text-center">
                    <DialogDescription className="mt-4">
                        <span>Click which account you want to unstuck, then unstuck through the client by typing unstuck in your password field</span><br/>
                        {
                            voteUrl.length > 0 ?
                                voteUrl.map((username, i) => {
                                    return (
                                        <Button key={i}
                                                className="text-xl font-medium hover:underline underline-offset-4 pr-4 bg-white"
                                                onClick={() => UnstuckUser(username, discordId)}
                                                prefetch={false}
                                                style={{
                                                    textDecorationColor: `#E2BC44`,
                                                    textDecorationThickness: `3px`
                                                }}>
                                            Unstuck {username}
                                        </Button>
                                    )
                                }) :
                                <div>You have no accounts!</div>
                        }
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        </nav>
    )
}