import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";

import NextAuth from "next-auth";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        console.log(username);
        console.log(password);
        const user = {
          name: "siddharth",
          id: "1",
          username: "siddharth@gmail.com"
        }

        if (user) {
          return user;
        } else {
          return null;
        }
      }
    }),
  GoogleProvider({
    clientId: "kasdfkn",
    clientSecret: "ajkfsan3"
  }),
  DiscordProvider({
    clientId: "safkks",
    clientSecret: "afmnkead"
  })
]
})

export{handler as GET, handler as POST}