import React from 'react'

import { sButton } from './styles'
import { ButtonProps } from './types'

const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button className={sButton} {...props}>
            {children}
        </button>
    )
}

export default Button
