"use client"

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../ui/card";

export default function Features(props) {
    return (
        <Card {...props}>
            <CardHeader className="bg-[#aeddff]">
                <CardTitle className="fortuna-header">FEATURES</CardTitle>
            </CardHeader>
            <CardContent className="border-transparent bg-transparent grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-center">
                <Feature
                    title="MANY CLASSES"
                    description="All classes up to Blaster fully functional!"
                />
                <Feature
                    title="5TH JOB"
                    description="Fully functional 5th job for all classes!"
                />
                <Feature
                    title="GEAR PROGRESSION"
                    description="25* Star Forcing, Nebulites, Scrolling, Cubing, Soul Weapon"
                />
                <Feature
                    title="BOSSES"
                    description="All bosses fully functional up to Lucid!"
                />
                <Feature
                    title="AUCTION HOUSE"
                    description="An in-game auction house for selling items!"
                />
            </CardContent>
        </Card>
    )
}

function Feature(props) {
    return (
        <Card className="border-transparent bg-transparent">
            <CardHeader>
                <CardTitle className="fortuna-header-small">{props.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{props.description}</CardDescription>
            </CardContent>
        </Card>
    )
}