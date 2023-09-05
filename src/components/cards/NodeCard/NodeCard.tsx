import Link from '@docusaurus/Link'
import clsx from 'clsx'
import React from 'react'
import css from './NodeCard.module.scss'

export enum NodeType {
    Visual = 'is-visual',
    Data = 'is-data',
    Custom = 'is-custom',
    Logic = 'is-logic',
    Connection = 'is-connection',
}

export interface NodeCardProps {
    nodeType: NodeType
    label: string
    docUrl?: string
}

export function NodeCard({ nodeType, label, docUrl }: NodeCardProps) {
    const Tag = docUrl ? Link : 'div'

    return (
        <Tag
            className={clsx(
                css['Root'],
                css[nodeType],
                Boolean(docUrl) && css['has-hoverstate']
            )}
            to={docUrl}
        >
            {label}
        </Tag>
    )
}
