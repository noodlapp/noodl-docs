export const FrontpageBlocks = {
    SearchBar: 'searchbar',
    Hero: 'hero', // ONLY ONE HERO BLOCK TO MAINTAIN GOOD SEO PLEASE!
    FeaturedModules: 'featuredmodules',
    FeaturedGuides: 'featuredguides',
    FeaturedProjects: 'featuredprojects',
    FeaturedVideos: 'featuredvideos',
    FeaturedPrefabs: 'featuredprefabs',
}

export const frontpageData = [
    { type: FrontpageBlocks.SearchBar },
    {
        type: FrontpageBlocks.Hero,
        title: 'Get started with Noodl',
        text: "Noodl is a low code web app builder that will have you creating applications faster and smarter. It's a visual development environment that you don't need any previous coding skills to start learning. It's also great for developers who already know how to code as you can easily mix in JavaScript when appropriate, and Noodl is great for designers too, as it gives full control over the look and feel of your App. In Noodl everything is live and you edit you app while its live. This site contains all you need to get started!",
        gridItems: [
            {
                type: 'youtube',
                videoId: 'kD-Oz_M-IS4',
            },
            {
                type: 'link',
                colorVariable: '--doc-color-noodl-orange-20',
                backgroundImage:
                    '/img/featured-content-images/noodl-basics.png',
                label: 'Noodl basics',
                href: '/docs/getting-started/workflow',
                playIcon:false,
            },
            {
                type: 'link',
                colorVariable: '--doc-color-noodl-blue-20',
                backgroundImage:
                    '/img/featured-content-images/build-first-app.png',
                label: 'Intro to cloud services',
                href: 'https://www.youtube.com/watch?v=ecas2QPbr0g',
            },
        ],
    },
    { type: FrontpageBlocks.FeaturedGuides },
    { type: FrontpageBlocks.FeaturedPrefabs,},
    { type: FrontpageBlocks.FeaturedModules,},
    { type: FrontpageBlocks.FeaturedVideos },
]
