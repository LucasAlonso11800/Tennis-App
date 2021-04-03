import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [userId, setUserId] = useState('')
    const [username, setUsername] = useState('')

    return (<GlobalContext.Provider
        value={[userId, setUserId, username, setUsername]}
    >
        {children}
    </GlobalContext.Provider>)
};