import { useState } from "react";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";

import Layout from "../layout/layout";

import styles from "../styles/Form.module.css";

const Register = () => {
  const [show, setShow] = useState({ password: false, cpassword: false });
  return (
    <div>
      <Layout pageTitle="Register">
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

          <form className="flex flex-col gap-5">
            {/* Nama Lengkap */}
            <div className={styles.input_group}>
              <input
                type="text"
                name="Username"
                placeholder="Nama Lengkap"
                className={styles.input_text}
              />
              <span className="icon flex items-center px-4">
                <HiOutlineUser size={25} />
              </span>
            </div>
            {/* NIP/NIK */}
            <div className={styles.input_group}>
              <input
                type="num"
                name="num"
                placeholder="NIP/NIK"
                className={styles.input_text}
              />
              <span className="icon flex items-center px-4">
                <HiOutlineUser size={25} />
              </span>
            </div>
            {/* Nomor Telepon */}
            <div className={styles.input_group}>
              <input
                type="tel"
                name="tel"
                placeholder="Nomor Telepon"
                className={styles.input_text}
              />
              <span className="icon flex items-center px-4">
                <HiOutlineUser size={25} />
              </span>
            </div>
            {/* Email */}
            <div className={styles.input_group}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.input_text}
              />
              <span className="icon flex items-center px-4">
                <HiAtSymbol size={25} />
              </span>
            </div>
            {/* Password */}
            <div className={styles.input_group}>
              <input
                type={`${show.password ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                className={styles.input_text}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow({ ...show, password: !show.password })}
              >
                <HiFingerPrint size={25} />
              </span>
            </div>
            {/* Confirm Password */}
            <div className={styles.input_group}>
              <input
                type={`${show.cpassword ? "text" : "password"}`}
                name="cpassword"
                placeholder="Confirm Password"
                className={styles.input_text}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
              >
                <HiFingerPrint size={25} />
              </span>
            </div>
            <div className="input-button">
              <button type="submit" className={styles.button}>
                Register
              </button>
            </div>
          </form>
        </section>
      </Layout>
    </div>
  );
};

export default Register;
