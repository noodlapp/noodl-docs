import Link from '@docusaurus/Link'
import React, { useMemo } from 'react'
import css from './LinkCard.module.scss'
import PlayIcon from '../../../../static/img/icons/play-black.svg'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useIsBrowser from '@docusaurus/useIsBrowser'

export interface LinkCardProps {
    href: string
    colorVariable: string
    backgroundImage: string
    label: string
    playIcon?: boolean
}

export function LinkCard({
    href,
    colorVariable,
    backgroundImage,
    label,
    playIcon
}: LinkCardProps) {
    const { siteConfig } = useDocusaurusContext()
    const isBrowser = useIsBrowser()

    const bgUrl = useMemo(() => {
        return isBrowser && backgroundImage
            ? location.protocol +
                  '//' +
                  location.host +
                  siteConfig.baseUrl.slice(0, -1) +
                  backgroundImage
            : null
    }, [isBrowser])

    return (
        <Link
            className={css['Root']}
            style={{
                backgroundColor: `var(${colorVariable})`,
                backgroundImage: bgUrl ? `url(${bgUrl})` : null,
            }}
            to={href}
        >
            <span className={css['Label']}>{label}</span>

            {(playIcon===undefined || playIcon === true) && (<div className={css['IconContainer']}>
                <PlayIcon />
            </div>)}
        </Link>
    )
}
