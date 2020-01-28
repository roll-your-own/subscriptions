import React, { useState } from 'react';

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const onSubmit = e => {
    e.preventDefault();
    console.log("submit");
  }
  
  return (
    <div className="signup form-card" data-testid="route-signup">
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="me@example.com"
            onChange={(e) => setEmail(e.currentTarget.value)}/>
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            onChange={(e) => setPassword(e.currentTarget.value)}/>
        </div>
        <div className="field">
          <label htmlFor="confirmPassword">ConfirmPassword</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            onChange={(e) => setConfirmPassword(e.currentTarget.value)}/>
        </div>
        <div className="field">
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </div>
  )
}
