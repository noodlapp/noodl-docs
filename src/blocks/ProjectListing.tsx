import React, { useMemo } from 'react'
import { Grid, GridLayout } from '../components/layout/Grid/Grid'
import { Section } from '../components/layout/Section/Section'
import featuredProjects from '../../static/data/featuredProjects.json'
import projects from '../../static/data/projects.json'
import { ProjectCard } from '../components/cards/ProjectCard/ProjectCard'

export function ProjectListing({ title, hasNoLink, isFeaturedOnly }) {
    const renderedProjects = useMemo(
        () => (isFeaturedOnly ? featuredProjects : projects),
        [isFeaturedOnly]
    )

    return (
        <Section
            title={title}
            linkHref={hasNoLink ? null : 'library/examples/overview'}
            linkLabel={hasNoLink ? null : 'View all'}
        >
            <Grid layout={GridLayout.Thirds} hasEqualHeightItems>
                {renderedProjects.map((project) => {
                    return (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            backend={project.backend}
                            href={project.href}
                            imageUrl={project.imageUrl}
                            project={project.project}
                        />
                    )
                })}
            </Grid>
        </Section>
    )
}
