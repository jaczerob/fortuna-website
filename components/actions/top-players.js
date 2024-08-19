"use server"


import {PrismaClient} from "../generated/client-mysql";

const mysqlClient = new PrismaClient();

export default async function GetTopPlayers() {
    const results = mysqlClient.$queryRaw`SELECT cs.id, cs.name, cs.level, cs.job
                                 FROM characterstats cs,
                                      characters c,
                                      users u
                                 WHERE c.id = cs.id
                                   AND c.accid = u.id
                                   AND u.accounttype = 0
                                   AND (u.banExpireDate IS null OR u.banExpireDate <= NOW())
                                 ORDER BY cs.level DESC LIMIT 5;`;

    return results;
}
