import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
  user: null,
  favorites: [],
};

// Actions
const SET_USER = 'SET_USER';
const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(item => item.title !== action.payload),
      };
    default:
      return state;
  }
};

// Create context
const GlobalContext = createContext();

// Custom hook for using context
export const useGlobalState = () => {
  return useContext(GlobalContext);
};

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setUser = (user) => {
    dispatch({ type: SET_USER, payload: user });
  };

  const addFavorite = (item) => {
    dispatch({ type: ADD_FAVORITE, payload: item });
  };

  const removeFavorite = (title) => {
    dispatch({ type: REMOVE_FAVORITE, payload: title });
  };

  return (
    <GlobalContext.Provider value={{ state, setUser, addFavorite, removeFavorite }}>
      {children}
    </GlobalContext.Provider>
  );
};
