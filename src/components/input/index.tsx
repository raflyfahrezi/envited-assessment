import React from 'react'

import { sInput } from './styles'
import { InputProps } from './types'

const Input = ({ type, name, value, ...props }: InputProps) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            className={sInput}
            {...props}
        />
    )
}

export default Input
