import React from 'react';
import PropTypes from 'prop-types';

const BackendErrorMessages = ({ backendErrors }) => {
  const errorMessages = Object.keys(backendErrors).map(name => {
    const messages = backendErrors[name].join(' ');
    return `${name} ${messages}`;
  });
  return (
    <ul className="error-messages">
      {errorMessages.map(errorMessage => (
        <li key={errorMessage}>{errorMessage}</li>
      ))}
    </ul>
  );
};

BackendErrorMessages.defaultProps = {
  backendErrors: PropTypes.shape({
    email: [],
    password: [],
    username: [],
  }),
};

BackendErrorMessages.propTypes = {
  backendErrors: PropTypes.shape({
    email: PropTypes.arrayOf(PropTypes.string.isRequired),
    password: PropTypes.arrayOf(PropTypes.string.isRequired),
    username: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
};

export default BackendErrorMessages;
