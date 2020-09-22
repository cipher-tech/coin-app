import React from "react"

export const ContextData = React.createContext({
    country: null,
    changeRegion: (name) => {},
    IsRegionSelected: false,
    auth: {
        toggleLoginSignUp: (name) => {} ,
        showLogin: false,
        showSignUp: false,
    },
})