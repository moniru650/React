import React from 'react'
import './CardStyle.css'

export default function Card() {
  return (
    <div>
          <section>
        <div className="secmain">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                         <img src="img/robot.jpg" alt="" />
                         <h2>Flower*1</h2>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto odio, non sapiente blanditiis sequi quia numquam consectetur enim doloremque pariatur!</p>
                         <button>click now</button>
                        </div>
                    </div>
                
                    <div className="col-lg-4">
                        <div className="card">
                        <img src="img/robot2.jpg" alt="" />
                        <h2>Flower*2</h2>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto odio, non sapiente blanditiis sequi quia numquam consectetur enim doloremque pariatur!</p>
                         <button>click now</button>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                        <img src="img/robot3.jpg" alt="" />
                        <h2>Flower*3</h2>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto odio, non sapiente blanditiis sequi quia numquam consectetur enim doloremque pariatur!</p>
                         <button>click now</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
