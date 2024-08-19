"use client"

import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "../ui/table";
import {useEffect, useState} from "react";
import {Skeleton} from "../ui/skeleton";
import {randomUUID} from "crypto";
import GetTopPlayers from "../actions/top-players";

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
        GetTopPlayers()
            .then(rankings => {
                console.log(rankings)
                setRankings(rankings);
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
                        <TableRow className="hover:bg-transparent">
                            <TableHead className="border">Rank</TableHead>
                            <TableHead className="border">Name</TableHead>
                            <TableHead className="border">Level</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="border">
                        { rankings != null && rankings.length !== 0 ? rankings.map((player, i) => {
                            return (
                                <Player key={player.name} rank={i + 1} name={player.name} level={player.level}/>
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
        <TableRow className="hover:bg-transparent">
            <TableCell className="border">{props.rank}</TableCell>
            <TableCell className="border">{props.name}</TableCell>
            <TableCell className="border">{props.level}</TableCell>
        </TableRow>
    );
}