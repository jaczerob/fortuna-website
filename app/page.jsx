import Link from "next/link"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../components/ui/card"
import Image from "next/image";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "../components/ui/table";
import Showcase from "../components/app/showcase";

export default function Component() {
    return (
        <div className="flex flex-col min-h-dvh">
            <header className="bg-transparent text-primary-foreground py-6 px-4 md:px-6 mb-0 md:pb-0 pb-16">
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
                    <Link target="_blank" href="https://discord.gg/BWq9u2t8rq" className="text-3xl font-medium hover:underline underline-offset-4 pr-4"
                          prefetch={false}>
                        <h5 className="text-center text-white" style={{
                            textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44, 3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44`
                        }}>REGISTER</h5>
                    </Link>
                    <Link target="_blank" href="https://discord.gg/BWq9u2t8rq" className="text-3xl font-medium hover:underline underline-offset-4 pr-4"
                          prefetch={false}>
                        <h5 className="text-center text-white" style={{
                            textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44, 3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44`
                        }}>MANAGE ACCOUNT</h5>
                    </Link>
                    <Link target="_blank" href="https://discord.gg/BWq9u2t8rq" className="text-3xl font-medium hover:underline underline-offset-4 pr-4"
                          prefetch={false}>
                        <h5 className="text-center text-white" style={{
                            textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44, 3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44`
                        }}>DONATE</h5>
                    </Link>
                </nav>
            </header>
            <main className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6 p-4 md:p-6 mt-0">
                <div className="col-span-1">
                    <Card className="rounded-lg">
                        <CardHeader className="bg-primary">
                            <CardTitle className="text-center text-5xl text-white text-wrap"  style={{
                                textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44, 3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44`
                            }}>SERVER INFORMATION</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium"><MesoBagIcon
                                            className="h-12 w-12"/></TableCell>
                                        <TableCell className="font-medium">Server Status</TableCell>
                                        <TableCell className="text-left">Online</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium"><MesoBagIcon
                                            className="h-12 w-12"/></TableCell>
                                        <TableCell className="font-medium">Players Online</TableCell>
                                        <TableCell className="text-left">100</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium"><MesoBagIcon
                                            className="h-12 w-12"/></TableCell>
                                        <TableCell className="font-medium">Rates</TableCell>
                                        <TableCell className="text-left">1x/1x/1x</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <Card className="rounded-lg">
                        <CardHeader className="bg-[#aeddff]">
                            <CardTitle className="text-center text-5xl text-white" style={{ textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44,
                                3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44` }}>NEWS, UPDATES, & EVENTS</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4 overflow-y-auto mt-3">
                            <div className="grid gap-2">
                                <h3 className="text-lg font-bold">New Map Released</h3>
                                <p className="text-sm text-muted-foreground">
                                    Explore the vast and mysterious Enchanted Forest, filled with hidden treasures and
                                    dangerous foes.
                                </p>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CalendarIcon className="h-4 w-4"/>
                                    <span>August 15, 2024</span>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <h3 className="text-lg font-bold">Patch Notes v1.2.3</h3>
                                <p className="text-sm text-muted-foreground">
                                    Check out the latest bug fixes and improvements to your favorite game.
                                </p>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CalendarIcon className="h-4 w-4"/>
                                    <span>July 30, 2024</span>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <h3 className="text-lg font-bold">Upcoming Events</h3>
                                <p className="text-sm text-muted-foreground">Join us for exciting in-game events and
                                    tournaments.</p>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CalendarIcon className="h-4 w-4"/>
                                    <span>September 1, 2024</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="rounded-lg mt-6">
                        <CardHeader className="bg-[#aeddff]">
                            <CardTitle className="text-center text-3xl md:text-5xl text-white" style={{ textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44,
                                3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44` }}>FEATURES</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>MANY CLASSES</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>All classes up to Blaster fully functional!</CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>PROFESSIONS</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>Description of feature</CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>MONSTER COLLECTION</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>Description of feature</CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>CHARACTER CARDS</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>Description of feature</CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>CUSTOMIZED CASH SHOP</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>Description of feature</CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>AUCTION HOUSE</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>Description of feature</CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>SOUL WEAPONS</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>Description of feature</CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>BUDDY/GUILD/PARTY SYSTEMS</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>Description of feature</CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>STAR FORCING</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>Description of feature</CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>BOSSES</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>All bosses fully functional up to Lucid and Will!</CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>AUTO JOB ADVANCEMENT</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>Description of feature</CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>CUBING</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>Description of feature</CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>BOSS CURRENCY EXCHANGE</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>Description of feature</CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>DOJO</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>Description of feature</CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>BOSS RUSH</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>Description of feature</CardDescription>
                                </CardContent>
                            </Card>
                        </CardContent>
                    </Card>
                    <Showcase className="rounded-lg mt-6"/>
                </div>
                <div className="col-span-1">
                    <Card className="rounded-lg">
                        <CardHeader className="bg-[#aeddff]">
                            <CardTitle className="text-center text-5xl text-white" style={{ textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44,
                                3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44` }}>TOP PLAYERS</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4 mt-3">
                            <Table className="border">
                                <TableHeader className="border">
                                    <TableRow>
                                        <TableHead className="border w-40">Character</TableHead>
                                        <TableHead className="border">Rank</TableHead>
                                        <TableHead className="border">Name</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="border">
                                    <TableRow className="border">
                                        <TableCell className="font-medium border" rowSpan="5">
                                            <Image
                                                src="https://msavatar1.nexon.net/Character/NPKPBLAJCINFFBLGCNIOGKONOCKNGLPIFKFOABOKKPPKGDBKLEIAKGEBENJMFBCNMDPLDJIPBDHAOLHDLECCHPFMMGHGACKBPBCMONKMOPOCGLOJEKCCKONOJBFBGOGFGIBKCPHKGKFAJNFBFJHKMMBHDGADCLLPFBHICOCLOCCKPBCBEELMAAGEPBPPKNJIBBBENMHECDMHBLMHLMONKJEFIINDIMEDECGICHMLEAAFAKBGKOJOKMAKIJKIKCBD.png"
                                                alt="jacobolivia"
                                                width="100"
                                                height="100"
                                            />
                                            <hr/>
                                            Lv. 200<br/>
                                            Job: Mechanic
                                        </TableCell>
                                        <TableCell className="font-medium border">1</TableCell>
                                        <TableCell className="border">Jacob</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium border">2</TableCell>
                                        <TableCell className="border">Jacob</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium border">3</TableCell>
                                        <TableCell className="border">Jacob</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium border">4</TableCell>
                                        <TableCell className="border">Jacob</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium border">5</TableCell>
                                        <TableCell className="border">Jacob</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}

function MesoBagIcon(props) {
    return (
        <Image
            {...props}
            src="/mesobag.png"
            alt="Meso"
            width="100"
            height="100"
            style={{ objectFit: `cover` }}
        />
    )
}

function CalendarIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 2v4"/>
            <path d="M16 2v4"/>
            <rect width="18" height="18" x="3" y="4" rx="2"/>
            <path d="M3 10h18"/>
        </svg>
    )
}