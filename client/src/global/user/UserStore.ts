class UserStore {
  private _token: string | undefined;

  private _email: string | undefined;

  isLoggedIn() {
    return !!this._email;
  }

  logOut() {
    localStorage.removeItem('user');
    this.token = undefined;
    this.email = undefined;
  }

  set email(email: string | undefined) {
    this._email = email;
    this.updateLocalStorage({ email });
  }

  get email(): string | undefined {
    return this._email;
  }

  set token(token: string | undefined) {
    this._token = token;
    this.updateLocalStorage({ token });
  }

  get token(): string | undefined {
    return this._token;
  }

  private updateLocalStorage(data: { email?: string; token?: string }) {
    const item = JSON.parse(localStorage.getItem('user') || '{}');
    localStorage.setItem('user', JSON.stringify({ ...item, ...data }));
  }
}

export default UserStore;
