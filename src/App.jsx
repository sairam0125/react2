//! navbar app.jsx
// import React from 'react';
// import { Route,Routes,BrowserRouter } from 'react-router-dom';
// import Assessment from './pages/Assessment';
// import Blog from './pages/Blog';
// import Classroom from './pages/Classroom';
// import Dashboard from './pages/Dashboard';
// import Meet from './pages/Meet';
// import News from './pages/News';
// import Navbar from './components/Navbar'

// const App=()=>{
//     return(
//         <BrowserRouter>
//         <Navbar/>
//         <Routes>
//             <Route path='/' element={<Dashboard/>}></Route>
//             <Route path='/Assessment' element={<Assessment/>}></Route>
//             <Route path='/Blog' element={<Blog/>}></Route>
//             <Route path='/Classroom' element={<Classroom/>}></Route>
//             <Route path='/Dashboard' element={<Dashboard/>}></Route>
//             <Route path='/Meet' element={<Meet/>}></Route>
//             <Route path='/News' element={<News/>}></Route>
//         </Routes>
//         </BrowserRouter>
//     )
// }
// export default App;

// ! CRUD operations
import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './curdcomponents/Home'
import Create from './curdcomponents/Create'
import Edit from './curdcomponents/Edit'
import {ToastContainer} from "react-toastify"
const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit/:userId' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App

//json-sever --watch users.json --port=8000 to run the server
//npm install -g json-server to install json server

