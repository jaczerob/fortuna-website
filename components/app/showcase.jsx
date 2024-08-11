"use client"

import Image from "next/image";
import {useState} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "../ui/dialog";
import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";

export default function Showcase(props) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Card {...props}>
                <CardHeader className="bg-[#aeddff]">
                    <CardTitle className="fortuna-header">SHOWCASE</CardTitle>
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
            <video
                muted={true}
                autoPlay={true}
                controls
                loop
            >
                <source src="/Magnus.mp4" type="video/mp4"/>
            </video>
            <video
                muted={true}
                autoPlay={true}
                controls
                loop
            >
                <source src="/auction_house.mp4" type="video/mp4"/>
            </video>
            <video
                muted={true}
                autoPlay={true}
                controls
                loop
            >
                <source src="/Pgach2.mp4" type="video/mp4"/>
            </video>
            <video
                muted={true}
                autoPlay={true}
                controls
                loop
            >
                <source src="/surprise_style_nx_box.mp4" type="video/mp4"/>
            </video>
        </div>
    )
}