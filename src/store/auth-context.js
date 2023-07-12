import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
});


export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);


    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }

    return <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}> {props.children}</AuthContext.Provider >
}


export default AuthContext;














//isLoggedIn ---value(true/false) is updated by react useState hook when isLoggedIn change above and that new context object will be pass down to all listening component

// on react going to call createContext which take 'my-state' as argument and AuthContext itself is not a component, it is an object that would contain a component
//Context is nothing but a global varaible, one which can be access through any component.
//onLogout --> put bydefault just a dummy function for autoComplication pop