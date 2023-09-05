import React from 'react'
import { Section } from '../components/layout/Section/Section'
import { Title, TitleSize } from '../components/typography/Title/Title'
import { Text } from '../components/typography/Text/Text'
import { Grid, GridLayout } from '../components/layout/Grid/Grid'
import {
    YouTubeEmbed,
    YouTubeEmbedProps,
} from '../components/common/YouTubeEmbed/YouTubeEmbed'
import { LinkCard, LinkCardProps } from '../components/cards/LinkCard/LinkCard'

interface IHeroBlockYoutube extends YouTubeEmbedProps {
    type: 'youtube'
}

interface IHeroBlockLink extends LinkCardProps {
    type: 'link'
}

interface HeroBlockProps {
    title: string
    text: string
    gridItems: (IHeroBlockLink | IHeroBlockYoutube)[]
}

export function HeroBlock({ title, text, gridItems }: HeroBlockProps) {
    return (
        <Section hasNoHeader>
            <Title size={TitleSize.Large} headingLevel={1}>
                {title}
            </Title>

            <Text>{text}</Text>

            <Grid layout={GridLayout.Grid_2_1_1} hasEqualHeightItems>
                {gridItems.map((item, i) => {
                    switch (item.type) {
                        case 'youtube':
                            return (
                                <YouTubeEmbed
                                    key={i + item.videoId}
                                    videoId={item.videoId}
                                />
                            )

                        case 'link':
                            return (
                                <LinkCard
                                    key={i + item.label}
                                    colorVariable={item.colorVariable}
                                    label={item.label}
                                    href={item.href}
                                    backgroundImage={item.backgroundImage}
                                    playIcon={item.playIcon}
                                />
                            )
                        default:
                            return (
                                <Text key={i}>
                                    Error: Wrong item type provided.
                                </Text>
                            )
                    }
                })}
            </Grid>
        </Section>
    )
}
