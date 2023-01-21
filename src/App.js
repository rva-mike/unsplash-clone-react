// import { BrowserRouter, Routes, Route } from "react-router-dom"
import GetImages from "./components/GetImages"
import Jumbotron from "./components/Jumbotron"
import SearchField from "./components/SearchField"
import SearchImages from "./components/SearchImages"
import useAxios from "./hooks/useAxios"
import { createContext } from "react"

// Create Context
export const ImageContext = createContext();

export default function App() {

  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=office&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
  console.log(response)

  const value = {
    response,
    isLoading,
    error,
    fetchData
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
        <Jumbotron>
          <SearchField />
        </Jumbotron>
        <SearchImages />
      </ImageContext.Provider>


      <GetImages />
    </>
  )
}
