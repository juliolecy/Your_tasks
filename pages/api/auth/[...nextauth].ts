import NextAuth, { User } from "next-auth";
import GithubProvider from "next-auth/providers/github";

type ExtendedUserType = User & { username?: string; uid?: string };

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
          }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, token, user }){

                (session.user as ExtendedUserType).username = session.user?.name
                ?.split(" ")
                .join("")
                .toLocaleLowerCase();

            (session.user as ExtendedUserType).uid = token.sub;

            return session;
              },
              async signIn({ user, account, profile, email, credentials }) {
                const isAllowedToSignIn = true
                if (isAllowedToSignIn) {
                  return true;
                } else {
                  return false
                }
              }
      }
})
