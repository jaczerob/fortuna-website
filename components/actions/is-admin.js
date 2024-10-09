"use server"


import prisma from "../../db";

export default async function IsAdmin(id) {
    const response = await prisma.$queryRaw`SELECT count(id) as count
                                            FROM users u
                                            WHERE u.accounttype > 0
                                              AND u.discordid = ${id};`;

    console.log(response)
    return response[0].count === 1n;
}