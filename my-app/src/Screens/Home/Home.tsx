import React from 'react';
import './Home.scss'
import Header from '../../Components/Header/Header';
import CarouselComponent from '../../Components/Carosuel';

import "../../styles/styles.css";

import ScrollAnimation from 'react-animate-on-scroll';
import GridLayout from 'react-grid-layout';
import ServiceCard from '../../Components/ServiceGridCard';

const Home = () => {

  console.log('HOme function calledd------');


  const layout = [
    { i: 'a', x: 0, y: 0, w: 4, h: 2, static: true },
    { i: 'b', x: 1, y: 0, w: 4, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 4, h: 2 }
  ];

  return (
    <div className="homecontainer">
      {/* <Header /> */}

      <div id="example1">
        <h1>Lorem Ipsum Dolor</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
      </div>

      {/* <div >
        <img src={require('../../assets/Bitcoin_Home.jpg').default} alt="Not found" className='Home-img'/>
      </div> */}

      <div>
        <CarouselComponent />
      </div>

      <ScrollAnimation 
        animateIn='fadeIn' 
        //duration={2000}
        delay={10}
        animateOnce={true}
        
      >
        <div className="srvCard">
          <ServiceCard />
        </div>
      </ScrollAnimation>

        
      

      <div style={{height: 400}}>
        <button className="my-btn-color" onClick={()=>console.log('Helloooo')}>MyButton</button>
      </div>

      <div>
        <div className="trans">world</div>
      </div>

      <div className="serviceGrid"></div>
        <div className="item-a" style={{height: 100, width: 100, background:'green'}}>
          Hello
        </div>
        <div className="item-b" style={{ height: 100, width: 100, background: 'black' }}>
          Hello
        </div>

       
        
        
       
    </div>
  );
}

export default Home;
