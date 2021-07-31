import React, { createContext, useReducer } from 'react';
import jwtDecode from 'jwt-decode';

let initialState = null;

if (localStorage.getItem("token")) {
    console.log('Here')
    const decodedToken = jwtDecode(localStorage.getItem("token"));

    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
    } else {
        initialState = {
            userId: decodedToken.id,
            token: localStorage.getItem("token")
        }
    }
};

export const GlobalContext = createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'LOGIN': {
            localStorage.setItem("token", action.payload.token)
            return action.payload
        }
        case 'LOGOUT': {
            localStorage.removeItem("token")
            return null
        }
        default: return state
    }
};

export const GlobalProvider = ({ children }) => {
    const [userData, dispatch] = useReducer(reducer, initialState);

    return <GlobalContext.Provider value={{ userData, dispatch }}>
        {children}
    </GlobalContext.Provider>
};