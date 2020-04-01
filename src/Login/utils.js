const jwt = require('jsonwebtoken')

const secret = 'mysupersecretsharedsecret'

async function handleLogin(email,password) {
  // create a jwt here and save to local storage
  // this will eventually come from backend...
  const token = jwt.sign({ name: 'Ty Thompson', email: 'tylermoko@gmail.com' }, secret)
  localStorage.setItem('jwt', token)
  return true
}

const validateEmail = (e) => {
  return e.target.validity.valid
}

const validatePassword = (e) => {
  if(e.target.value && e.target.value.length) {
    return true
  }
  return false
}

module.exports = {
  handleLogin,
  validateEmail,
  validatePassword
}