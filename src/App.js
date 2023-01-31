// import { BrowserRouter, Routes, Route } from "react-router-dom"
import useAxios from "./hooks/useAxios"
import { createContext, useState, useEffect, } from "react"
import axios from "axios"
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import InfiniteScroll from "react-infinite-scroll-component"


//Components
import GetImages from "./components/GetImages"
import Jumbotron from "./components/Jumbotron"
import SearchField from "./components/SearchField"
import SearchImages from "./components/SearchImages"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ExploreImage } from "./components/ExploreImage"
import { Loader } from "./components/Loader"
import { ExploreTitle } from "./components/ExploreTitle"

//style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const WrapperImage = styled.section`
max-width: 70rem;
margin: 4rem auto;
display: grid;
grid-gap: 1em;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-auto-rows: 300px;
`

// Create Context
export const ImageContext = createContext();

export default function App() {

  const [exploreImages, setExploreImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])


  const fetchImages = () => {

    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_UNSPLASH_API_KEY_2;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=30`)
      .then(res => setExploreImages([...exploreImages, ...res.data]))


  }


  const [searchImage, setSearchImage] = useState('')

  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=space&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
  // console.log(response)

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <>
      {/* <BrowserRouter> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<GetImages />}></Route> */}
      {/* <Route path="/:username" element={<Profile />}></Route> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
      <ImageContext.Provider value={value}>
        <Navbar />
        <Jumbotron>
          <SearchField />
        </Jumbotron>
        <SearchImages />
      </ImageContext.Provider>
      <GetImages />
      <GlobalStyle />
      <ExploreTitle />
      <InfiniteScroll
        dataLength={exploreImages.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImage>
          {exploreImages.map(imageForExplore => (
            <ExploreImage url={imageForExplore.urls.small} key={imageForExplore.id} />
          ))}
        </WrapperImage>
      </InfiniteScroll>
    
      <Footer />
    </>
  )
}
