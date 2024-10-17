import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";

export default function News(props) {
    return (
        <Card className="rounded-lg">
            <CardHeader className="bg-[#aeddff]">
                <CardTitle className="fortuna-header">NEWS, UPDATES, & EVENTS</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 overflow-y-auto mt-3">
                <div className="grid gap-2">
                    <h3 className="text-lg font-bold">Full Release!</h3>
                    <p className="text-sm text-muted-foreground">
                        Fortuna will be officially open on October 25th! All beta progress will be wiped. Thanks to all
                        our beta and alpha testers for their help!
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarIcon className="h-4 w-4"/>
                        <span>October 25, 2024</span>
                    </div>
                </div>
                <div className="grid gap-2">
                    <h3 className="text-lg font-bold">Open Beta Launch!</h3>
                    <p className="text-sm text-muted-foreground">
                        Fortuna will be open for Beta testing on Aug. 16th! Join and test out and help us
                        make Fortuna the best it can be! There will be a wipe afterwards.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarIcon className="h-4 w-4"/>
                        <span>August 16, 2024</span>
                    </div>
                </div>
            </CardContent>
        </Card>
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