import React, { Suspense, lazy } from 'react'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from '../../ShearModule/Header/Header'
import Footer from '../../ShearModule/Footer/Footer'
import Loader from '../../ShearModule/Loader/Loader'
const GetDemo2 = lazy(()=> import("../../Componend/GetDemo2/GetDemo2"))
const GetDemo =lazy(()=> import("../../Componend/GetDemo/GetDemo"))
const Register = lazy(()=> import("../../Componend/Register/Register"));
const LogIn2 = lazy(()=> import("../../Componend/LogIn2/LogIn2"));
const Home = lazy(() => import("../../Componend/Home/Home/Home"));
const Carousal = lazy(() => import("../../Componend/Carousal/Carousal/Carousal"));
const Card = lazy(()=> import("../../Componend/Card/Card/Card"));
const Sercvice = lazy(() => import("../../Componend/Service/Service/Service"));
const Details = lazy(() => import("../../Componend/Details/Details"));
const Memo = lazy(()=> import("../../Componend/Memo/Memo"));
// const ObJect = lazy(()=> import("../../Componend/Object/ObJect"))




// import Carousal from '../../Componend/Carousal/Carousal/Carousal'
// import Card from '../../Componend/Card/Card/Card'
// import Sercvice from '../../Componend/Service/Service/Service'
// import Home from '../../Componend/Home/Home/Home'
// import Loader from '../../ShearModule/Loader/Loader'
// import Details from '../../Componend/Details/Details'



export default function Rout(){
  return (
    <div>
      <Suspense fallback = {<Loader/>}>
        <Router>
            <Header/>
            <Routes>
                <Route path='/Memo' element={<Memo/>}/>
                <Route path='/' element={<Home/>} />
                <Route path='/Loader' element={<Loader/>} />
                <Route path='/Carousal' element={<Carousal/>} />
                <Route path='/Card'element={<Card/>} />
                <Route path='/Service' element={<Sercvice/>} />
                <Route path="/seeDet/:id" element={<Details/>} />
                <Route path='/LogIn' element={<LogIn2/>} />
                <Route path='/LogIn2' element={<LogIn2/>} />
                <Route path='/Register' element={<Register/>} />
                <Route path='/GetDemo' element={<GetDemo/>} />
                <Route path='/get' element={<GetDemo2/>} />
                {/* <Route path='/Object' element={<ObJect/>} /> */}
              
            </Routes>
            <Footer/>
        </Router>
        </Suspense>
    </div>
  )
}
