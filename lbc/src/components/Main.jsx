import Home from './Home'

import { Route, Routes } from 'react-router-dom'

export default function Main () {


    return (
        <div className="routes">
            <Routes>
                <Route path = "/" element = {<Home />} />
            </Routes>
        </div>
    )
}