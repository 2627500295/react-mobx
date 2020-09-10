import React, { memo } from "react";

import styles from "./styles.module.scss";

function Appbar() {
  return (
    <div className={styles.appbar}>
      <div className={styles.left}></div>
      <div className={styles.title}>Airport</div>
      <div className={styles.right}></div>
    </div>
  );
}

const MemoizedAppbarComponent = memo(Appbar);

export default MemoizedAppbarComponent;
