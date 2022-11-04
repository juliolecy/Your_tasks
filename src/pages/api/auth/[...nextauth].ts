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
    secret: "454f30251d65caf7cbc3f79424d86182",
    callbacks: {
            async session({ session, token, user }){

                (session.user as ExtendedUserType).username = session.user?.name
                ?.split(" ")
                .join("")
                .toLocaleLowerCase();

            (session.user as ExtendedUserType).uid = token.sub;

            return session;


              }
      }
})
