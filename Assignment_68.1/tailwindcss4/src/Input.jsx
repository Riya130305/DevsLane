import React from 'react';
import { useField } from 'formik'
function Input({name,label,id,className,...rest}){
    const field= useField(name);//name --> will tell which input we want
    
    const[data,meta]=field; //Destructuring

    const{value,onBlur,onChange}=data;
    const{error, touched}=meta;

    // if(error && touched){
    //     borderClass="border-red-500";
    // }
    return (
        <div>
            <label htmlFor={id} className="sr-only">
                {label}
            </label>
            <input
                id={id}
                value={value}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                className={className}
                {...rest}
            />
            {touched && error && <div className="text-red-600">{error}</div>}
        </div>
    )
};
export default Input;