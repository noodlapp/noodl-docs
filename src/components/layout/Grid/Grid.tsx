import clsx from 'clsx'
import React, { ReactNode, useMemo } from 'react'
import css from './Grid.module.scss'

export enum GridLayout {
    Half = 'is-grid-half',
    Thirds = 'is-grid-thirds',
    Fifths = 'is-grid-fifths',
    Grid_2_1_1 = 'is-grid-2-1-1',
    Grid_2_3 = 'is-grid-2-3',
}

export interface GridProps {
    layout: GridLayout
    children: ReactNode
    hasEqualHeightItems?: boolean
}

export function Grid({ layout, children, hasEqualHeightItems }: GridProps) {
    const childArray = useMemo(
        () => (Array.isArray(children) ? children : [children]),
        [children]
    )

    return (
        <div
            className={clsx(
                css['Root'],
                css[layout],
                hasEqualHeightItems && css['has-equal-height-items']
            )}
        >
            {/*  using i is not the best, but not all items will have ids.
            if items orders or rendering get all weird or buggy this is the cause */}
            {childArray.map((child, i) => {
                if (child === null) return null

                return (
                    <div key={i} className={css['GridItem']}>
                        {child}
                    </div>
                )
            })}
        </div>
    )
}
