import React from 'react';

const InputText = () => (
    <div className="fieldset">
    	<label for="standardField">
            Standard field
            <span className="optional">(optional)</span>
        </label>
    	<input id="standardField" placeholder="" type="text" />
    </div>
);

export default InputText;
