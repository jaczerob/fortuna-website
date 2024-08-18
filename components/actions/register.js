"use server"

import { PrismaClient } from "../generated/client-mysql";
import bcrypt from "bcrypt";

const mysqlClient = new PrismaClient();

export default async function RegisterUser(usernameStr, passwordStr) {
    if (isNullOrEmpty(usernameStr) || isNullOrEmpty(passwordStr))
        return false;

    let salt = bcrypt.genSaltSync(10, 'a');
    let hash = bcrypt.hashSync(passwordStr, salt);

    return mysqlClient.users.create({
        data: {
            name: usernameStr,
            password: hash,
            freevippointdate: new Date().toISOString(),
            vipexpireddate: new Date().toISOString(),
            creationdate: new Date().toISOString(),
            lastvotetime: new Date().toISOString()
        }
    }).then(
        (result) => {
            console.log(`Created user successfully: ${result.id}`);
            return true;
        },
        (reason) => {
            console.error(`Failed to create user: ${reason}`);
            return false;
        }
    );
}

function isNullOrEmpty(string) {
    return string == null || string === '';
}