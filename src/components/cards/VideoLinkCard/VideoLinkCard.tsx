import React from 'react'
import css from './VideoLinkCard.module.scss'
import PlayIcon from '../../../../static/img/icons/play-white.svg'

export interface VideoLinkCardProps {
    videoId: string
    title: string
    description: string
    videoLength: string
}

export function VideoLinkCard({
    videoId,
    title,
    description,
    videoLength,
}: VideoLinkCardProps) {
    return (
        <article className={css['Root']}>
            <div
                className={css['Thumb']}
                style={{
                    backgroundImage: `url(http://img.youtube.com/vi/${videoId}/0.jpg)`,
                }}
            />
            <div className={css['Details']}>
                <div>
                    <h1 className={css['Title']}>{title}</h1>
                    <p className={css['Description']}>{description}</p>
                </div>
                <p className={css['VideoLength']}>
                    <PlayIcon />
                    <span>{videoLength}</span>
                </p>
            </div>

            <a
                className={css['Link']}
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                Watch video
            </a>
        </article>
    )
}
