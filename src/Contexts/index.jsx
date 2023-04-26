import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProducts] = useState("");
  return (
    <ProductContext.Provider value={{ product, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "" });
  const [token, setToken] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser, setToken, token }}>
      {children}
    </UserContext.Provider>
  );
};

export const TemaContext = createContext();

export const TemaProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  return (
    <TemaContext.Provider value={{ mode, setMode }}>
      {children}
    </TemaContext.Provider>
  );
};
