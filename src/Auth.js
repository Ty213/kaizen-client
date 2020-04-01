const Auth = {
  isAuthenticated() {
    const jwt = localStorage.getItem('jwt')
    if(jwt) {
      return true
    }
    return false
  },
  logout() {
    localStorage.removeItem('jwt')
  }
};

export default Auth;
