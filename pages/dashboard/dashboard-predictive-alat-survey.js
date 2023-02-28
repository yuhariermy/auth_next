import styles from "./Monitoring.module.scss";

const Monitoring = () => {
  return (
    <>
      <div className={styles.codegena}>
        <iframe
          border-radius="15px"
          src="https://lookerstudio.google.com/embed/reporting/0df48559-102c-4171-8ec3-6c3b7e1255e8/page/PDYCD"
          title="aYouTube video player || Digitalisasi Administrasi"
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
