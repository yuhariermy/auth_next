import styles from "./Monitoring.module.scss";

const Monitoring = () => {
  return (
    <>
      <div className={styles.codegena}>
        <iframe
          border-radius="15px"
          src="https://lookerstudio.google.com/embed/reporting/1ce54f97-67c4-4ea9-8694-4f8d4af328b3/page/p_fh9z766n3c"
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
