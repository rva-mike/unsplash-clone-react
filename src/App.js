// import { BrowserRouter, Routes, Route } from "react-router-dom"
import GetImages from "./components/GetImages"
import Jumbotron from "./components/Jumbotron"
import SearchField from "./components/SearchField"
import SearchImages from "./components/SearchImages"

export default function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<GetImages />}></Route> */}
      {/* <Route path="/:username" element={<Profile />}></Route> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
      <Jumbotron>
        <SearchField/>
      </Jumbotron>
      <SearchImages />
      <GetImages />
    </>
  )
}
