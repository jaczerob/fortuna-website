"use server"

import { PrismaClientKnownRequestError } from "../generated/client-mysql";
import prisma from "../../db";
import bcrypt from "bcrypt";

const passwordRegex = /^[A-Za-z0-9]{8,}$/;
const usernameRegex = /^[A-Za-z0-9]+$/;

export default async function RegisterUser(usernameStr, passwordStr, discordIDStr) {
    if (isNullOrEmpty(usernameStr) || isNullOrEmpty(passwordStr)) {
        throw Error('Username or password cannot be empty')
    } else if (!passwordRegex.test(passwordStr)) {
        throw Error('Password must be 8+ characters and only contain letters or numbers')
    } else if (!usernameRegex.test(usernameStr)) {
        throw Error('Username must only contain letters or numbers')
    }

    let salt = bcrypt.genSaltSync(10, 'a');
    let hash = bcrypt.hashSync(passwordStr, salt);

    try {
        await prisma.users.create({
            data: {
                name: usernameStr,
                password: hash,
                freevippointdate: new Date().toISOString(),
                vipexpireddate: new Date().toISOString(),
                creationdate: new Date().toISOString(),
                lastvotetime: new Date().toISOString(),
                discordid: discordIDStr
            }
        });
    } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
            // The .code property can be accessed in a type-safe manner
            if (e.code === 'P2002') {
                throw Error('User already exists');
            }
        }

        throw e;
    }
}

function isNullOrEmpty(string) {
    return string == null || string === '';
}