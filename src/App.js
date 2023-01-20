// import { BrowserRouter, Routes, Route } from "react-router-dom"
import GetImages from "./components/GetImages"
import Jumbotron from "./components/Jumbotron"

export default function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<GetImages />}></Route> */}
      {/* <Route path="/:username" element={<Profile />}></Route> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
      <Jumbotron />
      <GetImages />
    </>
  )
}
