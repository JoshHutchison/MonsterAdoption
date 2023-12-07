import Home2 from "./Home2";
import Home from "./Home";

import Nav from "./Nav";
import { Route, Routes } from 'react-router-dom'
import PetPage from "./PetPage";
import PetSelection from "./PetSelection";
import AdoptionPage from "./AdoptionPage";

export default function Main () {
    return (
        <div className="main">
            <Nav></Nav>
            <Routes>
                <Route path='/' element={<Home2/>}></Route>
                <Route path='/PetSelection' element={<PetSelection/>}></Route>
                <Route path='/PetPage/:id' element={<PetPage/>}></Route>
                <Route path='/Adoption/:id' element={<AdoptionPage/>}></Route>

            </Routes>

        </div>
    )
}