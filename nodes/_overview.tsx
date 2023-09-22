import React from 'react'
import { Section } from '../src/components/layout/Section/Section'
import { Text } from '../src/components/typography/Text/Text'
import { Grid, GridLayout } from '../src/components/layout/Grid/Grid'
import { NodeCard, NodeType } from '../src/components/cards/NodeCard/NodeCard'
import { getNodePageData } from '../static/data/nodeData'

function recursiveRender(data) {
    if ('title' in data) {
        return (
            <Section key={data.key} title={data.title} linkLabel={false}>
                {data.description && (
                    <Text>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: data.description,
                            }}
                        />
                    </Text>
                )}
                <Grid layout={GridLayout.Fifths}>
                    {data.items.map(recursiveRender)}
                </Grid>
            </Section>
        )
    } else {
        return <NodeCard {...data} />
    }
}

export function NodeReferenceListing() {
    return <div>{getNodePageData().map(recursiveRender)}</div>
}

export function NodeColorGuide({ text }) {
    return (
        <Section title="Node colors" linkLabel={undefined}>
            <Grid layout={GridLayout.Grid_2_3}>
                <Text>{text}</Text>

                <div>
                    <Grid layout={GridLayout.Thirds}>
                        <NodeCard
                            label="Visual nodes"
                            nodeType={NodeType.Visual}
                        />
                        <NodeCard label="Data nodes" nodeType={NodeType.Data} />
                        <NodeCard
                            label="Custom code nodes"
                            nodeType={NodeType.Custom}
                        />
                        <NodeCard
                            label="Logic nodes"
                            nodeType={NodeType.Logic}
                        />
                        <NodeCard
                            label="Connection nodes"
                            nodeType={NodeType.Connection}
                        />
                    </Grid>
                </div>
            </Grid>
        </Section>
    )
}
