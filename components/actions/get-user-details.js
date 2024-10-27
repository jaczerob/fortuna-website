"use server"


import prisma from "../../db";

export default async function GetUserDetails(discordId) {
    const result = await prisma.$queryRaw`SELECT u.name AS name, u.accounttype as accounttype
                            FROM users u
                            WHERE discordid = ${discordId}
                            LIMIT 1`;

    if (result.length !== 1)
        return {};

    const username = result[0].name;
    const isAdmin = result[0].accounttype > 0;

    return {
        'voteUrl': `https://gtop100.com/topsites/MapleStory/sitedetails/Fortuna-v179-103846?vote=1&pingUsername=${username}`,
        'isAdmin': isAdmin
    }
}