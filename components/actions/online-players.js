"use server"


import prisma from "../../db";

export default async function GetOnlinePlayers() {
    return prisma.$queryRaw`SELECT count(id) as count
                            FROM users u
                            WHERE u.clientstate = 2
                            AND u.accounttype = 0;`;
}
