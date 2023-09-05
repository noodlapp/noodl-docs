import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { Container } from '../components/layout/Container/Container'
import { ModuleListing } from '../blocks/ModuleListing'
import { frontpageData, FrontpageBlocks } from '../../static/data/frontpage'
import { Text } from '../components/typography/Text/Text'
import { HeroBlock } from '../blocks/HeroBlock'
import { GuideListing } from '../blocks/GuideListing'
import { VideoListing } from '../blocks/VideoListing'
import { ProjectListing } from '../blocks/ProjectListing'
import { PrefabListing } from '../blocks/PrefabListing'
import SearchBar from '@theme-original/SearchBar'
import Head from '@docusaurus/Head'

export default function Home() {
    const { siteConfig } = useDocusaurusContext()

    return (
        <Layout title={`${siteConfig.title}`}>
            <Head>
                <meta
                    property="og:image"
                    content="https://docs.noodl.net/noodl-docs.png"
                />
                <meta property="og:title" content="Noodl Documentation" />
                <meta
                    property="og:description"
                    content="Explore Noodl guides, tutorials, videos, modules, and reference documentation here. Noodl is the low-code platform for designers + developers to build custom web apps and experiences."
                />
            </Head>

            <Container>
                <main>
                    {frontpageData.map((item, i) => {
                        switch (item.type) {
                            case FrontpageBlocks.SearchBar:
                                return (
                                    <div className="search-bar-outer" key={i}>
                                        <SearchBar />
                                    </div>
                                )

                            case FrontpageBlocks.Hero:
                                return (
                                    <HeroBlock
                                        key={i}
                                        title={item.title}
                                        text={item.text}
                                        gridItems={item.gridItems}
                                        playIcon={item.playIcon}
                                    />
                                )

                            case FrontpageBlocks.FeaturedModules:
                                return (
                                    <ModuleListing
                                        key={i}
                                        title="Featured modules"
                                        isFeaturedOnly
                                    />
                                )

                            case FrontpageBlocks.FeaturedGuides:
                                return (
                                    <GuideListing
                                        key={i}
                                        title="Featured guides"
                                        isFeaturedOnly
                                    />
                                )

                            case FrontpageBlocks.FeaturedProjects:
                                return (
                                    <ProjectListing
                                        key={i}
                                        title="Featured example projects"
                                    />
                                )

                            case FrontpageBlocks.FeaturedVideos:
                                return (
                                    <VideoListing
                                        key={i}
                                        title="Featured videos"
                                        isFeaturedOnly
                                    />
                                )

                            case FrontpageBlocks.FeaturedPrefabs:
                                return (
                                    <PrefabListing
                                        key={i}
                                        title="Featured prefabs"
                                        isFeaturedOnly
                                    />
                                )

                            default:
                                return (
                                    <Text key={i}>
                                        Error: Wrong type provided in frontpage
                                        data
                                    </Text>
                                )
                        }
                    })}
                </main>
            </Container>
        </Layout>
    )
}
