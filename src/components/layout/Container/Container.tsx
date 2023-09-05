import React, { ReactNode } from 'react'
import css from './Container.module.scss'

export interface ContainerProps {
    children: ReactNode
}

export function Container({ children }: ContainerProps) {
    return <div className={css['Root']}>{children}</div>
}
