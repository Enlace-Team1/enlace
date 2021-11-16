import decode from 'jwt-decode';

class Auth {
  getUser() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

  login(idToken) {
    localStorage.setItem('token', idToken);

    window.location.assign('/profiles');
  }

  logout() {
    localStorage.removeItem('token');
    window.location.assign('/');
  }
}

export default new Auth();