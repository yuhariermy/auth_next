import { useState } from "react";
import { getSession, useSession, signIn, signOut } from "next-auth/react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  // const [session, setSessions] = useState(false);
  const { data: session } = useSession();
  function handleSignOut() {
    signOut();
  }

  return (
    <>
      <Head>
        <title>Login Required Auth</title>
      </Head>
      {session ? User({ session, handleSignOut }) : Guest()}
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
function User({ session, handleSignOut }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorize User Homepage</h3>
      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleSignOut}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50"
        >
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

// Server Side Rendering
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
