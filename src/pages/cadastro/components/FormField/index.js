import React from 'react';

function FormField({label, value, name, type, onChange}) {
    return(
        <div>
            <label>
                {label}:
                { type === "textarea" ? (
                    <textarea
                    type="text"
                    value={value}
                    name={name}
                    onChange={onChange}
                />
                ) : (
                    <input
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
                )} 
            </label>
        </div>
    );
}

export default FormField;
