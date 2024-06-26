import React from 'react'
import './possibility.css';
import PossibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={PossibilityImage} alt="possibilityImage" />
      </div>
    </div>
  )
}

export default Possibility;
