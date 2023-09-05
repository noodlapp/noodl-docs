import clsx from 'clsx'
import React, { CSSProperties, ReactNode } from 'react'
import css from './Text.module.scss'

export enum TextSize {
    Default = 'default',
    Small = 'small',
}

export interface TextProps {
    children?: ReactNode
    className?: string
    size?: TextSize
    style?: CSSProperties

    hasBottomSpacing?: boolean
    isSpan?: boolean
    isCentered?: boolean
}

export function Text({
    children,
    size = TextSize.Default,
    style,
    className,
    hasBottomSpacing = true,
    isSpan,
    isCentered,
}: TextProps) {
    const Tag = isSpan ? 'span' : 'p'

    return (
        <Tag
            className={clsx(
                css['Root'],
                css[`is-size-${size}`],
                isSpan && css['is-inline'],
                isCentered && css['is-centered'],
                hasBottomSpacing && css['has-bottom-spacing'],
                className
            )}
            style={style}
        >
            {children}
        </Tag>
    )
}
