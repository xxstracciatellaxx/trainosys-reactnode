import React from 'react';
import Icon from './Icon';

const Alert = ({ title, type, message }) => {
    return (
      <div className="alert" style={{ backgroundColor: alertColor(type) }}>
        <h3>
          <Icon type={type} /> {title}
        </h3>
        {message && <p>{message}</p>}
      </div>
    );
  };

const alertColor = (type) => {
    switch (type) {
      case 'success':
        return '#cbf078';
      case 'warning':
        return '#f8f398';
      case 'error':
        return '#e46161';
      default:
        return 'gray';
    }
  };

  
export default Alert;