import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import React from 'react'
import { ArticleCard, ArticleCardLayout } from '../ArticleCard/ArticleCard'

interface GuideCardProps {
    title: string
    description: string
    href: string
    imageUrl?: string
}

export function GuideCard({
    title,
    description,
    href,
    imageUrl,
}: GuideCardProps) {
    const { siteConfig } = useDocusaurusContext()

    return (
        <ArticleCard
            layout={ArticleCardLayout.Horisontal}
            primaryAction={{
                label: 'Read guide',
                href: siteConfig.baseUrl.slice(0, -1) + href,
            }}
            title={title}
            description={description}
            imageUrl={imageUrl}
        />
    )
}
