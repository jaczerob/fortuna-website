import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "../ui/table";
import Image from "next/image";

export default function TopPlayers(props) {
    return (
        <Card {...props}>
            <CardHeader className="bg-[#aeddff]">
                <CardTitle className="fortuna-header">TOP PLAYERS</CardTitle>
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
                        <Player rank="1" name="Jacob" top="true" level="200" job="Mechanic"/>
                        <Player rank="2" name="Jacob" level="200" job="Mechanic"/>
                        <Player rank="3" name="Jacob" level="200" job="Mechanic"/>
                        <Player rank="4" name="Jacob" level="200" job="Mechanic"/>
                        <Player rank="5" name="Jacob" level="200" job="Mechanic"/>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

function Player(props) {
    return (
        <TableRow>
            {props.top &&
                <TableCell className="font-medium border" rowSpan="5">
                    <Image
                        src="https://msavatar1.nexon.net/Character/NPKPBLAJCINFFBLGCNIOGKONOCKNGLPIFKFOABOKKPPKGDBKLEIAKGEBENJMFBCNMDPLDJIPBDHAOLHDLECCHPFMMGHGACKBPBCMONKMOPOCGLOJEKCCKONOJBFBGOGFGIBKCPHKGKFAJNFBFJHKMMBHDGADCLLPFBHICOCLOCCKPBCBEELMAAGEPBPPKNJIBBBENMHECDMHBLMHLMONKJEFIINDIMEDECGICHMLEAAFAKBGKOJOKMAKIJKIKCBD.png"
                        alt="jacobolivia"
                        width="100"
                        height="100"
                    />
                    <hr/>
                    Lv. {props.level}<br/>
                    Job: {props.job}
                </TableCell>
            }
            <TableCell className="font-medium border">{props.rank}</TableCell>
            <TableCell className="border">{props.name}</TableCell>
        </TableRow>
    );
}