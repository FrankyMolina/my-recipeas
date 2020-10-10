import React, { useState } from 'react';

import './Login.scss';

const emptyLoginState = { email: '', password: '' };

export default function Login() {
  const [loginState, setLoginState] = useState(emptyLoginState);

  const { email, password } = loginState;

  function handleInputChange(ev) {
    const inputName = ev.target.name;
    const value = ev.target.value;

    setLoginState({
      ...loginState,
      [inputName]: value,
    });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    setLoginState(emptyLoginState);
  }

  return (
    <div className="login__container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange}
          />
        </label>

        <input type="submit" />
      </form>
    </div>
  );
}
