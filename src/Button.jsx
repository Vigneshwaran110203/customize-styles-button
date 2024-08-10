import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Import the CSS file for styles

const Button = ({
  label,
  onClick,
  color = '#007BFF',
  borderRadius = 'normal', // 'normal' or 'rounded'
  transition = true,
  icon = null, // Icon component or image
  iconPosition = 'left', // 'left' or 'right'
  type = 'button',
  style = {}
}) => {
  const buttonStyle = {
    backgroundColor: color,
    borderRadius: borderRadius === 'rounded' ? '50px' : '4px',
    transition: transition ? 'all 0.3s ease' : 'none',
    ...style,
  };

  return (
    <button onClick={onClick} style={buttonStyle} type={type} className="custom-button">
      {icon && iconPosition === 'left' && <span className="icon left-icon">{icon}</span>}
      <span className="label">{label}</span>
      {icon && iconPosition === 'right' && <span className="icon right-icon">{icon}</span>}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
  borderRadius: PropTypes.oneOf(['normal', 'rounded']),
  transition: PropTypes.bool,
  icon: PropTypes.node, // React node for the icon
  iconPosition: PropTypes.oneOf(['left', 'right']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  style: PropTypes.object,
};

export default Button;
