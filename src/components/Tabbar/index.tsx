import React, { memo, useContext } from "react";
import { observer } from "mobx-react";
import classNames from "classnames";

import styles from "./styles.module.scss";
import { StoresContext } from "../../contexts/stores.context";

const menulst = [
  {
    title: "Air",
    icon: "air"
  },
  {
    title: "App",
    icon: "apps"
  },
  {
    title: "Layout",
    icon: "layout"
  }
];

function Tabbar() {
  const { menu } = useContext(StoresContext);

  return (
    <div className={styles.tabbar}>
      {menulst.map(({ title, icon }, index) => (
        <button
          key={title}
          onClick={() => menu.switch(index)}
          className={classNames(styles.item, {
            [styles.active]: index === menu.selected
          })}
        >
          <svg className={styles.icon}>
            <use xlinkHref={`#${icon}`} />
          </svg>
        </button>
      ))}
    </div>
  );
}

const ObserverTabbarComponent = observer(Tabbar);

const MemoizedTabbarComponent = memo(ObserverTabbarComponent);

export default MemoizedTabbarComponent;
