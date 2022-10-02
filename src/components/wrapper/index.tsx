import React from 'react'

import { sWrapper } from './styles'
import { WrapperProps } from './types'

const Wrapper = ({ children }: WrapperProps) => {
    return <div className={sWrapper}>{children}</div>
}

export default Wrapper
