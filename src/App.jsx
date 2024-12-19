import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Page from "./components/Page"
import DetailsHotel from "./components/DetailsHotel"
function App() {

  return (
   <BrowserRouter>
   <Routes>
  <Route  path="/"  element={<Page />}/>
  <Route  path="/details/:id"  element={<DetailsHotel />}/>
   </Routes>
    </BrowserRouter>
  )
}

export default App
