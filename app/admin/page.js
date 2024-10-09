"use client"

import {useSession} from "next-auth/react";
import {Input} from "../../components/ui/input";
import {Button} from "../../components/ui/button";
import {useState} from "react";
import {GetUserByCharacterName, GetUserByDiscordID} from "../../components/actions/find-user";
import {Card, CardContent, CardHeader, CardTitle} from "../../components/ui/card";
import {Table, TableBody, TableCell, TableRow} from "../../components/ui/table";

export default function Component() {
    const {data: session, status} = useSession();
    const isAdmin = session?.user?.isAdmin || false;
    const [discordId, setDiscordId] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [characters, setCharacters] = useState([]);

    if (!isAdmin) {
        return (
            <div className="flex flex-col min-h-dvh">
                <main className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6 p-4 md:p-6 mt-0">
                    go away nowwwww
                </main>
            </div>
        )
    }

    async function findUser() {
        let characters

        if (discordId) {
            characters = await GetUserByDiscordID(discordId);
        } else if (characterName) {
            characters = await GetUserByCharacterName(characterName);
        }

        console.log(characters)
        setCharacters(characters);
    }

    return (
        <div className="flex flex-col min-h-dvh items-center">
            <Button className="fortuna-header bg-transparent hover:bg-transparent mt-2"
                    onClick={() => window.open('/', '_self')}>GO BACK</Button>
            <main className="gap-6 p-4 md:p-6 mt-0">
                <Card>
                    <CardHeader className="bg-[#aeddff] mb-2">
                        <CardTitle className="fortuna-header">FIND USER</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex">
                            <Input type="text" placeholder="Discord ID" value={discordId} className="mr-2"
                                   onChange={(ev) => {
                                       setDiscordId(ev.target.value);
                                       setCharacterName('');
                                   }}/>
                            <Input type="text" placeholder="Character" value={characterName} className="mr-2"
                                   onChange={(ev) => {
                                       setCharacterName(ev.target.value);
                                       setDiscordId('');
                                   }}/>
                            <Button className="rounded-lg bg-white border-black border-[1px]"
                                    onClick={() => findUser()}>Find User</Button>
                        </div>
                        {
                            characters.length > 0 ? <Characters characters={characters}/> : <div/>
                        }
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}

function Characters(props) {
    const characterRows = props.characters.map(character => {
        return (
            <TableRow key={character.id}>
                <TableCell className="text-left">{character.discordid}</TableCell>
                <TableCell className="text-left">{character.name}</TableCell>
                <TableCell className="text-left">{character.charactername}</TableCell>
            </TableRow>
        )
    })
    return (
        <Table>
            <TableBody>
                <TableRow className="hover:bg-transparent">
                    <TableCell className="text-left">Discord ID</TableCell>
                    <TableCell className="text-left">Username</TableCell>
                    <TableCell className="text-left">Character Name</TableCell>
                </TableRow>
                {characterRows}
            </TableBody>
        </Table>
    );
}