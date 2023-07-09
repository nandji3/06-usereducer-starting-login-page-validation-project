import React from "react";

const AuthContext = React.createContext()

// on react going to call createContext which take 'my-state' as argument and AuthContext itself is not a component, it is an object that would contain a component 
//Context is nothing but a global varaible, one which can be access through any component.

export default AuthContext;