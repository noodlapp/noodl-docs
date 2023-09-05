import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import React from 'react'
import { importIntoNoodl } from '../../../utils/importIntoNoodl'
import { ArticleCard, ArticleCardLayout } from '../ArticleCard/ArticleCard'

interface ProjectCardProps {
    title: string
    description: string
    href: string
    imageUrl: string
    project: string
    backend: string
}

export function ProjectCard({
    title,
    description,
    href,
    imageUrl,
    project,
    backend,
}: ProjectCardProps) {
    const { siteConfig } = useDocusaurusContext()

    return (
        <ArticleCard
            layout={ArticleCardLayout.Vertical}
            title={title}
            description={description}
            imageUrl={imageUrl}
            primaryAction={{
                label: 'Download project',
                onClick: () =>
                    importIntoNoodl(project, {
                        name: title,
                        cf: backend,
                        thumb: imageUrl,
                    }),
            }}
            secondaryAction={{
                label: 'Read more',
                href: siteConfig.baseUrl.slice(0, -1) + href,
            }}
        />
    )
}
