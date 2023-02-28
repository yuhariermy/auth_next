import { useState } from "react";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { images } from "../constants";
import LayoutAuth from "../layout/layout";
import login_validate from "../lib/validate";
import styles from "../styles/Form.module.css";

const Login = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  // formik hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });

    console.log(status);

    if (status.ok) router.push(status.url);
  }

  // Google Handler Function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }
  return (
    <div>
      <LayoutAuth pageTitle="Login Page">
        <section className="w-3/4 mx-auto flex flex-col gap-10">
          <div className="title">
            <h1 className="text-gray-800 text-4xl font-bold py-4">
              DASHBOARD - LOGIN
              {/* <Image
                src={images.logo}
                className={styles.img_logo}
                alt="Logo Bluebox"
              ></Image> */}
            </h1>
            {/* <p className="w-3/4 mx-a text-gray-400">lorem</p> */}
          </div>

          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
            <div
              className={`${styles.input_group} ${
                formik.errors.email && formik.touched.email
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.input_text}
                {...formik.getFieldProps("email")}
              />
              <span className="icon flex items-center px-4">
                <HiAtSymbol size={25} />
              </span>
            </div>
            <div
              className={`${styles.input_group} ${
                formik.errors.password && formik.touched.password
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type={`${show ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                className={styles.input_text}
                onChange={formik.handleChange}
                {...formik.getFieldProps("password")}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow(!show)}
              >
                <HiFingerPrint size={25} />
              </span>
            </div>
            {formik.errors.password ? (
              <span className="text-rose-500">{formik.errors.password}</span>
            ) : (
              <></>
            )}
            <div className="input-button">
              <button type="submit" className={styles.button}>
                Masuk
              </button>
            </div>

            {/* Google Login */}
            {/* <div className="input-button">
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
            </div> */}

            {/* Github Login */}
            {/* <div className="input-button">
              <button type="button" className={styles.button_custom}>
                Sign in With Github{" "}
                <Image
                  src={images.github}
                  width={20}
                  height={20}
                  alt="Google Image"
                ></Image>
              </button>
            </div> */}
          </form>

          {/* Register */}
          {/* <div className="text-center text-gray-400 text-2xl ">
            Belum punya akun?
            <Link href="/register">
              <p className="text-blue-700 text-2xl"> Daftar</p>
            </Link>
          </div> */}
        </section>
      </LayoutAuth>
    </div>
  );
};

export default Login;
