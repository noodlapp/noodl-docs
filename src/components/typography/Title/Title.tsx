import clsx from 'clsx'
import React, { ReactNode } from 'react'
import css from './Title.module.scss'

export enum TitleSize {
    Default = 'default',
    Large = 'large',
    Small = 'small',
    Smaller = 'smaller',
}

export interface TitleProps {
    children?: ReactNode
    size?: TitleSize
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6

    hasBottomSpacing?: boolean
    isCentered?: boolean
}

export function Title({
    children,
    size = TitleSize.Default,
    headingLevel = 2,
    hasBottomSpacing = true,
    isCentered,
}: TitleProps) {
    // hahahaha wtf
    const Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = `h${headingLevel}`

    return (
        <Tag
            className={clsx(
                css['Root'],
                css[`is-size-${size}`],
                isCentered && css['is-centered'],
                hasBottomSpacing && css['has-bottom-spacing']
            )}
        >
            {children}
        </Tag>
    )
}
