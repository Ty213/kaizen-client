import React, { useState } from 'react';
import { handleLogin, validateEmail, validatePassword } from'./utils'

const inputType = {
  value: "",
  isValid: false
}

const Login = props => {
  const [email, setEmail] = useState(inputType)
  const [password, setPassword] = useState(inputType)
  const formIsValid = () => email.isValid && password.isValid ? true : false

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loggedIn = handleLogin(email,password)
    
    if(loggedIn) {
      props.history.push("/profile");
    }else {
      console.log('error logging in....')
    }
  }

  const handleEmailChange = (e) => {
    const isValid = validateEmail(e)
    setEmail({
      value: e.target.value,
      isValid: isValid
    })
  }

  const handlePasswordChange = (e) => {
    const isValid = validatePassword(e)
    setPassword({
      value: e.target.value,
      isValid: isValid
    })
  }

  return (
    <div>
      <p>Login Here</p>
      <input
        name="email"
        type="email"
        value={email.value}
        placeholder="Email"
        onChange={handleEmailChange}
      />
      <input
        type="password"
        value={password.value}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <input
        disabled={!formIsValid()}
        type="submit"
        value="Login"
        onClick={handleSubmit}
      />
    </div>
  );
}

export default Login;