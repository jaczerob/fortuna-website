"use client"

import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "../ui/table";
import {useEffect, useState} from "react";
import {Skeleton} from "../ui/skeleton";
import {randomUUID} from "crypto";

export default function TopPlayers(props) {
    const [rankings, setRankings] = useState([]);
    const placeHolderPlayers = [
        { name: '', rank: '1', level: '' },
        { name: '', rank: '2', level: '' },
        { name: '', rank: '3', level: '' },
        { name: '', rank: '4', level: '' },
        { name: '', rank: '5', level: '' },
    ]

    useEffect(() => {
        let mounted = true;
        fetch('https://api.fortunams.org:8080/api/server/rankings')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setRankings(json.rankings);
            })
            .catch(err => console.log(err.message));

        return () => mounted = false;
    }, []);

    return (
        <Card {...props}>
            <CardHeader className="bg-[#aeddff]">
                <CardTitle className="fortuna-header">TOP PLAYERS</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 mt-3">
                <Table className="border">
                    <TableHeader className="border">
                        <TableRow>
                            <TableHead className="border">Rank</TableHead>
                            <TableHead className="border">Name</TableHead>
                            <TableHead className="border">Level</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="border">
                        { rankings != null && rankings.length !== 0 ? rankings.map(player => {
                            return (
                                <Player key={player.name} rank={player.rank} name={player.name} level={player.level}/>
                            )
                        }) : placeHolderPlayers.map(player => {
                            return (
                                <SkeletonPlayer key={player.rank} className="w-[100px] h-[20px] rounded-full" />
                            )
                        })}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

function SkeletonPlayer(props) {
    return (
        <TableRow {...props}>
            <TableCell className="border" colSpan={3}><Skeleton>Loading...</Skeleton></TableCell>
        </TableRow>
    );
}

function Player(props) {
    return (
        <TableRow>
            <TableCell className="border">{props.rank}</TableCell>
            <TableCell className="border">{props.name}</TableCell>
            <TableCell className="border">{props.level}</TableCell>
        </TableRow>
    );
}

async function fetchPlayers() {
    const response= await fetch('http://95.216.153.56:8080/server/rankings');
    if (!response.ok) {
        response.text().then(console.error);
        return null;
    }

    return await response.json();
}