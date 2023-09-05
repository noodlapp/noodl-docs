import React from 'react'
import css from './YouTubeEmbed.module.scss'

export interface YouTubeEmbedProps {
    videoId: string
}

export function YouTubeEmbed({ videoId }: YouTubeEmbedProps) {
    return (
        <div className={css['Root']}>
            <iframe
                width="840"
                height="472"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}
