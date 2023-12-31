// Write your code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="about-container">
    <Header />

    <div className="about-image-container">
      <img
        className="mobile-about-image"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
      <img
        className="desktop-about-image"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </div>
  </div>
)

export default Home
