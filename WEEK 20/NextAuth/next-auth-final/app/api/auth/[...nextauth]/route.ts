import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials, req) {

        return {
          id: "1",
          name: "Siddharth",
          email: "sidlok@gmail.com"
        }
        }
      }
    )
  ],
  secret: process.env.NEXTAUTH_SECRET
})

export{handler as GET, handler as POST}