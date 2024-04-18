import React from 'react'
import Header from '../Components/Header'
import Rubrique from '../Components/Rubrique'
import SearchBar from '../Components/SearchBar'
import Carousel from '../Components/Carousel'

function Home() {
    return (
        <>
            <Header />
            <SearchBar />
            <Carousel />
            <Rubrique />
        </>
    )
}

export default Home