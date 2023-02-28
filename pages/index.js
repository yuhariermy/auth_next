import { useState } from "react";
import { getSession, useSession, signIn, signOut } from "next-auth/react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { images } from "../constants";
import styles from "../styles/Home.module.scss";

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
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Welcome To Dashboard Divisi QHSE&E</h1>
        <div className={styles.buttons}>
          {/* <div className={styles.button}>
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/dashboard/${product.slug.current}`}
              >
                <button>{product.name}</button>
              </Link>
            ))}
          </div> */}

          <div className={styles.button}>
            <Link href="/dashboard/dashboard-eLearning-internal">
              <button>
                <Image src={images.elearningInternal} alt="icon" />
                Monitoring E-Learning Internal
              </button>
            </Link>
          </div>
          <div className={styles.button}>
            <Link href="/dashboard/dashboard-eLearning">
              <button>
                <Image src={images.elearning} alt="icon" />
                Monitoring E-Learning
              </button>
            </Link>
          </div>
          <div className={styles.button}>
            <Link href="/dashboard/dashboard-csi-diveng">
              <button>
                <Image src={images.diveng} alt="icon" />
                CSI Div.Engineering
              </button>
            </Link>
          </div>
          <div className={styles.button}>
            <Link href="/dashboard/dashboard-csi-portalkm">
              <button>
                <Image src={images.portalkm} alt="icon" />
                CSI Portal KM
              </button>
            </Link>
          </div>
          <div className={styles.button}>
            <Link href="/dashboard/dashboard-bimwika-awards-2023">
              <button>
                <Image src={images.bimwikaawards} alt="icon" />
                BIMWIKA Awards 2023
              </button>
            </Link>
          </div>
          <div className={styles.button}>
            <Link href="/dashboard/dashboard-predictive-alat-survey">
              <button>
                <Image src={images.survey} alt="icon" />
                Predictive service alat survey
              </button>
            </Link>
          </div>
          <div className={styles.button}>
            <Link href="/dashboard/dashboard-lean-cons">
              <button>
                <Image src={images.leanConstruction} alt="icon" />
                Lean Construction
              </button>
            </Link>
          </div>
          <div className={styles.button}>
            <Link href="/dashboard/dashboard-absensi-qhsee">
              <button>
                <Image src={images.qhsee} alt="icon" />
                Absensi & CSI Div.QHSEE
              </button>
            </Link>
          </div>
          <div className={styles.button}>
            <Link href="/dashboard/monitoring-pelatihan-implementasi-BIM">
              <button>
                <Image src={images.bimHC} alt="icon" />
                Implementasi BIM HC
              </button>
            </Link>
          </div>
          <div className={styles.button}>
            <Link href="/dashboard/dashboard-maturity-bim">
              <button>
                <Image src={images.maturity} alt="icon" />
                Maturity BIM 5D WIKA
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.buttons2}>
          <button onClick={handleSignOut}>Log Out</button>
        </div>
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
