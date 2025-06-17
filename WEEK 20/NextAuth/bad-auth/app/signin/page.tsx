"use client";

import axios from "axios";

export default function SignIn() {
  return (
    <div>
      Sign in page <br />
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <button
        onClick={async () => {
          const res = await axios.post("http://localhost:3000/api/signin", {
            username: "sncei2on",
            password: "askj293u39",
          });

          localStorage.setItem("token", res.data.token);
        }}>
        Sign in
      </button>
    </div>
  );
}
