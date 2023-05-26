import React from 'react';

function Input( { label, id,  inputType, name, register, placeholdeer } ) {
    return (
        <label htmlFor={label}>
            <p className="label">
                <input
                    className="input"
                    id={id}
                    name={name}
                    type={inputType}
                    placeholder={placeholdeer}
                    {...register(name)}
                /></p>
        </label>
    );
}

export default Input;
