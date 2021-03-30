import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [userId, setUserId] = useState('')

    return (<GlobalContext.Provider
        value={[userId, setUserId]}
    >
        {children}
    </GlobalContext.Provider>)
};