import React from 'react';

export const SignUp = () => {
  
  const onSubmit = e => {
    e.preventDefault();
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
            data-testid="input-email"
            placeholder="me@example.com" />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            data-testid="input-password"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" />
        </div>
        <div className="field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            data-testid="input-confirmPassword"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          />
        </div>
        <div className="field">
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </div>
  )
}
