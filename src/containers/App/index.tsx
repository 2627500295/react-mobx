import React, { memo } from "react";

import { StoresContext, value } from "../../contexts/stores.context";

import Appbar from "../../components/Appbar";
import Tabbar from "../../components/Tabbar";
import GlobalSvg from "../../components/GlobalSvg";
import Item from "../../components/Item";

import styles from "./styles.module.scss";

function App() {
  return (
    <StoresContext.Provider value={value}>
      <GlobalSvg />

      <div className={styles.app}>
        <header className={styles.header}>
          <Appbar />
          <Tabbar />
        </header>

        <main role="main">
          <div className="list">
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </main>

        <footer></footer>
      </div>
    </StoresContext.Provider>
  );
}

const MemoizedAppComponent = memo(App);

export default MemoizedAppComponent;
