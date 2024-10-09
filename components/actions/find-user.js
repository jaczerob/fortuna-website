"use server"


import prisma from "../../db";

export async function GetUserByDiscordID(id) {
    return prisma.$queryRaw`SELECT cs.id, u.discordid, cs.name as charactername, u.name
                            FROM characterstats cs,
                                 characters c,
                                 users u,
                                 accounts a
                            WHERE c.id = cs.id
                              AND c.accid = a.id
                              AND a.userid = u.id
                              AND u.discordid = ${id}`;
}

export async function GetUserByCharacterName(name) {
    const response = await prisma.$queryRaw`SELECT u.discordid as discordid
                                            FROM characterstats cs,
                                                 characters c,
                                                 users u,
                                                 accounts a
                                            WHERE cs.name = ${name}
                                              AND c.id = cs.id
                                              AND c.accid = a.id
                                              AND a.userid = u.id`;

    if (!response) {
        return [];
    }

    const discordId = response[0]?.discordid;
    if (!discordId || discordId === 0) {
        return [];
    }

    return GetUserByDiscordID(discordId);
}