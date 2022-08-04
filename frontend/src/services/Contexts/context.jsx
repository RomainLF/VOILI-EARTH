import { createContext, useState, useEffect } from "react";
import axios from "axios";

const stateContext = createContext();
export default stateContext;

// eslint-disable-next-line react/prop-types
export function StateContext({ children }) {
  const [dataArticles, setDataArticles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5050/articles").then(({ data }) => {
      setDataArticles(data);
    });
  }, []);

  return (
    <stateContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        dataArticles,
        setDataArticles,
      }}
    >
      {children}
    </stateContext.Provider>
  );
}
