import { useContext } from "react";
import { AppContext } from "./appContext";

const useAppContext = () => {
  const app = useContext(AppContext);

  if (app === null) {
    throw new Error("Something went wrong! - AppContext");
  }

  return app;
};

export default useAppContext;
