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
      case "INCR_QTY":
        return {
          ...state,
          cart: state.cart.map(pizza => {
            if (pizza.id === action.payload) {
              return {
                ...pizza,
                quantity: pizza.quantity + 1
              }
            } else {
              return pizza
            }
          })
        };
      case "DECR_QTY":
        return {
          ...state,
          cart: state.cart.map(pizza => {
            if (pizza.id === action.payload) {
              if (pizza.quantity === 1) {
                return pizza;
              } else {
                return {
                  ...pizza,
                  quantity: pizza.quantity - 1
                }
              }
            } else {
              return pizza;
            }
          })
        }
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