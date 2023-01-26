// import { BrowserRouter, Routes, Route } from "react-router-dom"
import GetImages from "./components/GetImages"
import Jumbotron from "./components/Jumbotron"
import SearchField from "./components/SearchField"
import SearchImages from "./components/SearchImages"
import useAxios from "./hooks/useAxios"
import { createContext, useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// Create Context
export const ImageContext = createContext();

export default function App() {

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
      <Footer />
    </>
  )
}
