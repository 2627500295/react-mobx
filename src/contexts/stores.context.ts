import { createContext } from "react";
import { MenuStore } from "../stores/menu.store";

export const value = {
  menu: new MenuStore()
};

export const StoresContext = createContext(value);
