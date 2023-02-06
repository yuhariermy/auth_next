import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "../layout/layout";
import { images } from "../constants";

import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";

import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Form.module.css";

const Login = () => {
  const [show, setShow] = useState(false);

  // Google Handler Function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }
  return (
    <div>
      <Layout pageTitle="Homepage">
        <section className="w-3/4 mx-auto flex flex-col gap-10">
          <div className="title">
            <h1 className="text-gray-800 text-4xl font-bold py-4">
              BLUEBOX
              {/* <Image
                src={images.logo}
                className={styles.img_logo}
                alt="Logo Bluebox"
              ></Image> */}
            </h1>
            {/* <p className="w-3/4 mx-a text-gray-400">lorem</p> */}
          </div>

          <form className="flex flex-col gap-5">
            <div className={styles.input_group}>
              <input
                type="email"
                name="email"
                placeholder="email"
                className={styles.input_text}
              />
              <span className="icon flex items-center px-4">
                <HiAtSymbol size={25} />
              </span>
            </div>
            <div className={styles.input_group}>
              <input
                type={`${show ? "text" : "password"}`}
                name="password"
                placeholder="password"
                className={styles.input_text}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow(!show)}
              >
                <HiFingerPrint size={25} />
              </span>
            </div>
            <div className="input-button">
              <button type="submit" className={styles.button}>
                Login
              </button>
            </div>
            <div className="input-button">
              <button
                onClick={handleGoogleSignin}
                type="button"
                className={styles.button_custom}
              >
                Sign in With Google{" "}
                <Image
                  src={images.google}
                  width={20}
                  height={20}
                  alt="Google Image"
                ></Image>
              </button>
            </div>
            <div className="input-button">
              <button type="button" className={styles.button_custom}>
                Sign in With Github{" "}
                <Image
                  src={images.github}
                  width={20}
                  height={20}
                  alt="Google Image"
                ></Image>
              </button>
            </div>
          </form>

          <div className="text-center text-gray-400 ">
            Dont have an account yet?
            <Link href="/register">
              <p className="text-blue-700"> Sign Up</p>
            </Link>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Login;
