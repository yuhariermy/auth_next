import styles from "./Monitoring.module.scss";

const Monitoring = () => {
  return (
    <>
      <div className={styles.codegena}>
        <iframe
          border-radius="15px"
          src="https://lookerstudio.google.com/embed/reporting/796a3547-f79e-4290-b083-a61377db8d50/page/pId9C"
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
