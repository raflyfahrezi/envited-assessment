import React from 'react'

import { sButton } from './styles'
import { ButtonProps } from './types'

const Button = ({ type, children, ...props }: ButtonProps) => {
    return (
        <button type={type} className={sButton} {...props}>
            {children}
        </button>
    )
}

export default Button
