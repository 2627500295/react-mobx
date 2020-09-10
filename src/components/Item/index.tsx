import React, { memo } from "react";

import styles from "./styles.module.scss";

function Item() {
  return (
    <div className={styles.item}>
      <div className={styles.avatar}></div>

      <div className={styles.content}>
        <div className={styles.title}>styles.title</div>
        <div className={styles.description}>styles.description</div>
      </div>
    </div>
  );
}

const MemoizedItemComponent = memo(Item);

export default MemoizedItemComponent;
