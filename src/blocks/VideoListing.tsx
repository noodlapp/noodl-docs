import React from 'react'
import { VideoLinkCard } from '../components/cards/VideoLinkCard/VideoLinkCard'
import { Grid, GridLayout } from '../components/layout/Grid/Grid'
import { Section } from '../components/layout/Section/Section'
import videos from '../../static/data/youtubeVideos.json'
import featuredVideoIds from '../../static/data/featuredVideos.json'

const featuredVideos = featuredVideoIds.map((id) =>
    videos.find((video) => video.videoId === id)
)

interface VideoListingProps {
    title: string
    hasNoLink?: boolean
    isFeaturedOnly: boolean
}

export function VideoListing({
    title,
    hasNoLink,
    isFeaturedOnly,
}: VideoListingProps) {
    const renderedVideos = isFeaturedOnly ? featuredVideos : videos
    return (
        <Section
            title={title}
            linkHref={
                hasNoLink
                    ? null
                    : 'https://www.youtube.com/channel/UCLkJ8XYV1J1RqrZKY-o1YWg'
            }
            linkLabel={hasNoLink ? false : 'View all'}
        >
            <Grid layout={GridLayout.Half} hasEqualHeightItems>
                {renderedVideos.map((video) => {
                    return (
                        <VideoLinkCard
                            key={video.videoId}
                            title={video.title}
                            description={video.description}
                            videoLength={video.videoLength}
                            videoId={video.videoId}
                        />
                    )
                })}
            </Grid>
        </Section>
    )
}
