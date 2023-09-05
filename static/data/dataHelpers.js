function recursiveBuildSidebarData(item) {
    if ('items' in item) {
        // is a category
        return {
            type: 'category',
            label: item.label,
            items: item.items.map(recursiveBuildSidebarData),
        }
    } else {
        return {
            type: 'doc',
            label: item.label,
            id: item.id,
        }
    }
}

exports.recursiveBuildSidebarData = recursiveBuildSidebarData
