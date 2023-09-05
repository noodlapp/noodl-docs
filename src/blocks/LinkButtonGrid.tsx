import React from 'react'
import {
    ButtonCard,
    ButtonCardProps,
} from '../components/cards/ButtonCard/ButtonCard'
import { Grid, GridLayout } from '../components/layout/Grid/Grid'
import { Section } from '../components/layout/Section/Section'

interface LinkButtonGridProps {
    title?: string
    links: ButtonCardProps[]
}

export function LinkButtonGrid({ title, links }: LinkButtonGridProps) {
    return (
        <Section title={title} linkLabel={null}>
            <Grid layout={GridLayout.Thirds} hasEqualHeightItems>
                {links.map((link) => (
                    <ButtonCard
                        key={link.href}
                        title={link.title}
                        href={link.href}
                        onClick={link.onClick}
                    />
                ))}
            </Grid>
        </Section>
    )
}
