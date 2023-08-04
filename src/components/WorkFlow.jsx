import React from 'react'
import BottomBar from './Bottombar';

function WorkFlow() {
  return (
    <div className='workflow-page'>
        <div className='workflow-page-main'>
            <div className='workflow-page-container page-text'>
                Workflow Canvas
            </div>
        </div>
        <div className='workflow-page-footer'>
            <BottomBar />
        </div>
    </div>
  )
}

export default WorkFlow;

