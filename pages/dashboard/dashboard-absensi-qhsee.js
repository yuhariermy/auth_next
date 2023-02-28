import styles from "./Monitoring.module.scss";

const Monitoring = () => {
  return (
    <>
      <div className={styles.codegena}>
        <iframe
          border-radius="15px"
          src="https://lookerstudio.google.com/embed/reporting/fda52d54-3163-4f40-8c8e-d5df329e44c8/page/p_5evmy9p72c"
          title="YouTube video player || Digitalisasi Administrasi"
          frameBorder="0"
          style={{ width: "100%", height: "100vh" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Monitoring;
