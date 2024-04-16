import React from 'react'
import './whatGPT3.css';
import Features from '../features/Features';
import '../../App.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__marging gradient_bg' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Features />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient-text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className='got3__whatgpt3-container'>
        <Features />
        <Features />
        <Features />
      </div>
    </div>
  )
}

export default WhatGPT3;
