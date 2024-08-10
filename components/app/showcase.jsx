"use client"

import Image from "next/image";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {DialogContent, DialogHeader, DialogTitle, Dialog} from "../ui/dialog";
import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";

export default function Showcase(props) {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Card {...props}>
                <CardHeader className="bg-[#aeddff]">
                    <CardTitle className="text-center text-3xl md:text-5xl text-white" style={{
                        textShadow: `3px 0 #E2BC44, -3px 0 #E2BC44, 0 3px #E2BC44, 0 -3px #E2BC44, 3px 3px #E2BC44, -3px -3px #E2BC44, 3px -3px #E2BC44, -3px 3px #E2BC44`
                    }}>SHOWCASE</CardTitle>
                </CardHeader>
                <CardContent className="mt-4" onClick={() => setOpen(true)}>
                    <Images className="flex overflow-x-auto min-w-full gap-6 h-auto"/>
                </CardContent>
            </Card>
            <Dialog open={open} onOpenChange={setOpen} className="min-w-full">
                <DialogContent className="min-w-[95%] min-h-[60%]">
                    <DialogHeader>
                        <DialogTitle>Showcase</DialogTitle>
                    </DialogHeader>
                    <Images className="flex gap-4 overflow-x-auto"/>
                </DialogContent>
            </Dialog>
        </div>
    )
}

function Images(props) {
    return (
        <div {...props}>
            <Image
                src="/showcase_1.png"
                alt="Image 1"
                width={1370}
                height={797}
                className="object-cover"
                style={{objectFit: "cover"}}
            />
            <Image
                src="/showcase_1.png"
                alt="Image 1"
                width={1370}
                height={797}
                className="object-cover"
                style={{objectFit: "cover"}}
            />
            <Image
                src="/showcase_1.png"
                alt="Image 1"
                width={1370}
                height={797}
                className="object-cover"
                style={{objectFit: "cover"}}
            />
            <Image
                src="/showcase_1.png"
                alt="Image 1"
                width={1370}
                height={797}
                className="object-cover"
                style={{objectFit: "cover"}}
            />
        </div>
    )
}