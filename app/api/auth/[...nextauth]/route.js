import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

const handler = NextAuth({
    providers: [
        DiscordProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({session, token, user}) {
            if (token) {
                if (token?.picture?.includes("discord")) {
                    session.user.id = token.sub;
                }
            }
            return session;
        }
    }
})

export { handler as GET, handler as POST }
