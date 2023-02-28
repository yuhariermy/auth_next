import styles from "./Monitoring.module.scss";

const Monitoring = () => {
  return (
    <>
      <div className={styles.codegena}>
        <iframe
          border-radius="15px"
          src="https://lookerstudio.google.com/embed/reporting/79059dd4-553b-4cbc-9c62-46bdf9d70595/page/8X9BD"
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
