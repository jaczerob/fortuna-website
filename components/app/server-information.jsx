"use client"

import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";
import {Table, TableBody, TableCell, TableRow} from "../ui/table";
import {MesoBagIcon} from "./icons";
import {useEffect, useState} from "react";

export default function ServerInformation(props) {
    const [serverStatistics, setServerStatistics] = useState({});
    useEffect(() => {
        let mounted = true;
        fetch('https://api.fortunams.org:8080/api/server/statistics')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setServerStatistics(json.onlineCount);
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
                            <TableCell className="font-medium"><MesoBagIcon
                                className="h-12 w-12"/></TableCell>
                            <TableCell className="font-medium">Server Status</TableCell>
                            <TableCell className="text-left">{serverStatistics != null ? 'Online': 'Offline'}</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-transparent">
                            <TableCell className="font-medium min-w-[100px]"><MesoBagIcon
                                className="h-12 w-12"/></TableCell>
                            <TableCell className="font-medium">Players Online</TableCell>
                            <TableCell className="text-left">{serverStatistics != null ? serverStatistics.unique : '0'}</TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-transparent">
                            <TableCell className="font-medium"><MesoBagIcon
                                className="h-12 w-12"/></TableCell>
                            <TableCell className="font-medium">Rates</TableCell>
                            <TableCell className="text-left">8x/3x/3x</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}