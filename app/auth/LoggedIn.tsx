"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
}

const LoggedIn = ({ image }: Props) => {
  return (
    <li className="flex gap-8 items-center">
      <button className="authButton" onClick={() => signOut()}>
        Sign Out
      </button>

      <Link href={"/dashboard"}>
        <Image
          src={image}
          width={56}
          height={56}
          className="w-12 rounded-full"
          alt=""
          priority
        />
      </Link>
    </li>
  );
};

export default LoggedIn;
