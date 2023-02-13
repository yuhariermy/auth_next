import Head from "next/head";
import styles from "./Layout.module.css";

const LayoutAuth = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>WORKSTATION | {pageTitle}</title>
      </Head>
      <div className="flex h-screen bg-gray-700">
        <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
          <div className={styles.imgStyle}>
            <video autoPlay loop muted>
              <source src="/assets/Media1.mp4" type="video/mp4" />
            </video>
            {/* <div className={styles.cartoonImg}></div> */}
            {/* <iframe
              src="https://assets.pinterest.com/ext/embed.html?id=745979125795245404"
              height="100%"
              width="100%"
              frameborder="0"
              scrolling="no"
              autoPlay
            ></iframe> */}
            {/* <div className={styles.cloud_one}></div>
            <div className={styles.cloud_two}></div> */}
          </div>
          <div className="right flex flex-col justify-evenly">
            <div className="text-center py-10">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutAuth;
