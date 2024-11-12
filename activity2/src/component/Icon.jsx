import React from 'react';

const Icon = ({ type }) => {
  switch (type) {
    case 'success':
      return <span>✅</span>;
    case 'warning':
      return <span>⚠️</span>;
    case 'error':
      return <span>❌</span>;
    default:
      return <span>ℹ️</span>;
  }
};

export default Icon;