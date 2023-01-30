// import { BrowserRouter, Routes, Route } from "react-router-dom"

import useAxios from "./hooks/useAxios"
import { createContext, useState, useEffect } from "react"
import axios from "axios"

//Components
import GetImages from "./components/GetImages"
import Jumbotron from "./components/Jumbotron"
import SearchField from "./components/SearchField"
import SearchImages from "./components/SearchImages"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ExploreImage } from "./components/ExploreImage"
import { Loader } from "./components/Loader"

// Create Context
export const ImageContext = createContext();

export default function App() {

  const [exploreImages, setExploreImages] = useState([]);

  useEffect(() => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_UNSPLASH_API_KEY_2;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=1`)
      .then(res => setExploreImages([...exploreImages, ...res.data]))
  }, [])



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
      <Loader />
      {exploreImages.map(imageForExplore => (
        <ExploreImage url={imageForExplore.urls.thumb} key={imageForExplore.id} />
        ))}
      <Footer />
    </>
  )
}
