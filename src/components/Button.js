import React from 'react';

const Button = ({
    children,
    buttonType,
    handleClick,
}) => (
    <button
        type={buttonType}
        onClick={handleClick}>
        {children}
    </button>
);

export default Button;
