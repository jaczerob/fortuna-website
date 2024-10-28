"use server"


import prisma from "../../db";

export default async function UnstuckUser(username, discordId) {
    return prisma.$queryRaw`UPDATE users
                            SET clientstate = 2
                            WHERE name = ${username}
                              AND discordid = ${discordId}
                              AND clientstate = 1`;
}