import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";
import {Table, TableBody, TableCell, TableRow} from "../ui/table";
import {MesoBagIcon} from "./icons";

export default function ServerInformation(props) {
    return (
        <Card {...props}>
            <CardHeader className="bg-primary">
                <CardTitle className="fortuna-header flex">
                    SERVER INFORMATION
                </CardTitle>
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
                            <TableCell className="font-medium min-w-[100px]"><MesoBagIcon
                                className="h-12 w-12"/></TableCell>
                            <TableCell className="font-medium">Players Online</TableCell>
                            <TableCell className="text-left">100</TableCell>
                        </TableRow>
                        <TableRow>
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