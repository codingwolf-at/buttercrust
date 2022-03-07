import { createContext, useContext, useReducer } from "react";
import { useEffect } from 'react';
import axios from 'axios';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  
  const storeReducer = (state, action) => {
    switch(action.type) {
      case "INITIALIZE_MENU":
        return {
          ...state,
          menu: action.payload
        };
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [
            ...state.cart, action.payload
          ]
        };
      default:
        return state;
    }
  }
  
  const [state, dispatch] = useReducer(storeReducer, { menu: [], cart: [] });

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68");
      dispatch({ type: "INITIALIZE_MENU", payload: data });
    })();
  }, []);

  return (
    <StoreContext.Provider value={{ menu: state.menu, cart: state.cart, dispatch }} >
      { children }
    </StoreContext.Provider>
  )
};

export const useStore = () => useContext(StoreContext);