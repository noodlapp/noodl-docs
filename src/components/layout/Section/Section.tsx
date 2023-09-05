import Link from '@docusaurus/Link'
import React, { ReactNode } from 'react'
import { Title, TitleProps, TitleSize } from '../../typography/Title/Title'
import css from './Section.module.scss'

export interface SectionProps {
    title?: TitleProps['children']
    titleSize?: TitleProps['size']
    linkLabel?: string | false
    linkHref?: string
    children: ReactNode

    hasNoHeader?: boolean
}

export function Section({
    title,
    titleSize,
    linkLabel = 'View all',
    linkHref,
    children,

    hasNoHeader,
}: SectionProps) {
    return (
        <section className={css['Root']}>
            {!hasNoHeader && (
                <div className={css['Header']}>
                    <Title size={titleSize}>{title}</Title>

                    {Boolean(linkLabel) && (
                        <Link className={css['Link']} href={linkHref}>
                            {linkLabel}
                        </Link>
                    )}
                </div>
            )}

            <div className={css['Content']}>{children}</div>
        </section>
    )
}
