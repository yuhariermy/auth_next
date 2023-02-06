import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [session, setSessions] = useState(false);
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Login Required Auth</title>
      </Head>
      {session ? User({ session }) : Guest()}
    </>
  );
}

// Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>
      <div className="flex justify-center">
        <Link href="/login">
          <h3 className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Sign In
          </h3>
        </Link>
      </div>
    </main>
  );
}

// Authorize User

function User({ session }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorize User Homepage</h3>
      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>
      <div className="flex justify-center">
        <button className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50">
          Log Out
        </button>
      </div>
      <div className="flex justify-center">
        <Link href="/profile">
          <h3 className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Profile
          </h3>
        </Link>
      </div>
    </main>
  );
}
