import { ReactNode, HTMLAttributes } from 'react'

export type ButtonType = 'button' | 'submit' | 'reset'

export type ButtonProps = {
    type?: ButtonType
    children: ReactNode
} & HTMLAttributes<HTMLButtonElement>
