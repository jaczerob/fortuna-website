import {PrismaClient} from "./components/generated/client-mysql";

const prismaClientSingleton = () => {
    return new PrismaClient()
}

const globalThis = {};

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

