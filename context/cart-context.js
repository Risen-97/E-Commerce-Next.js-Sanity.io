import { useReducer, useEffect, useContext, createContext } from "react";
import { cartReducer, initialState } from "./cart-reducer";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("localCart"))) {
      dispatch({
        type: "INIT_STORED",
        payload: JSON.parse(localStorage.getItem("localCart")),
      });
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("localCart", JSON.stringify(state));
    }
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
