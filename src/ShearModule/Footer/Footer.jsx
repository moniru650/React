import React from 'react'
import './FooterStyle.css'

export default function Footer() {
  return (
    <footer className='foot'>
    <div className="mainfooter">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <div className="card">
            <div className="logo2">
             <h3 className='gold'>Webskitter <br />
             Academy</h3>
            </div>
            <p className='center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem  </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card">
            <h3>About</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis necessitatibus nostrum nesciunt numquam quo nobis impedit perferendis temporibus omnis eos!</p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card">
             <h3>Catogory</h3>
             <div className="totalicon">
             <div className="icon">
             <i class="fa-brands fa-slack"></i>
             </div>
             <div className="para">
              <p>Webdevlopment</p>
             </div>
             <div className="icon">
             <i class="fa-brands fa-slack"></i>
             </div>
             <div className="para">
              <p>DigitalMarketing</p>
             </div>
             <div className="icon">
             <i class="fa-brands fa-slack"></i>
             </div>
             <div className="para">
              <p>AppDevoloper</p>
             </div>
             <div className="icon">
             <i class="fa-brands fa-slack"></i>
             </div>
             <div className="para">
              <p> UI/UX</p>
             </div>
             <div className="icon">
             <i class="fa-brands fa-slack"></i>
             </div>
             <div className="para">
             <p>Artificial Inteligence</p>
             </div>
             </div>

            </div>
          </div>

          <div className="col-lg-3">
            <div className="card">
              <h3>Contact</h3>
              <div className="contact">
                <div className="icon">
                <i class="fa-solid fa-phone"></i>
                </div>
                <div className="para">
                  <p>+0123456789</p>
                </div>
                <div className="icon">
                <i class="fa-solid fa-envelope"></i>
                </div>
                <div className="para">
                  <p>webskitter456@gmail.com</p>
                </div>
                <div className="icon">
                <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className="para">
                  <p>+56ta.newworkcity.usa.california</p>
                </div>
                <div className="icon">
                <i class="fa-solid fa-earth-americas"></i>
                </div>
                <div className="para">
                  <p>www.global.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
   </footer>
  )
}
