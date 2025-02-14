import React from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Assessment from './pages/Assessment';
import Blog from './pages/Blog';
import Classroom from './pages/Classroom';
import Dashboard from './pages/Dashboard';
import Meet from './pages/Meet';
import News from './pages/News';
import Navbar from './components/Navbar'

const App=()=>{
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/Assessment' element={<Assessment/>}></Route>
            <Route path='/Blog' element={<Blog/>}></Route>
            <Route path='/Classroom' element={<Classroom/>}></Route>
            <Route path='/Dashboard' element={<Dashboard/>}></Route>
            <Route path='/Meet' element={<Meet/>}></Route>
            <Route path='/News' element={<News/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default App;