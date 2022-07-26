import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { firebaseConfig } from "../../../util/firebase";
import { v4 as uuidv4 } from "uuid";
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/providers/overview
  providers: [
    GoogleProvider({
      // clientId:'792219443106-3mh3nt46s72cesh54r343jfp83mlivbe.apps.googleusercontent.com',
      // // process.env.GOOGLE_CLIENT_ID,
      // clientSecret: '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',
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  adapter: FirestoreAdapter(firebaseConfig),

  secret: process.env.JWT_SECRET,

  pages: {
    signIn: "/home",
  },

  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },

  // ...
});
