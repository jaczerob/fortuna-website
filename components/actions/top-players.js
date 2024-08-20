"use server"


import prisma from "../../db";

export default async function GetTopPlayers() {
    return prisma.$queryRaw`SELECT cs.id, cs.name, cs.level, cs.job, u.accounttype, u.name
                            FROM characterstats cs,
                                 characters c,
                                 users u,
                                 accounts a
                            WHERE c.id = cs.id
                              AND c.accid = a.id
                              AND a.userid = u.id
                              AND u.accounttype = 0
                              AND (u.banExpireDate IS null OR u.banExpireDate <= NOW())
                            ORDER BY cs.level DESC
                                LIMIT 5;`;
}
