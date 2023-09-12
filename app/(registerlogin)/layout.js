import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const layout = ({ children }) => {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.text1}>QRide</div>
            <Image src={"/qr_image.svg"} width={200} height={200} alt="" className={styles.qr} />
            <div className={styles.columnfill}></div>
          </div>
          <div className={styles.column1}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default layout;
