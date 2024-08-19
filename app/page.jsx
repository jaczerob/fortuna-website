"use client"

import Showcase from "../components/app/showcase";
import Features from "../components/app/features";
import Header from "../components/app/header";
import ServerInformation from "../components/app/server-information";
import News from "../components/app/news";
import TopPlayers from "../components/app/top-players";

export default function Component() {
    return (
        <div className="flex flex-col min-h-dvh">
            <Header className="mb-16 md:mb-0"/>
            <main className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6 p-4 md:p-6 mt-0">
                <div className="col-span-1">
                    <ServerInformation className="rounded-lg"/>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <News className="rounded-lg"/>
                    <Features className="rounded-lg mt-6"/>
                    <Showcase className="rounded-lg mt-6"/>
                </div>
                <div className="col-span-1">
                    <TopPlayers className="rounded-lg"/>
                </div>
            </main>
        </div>
    )
}