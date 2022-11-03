import NextAuth, { Awaitable, Session, User } from "next-auth";
import GithubProvider from "next-auth/providers/github";

type ExtendedUserType = User & { username?: string; uid?: string };

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-app
            // @ts-ignore
            scope: "read:user",
          }),
    ],
    session: { strategy: "jwt" },
    secret: process.env.JWT_SECRET,
    callbacks: {
            // async signIn({ user, account, profile, email, credentials }) {
            //   return true
            // },
            // async jwt({ token, account, profile }) {
            // // Persist the OAuth access_token and or the user id to the token right after signin
            // if (account) {
            //     token.accessToken = account.access_token
            //     token.id = profile?.sub
            // }
            // return token
            // },
            async session({ session, token, user }){
                // Send properties to the client, like an access_token and user id from a provider.
                (session.user as ExtendedUserType).username = session.user?.name
                ?.split(" ")
                .join("")
                .toLocaleLowerCase();

            (session.user as ExtendedUserType).uid = token.sub;

            return session;


              }
      }
})
