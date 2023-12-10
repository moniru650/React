import React from 'react'
import { Link } from 'react-router-dom'
import { createContext } from 'react'
import Carousal from '../../Carousal/Carousal/Carousal'
import Card from '../../Card/Card/Card'
import Service from '../../Service/Service/Service'
import './HomeStyle.css'
import CompA from "../../CompA/CompA"
import LogIn from '../../LogIn/LogIn'
import LogIn2 from '../../LogIn2/LogIn2'
import Register from '../../Register/Register'
import GetDemo from '../../GetDemo/GetDemo'
import GetDemo2 from '../../GetDemo2/GetDemo2'
export const FirstName = createContext();
export const LastName = createContext();




export default function Home(){
  return(
   <>
    <Carousal/>
     <Card/>
     <div>
     <div className=" d-flex justify-content-center align-items-center mt-5">
          <button className="viewBtn">
          <Link to={"/Card"}>View More</Link>
          </button>
      </div>
      </div>


     <div className="container">
        <h3 className="text-capitalize">Check our blogs</h3>
        <div className="row">
          <div className="col-lg-4">
            <div className="blog-card">
              <div className="blog-image">
                <img className="img-fluid" src="images/blog-3.jpg" alt="" />
              </div>
              <div className="blog-details">
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum vel diam lorem. Quisque luctus consequat risus, et
                  finibus libero maximus in. Mauris rhoncus odio id dolor
                  rhoncus, at sagittis ligula iaculis. Sed faucibus dui
                  dignissim augue gravida pretium. Aliquam erat volutpat.
                  Aliquam mauris tortor, eleifend nec enim non, fringilla
                  facilisis lorem. Fusce sagittis odio arcu, et aliquet ante
                  porttitor in. Fusce ac tortor lorem. Cras sit amet facilisis
                  turpis, vel semper elit.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-card">
              <div className="blog-image">
                <img className="img-fluid" src="images/blog-5.jpg" alt="" />
              </div>
              <div className="blog-details">
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum vel diam lorem. Quisque luctus consequat risus, et
                  finibus libero maximus in. Mauris rhoncus odio id dolor
                  rhoncus, at sagittis ligula iaculis. Sed faucibus dui
                  dignissim augue gravida pretium. Aliquam erat volutpat.
                  Aliquam mauris tortor, eleifend nec enim non, fringilla
                  facilisis lorem. Fusce sagittis odio arcu, et aliquet ante
                  porttitor in. Fusce ac tortor lorem. Cras sit amet facilisis
                  turpis, vel semper elit.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-card">
              <div className="blog-image">
                <img className="img-fluid" src="images/blog-3.jpg" alt="" />
              </div>
              <div className="blog-details">
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum vel diam lorem. Quisque luctus consequat risus, et
                  finibus libero maximus in. Mauris rhoncus odio id dolor
                  rhoncus, at sagittis ligula iaculis. Sed faucibus dui
                  dignissim augue gravida pretium. Aliquam erat volutpat.
                  Aliquam mauris tortor, eleifend nec enim non, fringilla
                  facilisis lorem. Fusce sagittis odio arcu, et aliquet ante
                  porttitor in. Fusce ac tortor lorem. Cras sit amet facilisis
                  turpis, vel semper elit.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center mt-4">
          <button className="viewBtn">
            <Link to={`/seeDet/1`}>View More</Link>
          </button>
        </div>
     </div>
     
    <LogIn/>
    <LogIn2/>
    <Register/>
     <Service/>
     {/* <GetDemo/> */}
     <GetDemo2/>
      <div>
        <FirstName.Provider value={"Web"}>
          <LastName.Provider value={"Devoloper"}>
            <CompA/>
          </LastName.Provider>
        </FirstName.Provider>
      </div>
   </>
  )
}
