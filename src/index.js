import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Carousel } from 'antd';
import ReactPlayer from "react-player"


function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: 'calc(480px + 14.2vw)',
  color: '#fff',
  lineHeight: '360px',
  textAlign: 'center',
  background: '#364d79',
};

ReactDOM.render(
  <div>
  <Carousel afterChange={onChange}>
    <div>
      <h3 style={contentStyle}>
      <ReactPlayer
      className='react-player'
      width='100%'
      height='100%'
      url="https://youtu.be/LEItInhQtSY"
      volume={.1}
      />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>Tanmay Slide</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Third Slide</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Fourth Slide</h3>
    </div>
  </Carousel>
  </div>,
  document.getElementById('root'),
);