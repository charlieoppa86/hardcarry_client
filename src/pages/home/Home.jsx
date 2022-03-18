import './home.scss';
import React from 'react';
import Gnbbar from '../../components/gnbbar/Gnbbar';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Content from '../../pages/content/Content';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div className='home'>
        <div className="header_area">
          <Gnbbar />
          <Navbar />
        </div>        
        <div className="body_area">
          <Banner /> 
          <Content />
        </div>
        <div className="footer_area">
          <Footer /> 
        </div>
    </div>
  )
}

export default Home