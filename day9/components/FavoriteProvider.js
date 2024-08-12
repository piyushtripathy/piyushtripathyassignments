import React, { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext();

export const useFavorite = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
  };

  const removeFavorite = (title) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((product) => product.title !== title)
    );
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
