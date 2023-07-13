import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';
import classes from './Login.module.css';


const emailReducer = (state, action) => {
  //action = { type: 'USER_INPUT', val: event.target.value }
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
  //return newState which is an object
};

const passwordReducer = (state, action) => {
  //action = { type: 'USER_INPUT', val: event.target.value }
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
  //return newState which is an object
};


let initialState = { value: '', isValid: null };

const Login = () => {

  const [emailState, dispatchEmail] = useReducer(emailReducer, initialState);
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, initialState);
  const [formIsValid, setFormIsValid] = useState(false);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);


  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>

        <Input id="email" label="E-Mail" type="email" isValid={emailIsValid} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler} />

        <Input id="password" label="Password" type="password" isValid={passwordIsValid} value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}> Login </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;



/*
  console.log(emailState)
  console.log(passwordState)

  let emailState = {value: 'nj@gmail.com', isValid: true}
  let {isValid: emailIsValid} = emailState;
  console.log(emailIsValid) ////true

  let passwordState = {value: 'nvdjanvbvkdv', isValid: true};
  let {isValid: passwordIsValid} = emailState;
  console.log(passwordIsValid); //true
*/


/*
useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailState, passwordState]);
*/
