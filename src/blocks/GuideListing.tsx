import React from 'react'
import { getGuideListing } from '../../static/data/guides.js'
import featuredGuides from '../../static/data/featuredGuides.json'
import { Grid, GridLayout } from '../components/layout/Grid/Grid'
import { Section } from '../components/layout/Section/Section'
import { GuideCard } from '../components/cards/GuideCard/GuideCard'

interface GuideListingProps {
    title: string
    hasNoLink: boolean
    isFeaturedOnly: boolean
}

export function GuideListing({
    title,
    hasNoLink,
    isFeaturedOnly,
}: GuideListingProps) {
    if (isFeaturedOnly) {
        return (
            <Section
                title={title}
                linkHref={!hasNoLink ? 'docs/learn' : null}
                linkLabel={!hasNoLink ? 'View all' : null}
            >
                <Grid layout={GridLayout.Half} hasEqualHeightItems>
                    {featuredGuides.map((guide) => {
                        return (
                            <GuideCard
                                key={guide.title}
                                imageUrl={guide.imageUrl}
                                title={guide.title}
                                description={guide.description}
                                href={guide.href}
                            />
                        )
                    })}
                </Grid>
            </Section>
        )
    } else {
        return getGuideListing().map((category) => (
            <Section
                key={category.key}
                title={category.title}
                linkHref={null}
                linkLabel={null}
            >
                <Grid layout={GridLayout.Half} hasEqualHeightItems>
                    {category.items.map((guide) => {
                        return (
                            <GuideCard
                                key={guide.key}
                                imageUrl={guide.imageUrl}
                                title={guide.title}
                                description={guide.description}
                                href={guide.href}
                            />
                        )
                    })}
                </Grid>
            </Section>
        ))
    }
}
