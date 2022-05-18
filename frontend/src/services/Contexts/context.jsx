import { createContext } from "react";

const stateContext = createContext();
export default stateContext;

// eslint-disable-next-line react/prop-types
export function StateContext({ children }) {
  return <stateContext.Provider value={{}}>{children}</stateContext.Provider>;
}
