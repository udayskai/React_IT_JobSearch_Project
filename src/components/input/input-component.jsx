import React, { Fragment } from 'react'



export default function Input(props) {

    let { label, onChange, value, className, ...restProps } = props;
    // console.log(value, "input component")

    return (
        <Fragment>
            <label htmlFor="" className="label">
                {label}
                <input
                    className={`ownCss ${className}`}
                    value={value}
                    onChange={onChange}
                    {...restProps}
                />
            </label>
        </Fragment>
    )
}



// <input
// type={pType}
// className={`ownCss ${propsClass}`}

// value={pValue}
// onChange={pMethod}

// placeholder={pPlaceholder}
// name={pName}
// />