import { useState } from "react";
import {
  HiAtSymbol,
  HiFingerPrint,
  HiOutlineUser,
  HiOutlinePhone,
  HiOutlineCreditCard,
} from "react-icons/hi";
import { useFormik } from "formik";
import { registerValidate } from "../lib/validate";

import Link from "next/link";
import { useRouter } from "next/router";

import LayoutAuth from "../layout/layout";
import styles from "../styles/Form.module.css";

const Register = () => {
  const [show, setShow] = useState({ password: false, cpassword: false });
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      num: "",
      tel: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: registerValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };
    await fetch("http://localhost:3000/api/auth/signup", options)
      .then((res) => res.json())
      .then((data) => {
        if (data) router.push("http://localhost:3000");
      });
  }

  return (
    <div>
      <LayoutAuth pageTitle="Register">
        <section className="w-3/4 mx-auto flex flex-col gap-10">
          <div className="title">
            <h1 className="text-gray-800 text-4xl font-bold py-2">
              BLUEBOX - Register
              {/* <Image
                src={images.logo}
                className={styles.img_logo}
                alt="Logo Bluebox"
              ></Image> */}
            </h1>
            {/* <p className="w-3/4 mx-a text-gray-400">lorem</p> */}
          </div>

          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
            {/* Nama Lengkap */}
            <div className={styles.input_group}>
              <input
                type="text"
                name="username"
                placeholder="Nama Lengkap"
                className={styles.input_text}
                {...formik.getFieldProps("username")}
              />
              <span className="icon flex items-center px-4">
                <HiOutlineUser size={25} />
              </span>
            </div>
            {formik.errors.username && formik.touched.username ? (
              <span className="text-rose-500">{formik.errors.username}</span>
            ) : (
              <></>
            )}
            {/* NIP/NIK */}
            <div className={styles.input_group}>
              <input
                type="num"
                name="num"
                placeholder="NIP/NIK"
                className={styles.input_text}
                {...formik.getFieldProps("num")}
              />
              <span className="icon flex items-center px-4">
                <HiOutlineCreditCard size={25} />
              </span>
            </div>
            {formik.errors.num && formik.touched.num ? (
              <span className="text-rose-500">{formik.errors.num}</span>
            ) : (
              <></>
            )}
            {/* Nomor Telepon */}
            <div className={styles.input_group}>
              <input
                type="tel"
                name="tel"
                placeholder="Nomor Telepon"
                className={styles.input_text}
                {...formik.getFieldProps("tel")}
              />
              <span className="icon flex items-center px-4">
                <HiOutlinePhone size={25} />
              </span>
            </div>
            {formik.errors.tel && formik.touched.tel ? (
              <span className="text-rose-500">{formik.errors.tel}</span>
            ) : (
              <></>
            )}
            {/* Email */}
            <div className={styles.input_group}>
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
            {formik.errors.email && formik.touched.email ? (
              <span className="text-rose-500">{formik.errors.email}</span>
            ) : (
              <></>
            )}
            {/* Password */}
            <div className={styles.input_group}>
              <input
                type={`${show.password ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                className={styles.input_text}
                {...formik.getFieldProps("password")}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow({ ...show, password: !show.password })}
              >
                <HiFingerPrint size={25} />
              </span>
            </div>
            {formik.errors.password && formik.touched.password ? (
              <span className="text-rose-500">{formik.errors.password}</span>
            ) : (
              <></>
            )}
            {/* Confirm Password */}
            <div className={styles.input_group}>
              <input
                type={`${show.cpassword ? "text" : "password"}`}
                name="cpassword"
                placeholder="Ketik Ulang Password"
                className={styles.input_text}
                {...formik.getFieldProps("cpassword")}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
              >
                <HiFingerPrint size={25} />
              </span>
            </div>
            {formik.errors.cpassword && formik.touched.cpassword ? (
              <span className="text-rose-500">{formik.errors.cpassword}</span>
            ) : (
              <></>
            )}
            <div className="input-button">
              <button type="submit" className={styles.button}>
                Daftar
              </button>
            </div>
          </form>
          <div className="text-center text-gray-400 ">
            Sudah punya akun?
            <Link href="/login">
              <p className="text-blue-700"> Masuk</p>
            </Link>
          </div>
        </section>
      </LayoutAuth>
    </div>
  );
};

export default Register;
