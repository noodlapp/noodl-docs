import React from 'react'
import Content from '@theme-original/DocSidebar/Desktop/Content'
import SearchBar from '@theme-original/SearchBar'

export default function ContentWrapper(props) {
    return (
        <>
            <div className="search-bar-outer">
                <SearchBar />
            </div>

            <Content {...props} />
        </>
    )
}
