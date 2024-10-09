"use client"

import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";
import {Table, TableBody, TableCell, TableRow} from "../ui/table";
import {MesoBagIcon} from "./icons";
import {useEffect, useState} from "react";
import GetOnlinePlayers from "../actions/online-players";

export default function ServerInformation(props) {
    const [onlineCount, setOnlineCount] = useState('0');

    useEffect(() => {
        let mounted = true;
        GetOnlinePlayers()
            .then(count => {
                console.log(`got online count: ${count}`)
                setOnlineCount(count);
            })
            .catch(err => console.log(err.message));

        return () => mounted = false;
    }, []);

    return (
        <Card {...props}>
            <CardHeader className="bg-primary">
                <CardTitle className="fortuna-header">
                    SERVER INFORMATION
                </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <Table>
                    <TableBody>
                        <TableRow className="hover:bg-transparent">
                            <TableCell className="font-medium min-w-[100px]"><MesoBagIcon
                                className="h-12 w-12"/></TableCell>
                            <TableCell className="font-medium">Players Online</TableCell>
                            <TableCell className="text-left">{onlineCount}</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-transparent">
                            <TableCell className="font-medium"><MesoBagIcon
                                className="h-12 w-12"/></TableCell>
                            <TableCell className="font-medium">Rates</TableCell>
                            <TableCell className="text-left">8x/3x/2x</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}