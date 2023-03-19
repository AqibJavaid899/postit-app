"use client";

import { signIn } from "next-auth/react";

type Props = {};

const Login = (props: Props) => {
  return (
    <li className="list-none">
      <button onClick={() => signIn()} className="authButton">
        Sign In
      </button>
    </li>
  );
};

export default Login;
