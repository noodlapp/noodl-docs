import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useIsBrowser from '@docusaurus/useIsBrowser'
import clsx from 'clsx'
import React, { useMemo } from 'react'
import { TextSize, Text } from '../../typography/Text/Text'
import { Title, TitleSize } from '../../typography/Title/Title'
import css from './ArticleCard.module.scss'

export enum ArticleCardLayout {
    Horisontal = 'is-horisontal',
    Vertical = 'is-vertical',
}

interface IActionSlot {
    label: string
    onClick?: () => void
    href?: string
}

export interface ArticleCardProps {
    layout?: ArticleCardLayout
    title: string
    description: string
    hasNoPaddingInThumb?: boolean
    primaryAction: IActionSlot
    secondaryAction?: IActionSlot
    imageUrl?: string
}

export function ArticleCard({
    layout = ArticleCardLayout.Vertical,
    title,
    description,
    hasNoPaddingInThumb,
    primaryAction,
    secondaryAction,
    imageUrl,
}: ArticleCardProps) {
    const { siteConfig } = useDocusaurusContext()

    const isBrowser = useIsBrowser()

    const thumbUrl = useMemo(() => {
        return !isBrowser
            ? null
            : location.protocol +
                  '//' +
                  location.host +
                  siteConfig.baseUrl.slice(0, -1) +
                  (imageUrl[0]==='/'?imageUrl:('/'+imageUrl))
    }, [isBrowser])

    return (
        <article className={clsx(css['Root'], css[layout])}>
            <div className={css['ImageContainer']}>
                {thumbUrl && (
                    <div
                        className={clsx(
                            css['Image'],
                            hasNoPaddingInThumb && css['has-no-padding']
                        )}
                        style={{ backgroundImage: `url(${thumbUrl})` }}
                    />
                )}
            </div>

            <div className={css['Content']}>
                <div>
                    <header>
                        <Title size={TitleSize.Smaller} headingLevel={1}>
                            {title}
                        </Title>
                    </header>
                    <Text size={TextSize.Small}>{description}</Text>
                </div>

                <footer className={css['Footer']}>
                    {Boolean(primaryAction) && (
                        <a
                            className={css['PrimaryAction']}
                            href={primaryAction.href}
                            onClick={primaryAction.onClick}
                        >
                            <Text size={TextSize.Small} isSpan>
                                {primaryAction.label}
                            </Text>
                        </a>
                    )}

                    {Boolean(secondaryAction) && (
                        <a
                            className={css['SecondaryAction']}
                            href={secondaryAction.href}
                            onClick={secondaryAction.onClick}
                        >
                            <Text size={TextSize.Small} isSpan>
                                {secondaryAction.label}
                            </Text>
                        </a>
                    )}
                </footer>
            </div>
        </article>
    )
}
