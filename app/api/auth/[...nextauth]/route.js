import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
import IsAdmin from "../../../../components/actions/is-admin";

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

                    const id = Number.parseInt(session.user.id);
                    if (!isNaN(id) && id !== 0) {
                        session.user.isAdmin = await IsAdmin(id);
                    } else {
                        session.user.isAdmin = false;
                    }

                    console.log(`user is admin: ${session.user.isAdmin}`)
                }
            }
            return session;
        }
    }
})

export { handler as GET, handler as POST }
