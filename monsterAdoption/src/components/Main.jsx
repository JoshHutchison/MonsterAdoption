import Home2 from "./Home2";
import Nav from "./Nav";
import { Route, Routes } from 'react-router-dom'
import PetPage from "./PetPage";
import PetSelection from "./PetSelection";

export default function Main () {
    return (
        <div className="main">
            <Nav></Nav>
            <Routes>
                <Route path='/' element={<Home2/>}></Route>
                <Route path='/PetSelection' element={<PetSelection/>}></Route>
                <Route path='/PetPage' element={<PetPage/>}></Route>
            </Routes>

        </div>
    )
}