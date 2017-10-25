import React from 'react';

const InputDropdown = ({
    label,
    options,
    handleInputChange,
}) => {
    return (
        <div className="fieldset">
        	<label htmlFor="">
                Example dropdown select
            </label>

        	<div className="dropdown">
        		<select
                    id="">
                    {options.map(option => (
                        <option
                            key={option.id}
                            value={option.value.toLowerCase()}>
                            {option.value}
                        </option>
                    ))}
        		</select>
        	</div>
        </div>
    );
};

export default InputDropdown;
