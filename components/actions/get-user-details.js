"use server"


import prisma from "../../db";

export default async function GetUserDetails(discordId) {
    const result = await prisma.$queryRaw`SELECT u.name AS name, u.accounttype as accounttype
                            FROM users u
                            WHERE discordid = ${discordId}`;

    if (result.length !== 1)
        return {};

    const usernames = result.map((account) => {
        return account.name
    });

    const isAdmin = result.filter((account) => {
        return account.accounttype > 0;
    }).length > 0;

    return {
        'usernames': usernames,
        'isAdmin': isAdmin
    }
}