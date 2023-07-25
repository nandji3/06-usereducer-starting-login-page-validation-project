import React, { forwardRef, useImperativeHandle, useRef } from "react";
import classes from './Input.module.css';

const Input = (props, ref) => {

    const inputRef = useRef();
    // console.log(inputRef.current);  //gives the whole input element directly 
    /* <input type="email" id="email" value=""></input>
       <input type="password" id="password" value=""></input>
       <--- When we enter email and password on the input field we access DOM of input field by useRef ---->
       <input type="email" id="email" value="nandji@gmail.com"></input>
       <input type="password" id="password" value="nandji3"></input>
    */
    useImperativeHandle(ref, () => {
        return {
            focus: activate
        };
    });

    const activate = () => {
        inputRef.current.focus();
    }

    return (
        <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`} >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    )
}
export default forwardRef(Input);







//<Input/> Component is child of <Login/> component.


// useEffect(() => {
//     console.log("Input useEffect run");
//     inputRef.current.focus();
// }, []);


//We could use useEffect() ---> to run some code after the component was render 1st time.
// you can pass the function inside useEffect() --> once after the every component render cycle.
// let say it only run a once when component initlially be render. hence I pass an empty array as a dependency array. so that it only run after the 1st time Input component was executed and render.