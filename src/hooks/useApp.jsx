import { useContext } from "react";
import AppContext from "../context/ContextProvider";

const useApp = () => {
  return useContext(AppContext);
};

export default useApp;
