import { useState } from "react";
import { getSession, useSession, signIn, signOut } from "next-auth/react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { images } from "../constants";
import styles from "../styles/Home.module.css";

import TestModals from "../components/Modal/TestModals";

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
  const [showModal1, setShowModal1] = useState(false);
  const toggleModal1 = () => setShowModal1(!showModal1);
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorize User Homepage</h3>
      <div className="details">
        {console.log(session)}
        <h5>{session.user.username}</h5>
        <h5>{session.user.email}</h5>
        <img src={session.user.image} alt="Profile" />
      </div>

      {/* PC List */}
      <div className={styles.list_computer}>
        <div className={styles.swiper_slide}>
          <button className={styles.btn} onClick={toggleModal1}>
            <Image src={images.pc1} alt="" width={250} height={250} />
          </button>
          <TestModals title={"PC 1"} isOpen={showModal1} onClose={toggleModal1}>
            <div className={styles.codegena}>
              <h1>
                Status: <span>Active</span>
              </h1>
              <p>Data 1</p>
              <p>Data 2</p>
              <p>Data 3</p>
              <p>Data 4</p>
              <p>Data 5</p>
            </div>
          </TestModals>
        </div>
        <div className={styles.swiper_slide}>
          <button className={styles.btn} onClick={toggleModal1}>
            <Image src={images.pc1} alt="" width={250} height={250} />
          </button>
          <TestModals title={"PC 1"} isOpen={showModal1} onClose={toggleModal1}>
            <div className={styles.codegena}>
              <h1>
                Status: <span>Active</span>
              </h1>
              <p>Data 1</p>
              <p>Data 2</p>
              <p>Data 3</p>
              <p>Data 4</p>
              <p>Data 5</p>
            </div>
          </TestModals>
        </div>
        <div className={styles.swiper_slide}>
          <button className={styles.btn} onClick={toggleModal1}>
            <Image src={images.pc1} alt="" width={250} height={250} />
          </button>
          <TestModals title={"PC 1"} isOpen={showModal1} onClose={toggleModal1}>
            <div className={styles.codegena}>
              <h1>
                Status: <span>Active</span>
              </h1>
              <p>Data 1</p>
              <p>Data 2</p>
              <p>Data 3</p>
              <p>Data 4</p>
              <p>Data 5</p>
            </div>
          </TestModals>
        </div>
        <div className={styles.swiper_slide}>
          <button className={styles.btn} onClick={toggleModal1}>
            <Image src={images.pc1} alt="" width={250} height={250} />
          </button>
          <TestModals title={"PC 1"} isOpen={showModal1} onClose={toggleModal1}>
            <div className={styles.codegena}>
              <h1>
                Status: <span>Active</span>
              </h1>
              <p>Data 1</p>
              <p>Data 2</p>
              <p>Data 3</p>
              <p>Data 4</p>
              <p>Data 5</p>
            </div>
          </TestModals>
        </div>
        <div className={styles.swiper_slide}>
          <button className={styles.btn} onClick={toggleModal1}>
            <Image src={images.pc1} alt="" width={250} height={250} />
          </button>
          <TestModals title={"PC 1"} isOpen={showModal1} onClose={toggleModal1}>
            <div className={styles.codegena}>
              <h1>
                Status: <span>Active</span>
              </h1>
              <p>Data 1</p>
              <p>Data 2</p>
              <p>Data 3</p>
              <p>Data 4</p>
              <p>Data 5</p>
            </div>
          </TestModals>
        </div>
      </div>

      {/* Logout */}
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

// Server Side Rendering == Protected Route
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
