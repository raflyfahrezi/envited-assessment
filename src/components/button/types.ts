import { ReactNode, HTMLAttributes } from 'react'

export type ButtonProps = {
    children: ReactNode
} & HTMLAttributes<HTMLButtonElement>
