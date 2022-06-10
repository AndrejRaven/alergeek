import React, { useState, useCallback } from 'react';

export const FavoritesContext = React.createContext({favorites: []});

export const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    const add = useCallback(favorite => setFavorites(current => [...current, favorite]), [setFavorites]);
    const remove = useCallback(favorite => setFavorites(favorites.filter(current => current.id !== favorite.id)));

    return (
        <FavoritesContext.Provider value={{favorites, add, remove}}>
            {children}
        </FavoritesContext.Provider>
)};
