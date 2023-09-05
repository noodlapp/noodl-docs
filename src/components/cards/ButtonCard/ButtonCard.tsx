import Link from '@docusaurus/Link'
import React from 'react'
import css from './ButtonCard.module.scss'

export interface ButtonCardProps {
    title: string
    href?: string
    onClick?: () => void
}

export function ButtonCard({ title, href, onClick }: ButtonCardProps) {
    const Tag = href ? Link : 'button'

    return (
        <Tag className={css['Root']} to={href} onClick={onClick}>
            {title}
        </Tag>
    )
}
