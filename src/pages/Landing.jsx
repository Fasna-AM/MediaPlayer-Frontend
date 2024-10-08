import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/images.jpeg'
import { Card } from 'react-bootstrap'
import feature1 from '../assets/music1.jpeg'
import feature2 from '../assets/music2.jpeg'
import feature3 from '../assets/music3.jpeg'

const Landing = () => {
  return (
    <div style={{ paddingTop: "80px" }} className='container'>
      {/* Landing  head*/}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p className="mt-3" style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam nihil accusamus ad deleniti laudantium. Velit perspiciatis magnam, sed provident ad, aliquid doloribus quam reiciendis aspernatur nemo repellendus eaque dolorem voluptatem!
          </p>
          <Link to={'/home'} className='btn btn-info'>Get Started!!</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img src={LandingImg} className='img-fluid ms-5 ' style={{ width: "500px" }} alt="" />
        </div>
      </div>
      {/* features */}
      <div className="my-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img style={{height:"250px"}} variant="top" src={feature1} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Users can upload, view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img style={{height:"250px"}} variant="top" src={feature2} />
              <Card.Body>
                <Card.Title>Categorise Videos</Card.Title>
                <Card.Text>
                  Users can catogorise the videos by grag and drop features. 
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img style={{height:"250px"}} variant="top" src={feature3} />
              <Card.Body>
                <Card.Title>Managing Video History</Card.Title>
                <Card.Text>
                  Users can manage the watch history of all videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* youtube */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className="text-warning">Simple, Fast and Powerful</h3>
          <p style={{textAlign:"justify"}}><span className='fs-5'>Play Everything :</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quaerat doloribus iusto sint tenetur porro quam sunt enim eligendi facere, consequuntur dolorem quia aperiam officiis. Reprehenderit accusantium laborum nobis? Ad?</p>
          <p style={{textAlign:"justify"}}><span className='fs-5'>Catogories Vedios :</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quaerat doloribus iusto sint tenetur porro quam sunt enim eligendi facere, consequuntur dolorem quia aperiam officiis. Reprehenderit accusantium laborum nobis? Ad?</p>
          <p style={{textAlign:"justify"}}><span className='fs-5'>Managing History:</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quaerat doloribus iusto sint tenetur porro quam sunt enim eligendi facere, consequuntur dolorem quia aperiam officiis. Reprehenderit accusantium laborum nobis? Ad?</p>
          
        </div>
        <div className="col-lg"></div>
        <div className="col-lg-6">
        <iframe width="614" height="514" src="https://www.youtube.com/embed/Po3jStA673E" title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing