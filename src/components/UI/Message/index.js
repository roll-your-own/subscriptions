import React from 'react';

export const Message = ({ type, message, children }) => {
  return (
    <div className={`message message-${type}`}>
      <p>{message}</p>
      {children}
    </div>
  )
}
