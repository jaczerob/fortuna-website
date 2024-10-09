"use server"


import prisma from "../../db";

BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};

export default async function GetOnlinePlayers() {
    const response = await prisma.$queryRaw`SELECT count(id) as count
                            FROM users u
                            WHERE u.clientstate = 2
                            AND u.accounttype = 0;`;

    return response[0].count.toString();
}
