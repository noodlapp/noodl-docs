import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useIsBrowser from '@docusaurus/useIsBrowser'
import React from 'react'
import { useMemo } from 'react'
import {
    importIntoNoodl,
    ImportIntoNoodlArgs,
} from '../../../utils/importIntoNoodl'
import { ArticleCard, ArticleCardLayout } from '../ArticleCard/ArticleCard'

interface ModuleCardProps {
    thumbUrl: string
    title: string
    description: string
    readMoreUrl: string
    importArgs: ImportIntoNoodlArgs
}

export function ModuleCard({
    thumbUrl,
    title,
    description,
    readMoreUrl,
    importArgs,
}: ModuleCardProps) {
    const { siteConfig } = useDocusaurusContext()

    return (
        <ArticleCard
            title={title}
            description={description}
            hasNoPaddingInThumb
            imageUrl={thumbUrl}
            layout={ArticleCardLayout.Vertical}
            primaryAction={{
                label: 'Read more',
                href: siteConfig.baseUrl.slice(0, -1) + readMoreUrl,
            }}
        />
    )
}
