import React from 'react'
import BottomBar from './Bottombar';

function Design() {
  return (
    <div className='design-page page-text'>
        <div className='design-page-main'>
            <div className='design-page-container' style={{color: 'blue', fontSize: '1.2rem'}}>
                Design Canvas
            </div>
        </div>
        <div className='design-page-footer'>
            <BottomBar />
        </div>
    </div>
  )
}

export default Design;

