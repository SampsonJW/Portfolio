import React from 'react';
import './Resume.css';
import CV from '../../images/websiteCV.pdf';

function Resume() {
  return (
    <div className='resume-bg'>
      <div className='resume-header'>
        <h5 className='pb-4' style={{ color: '#fe7500' }}>
          Resume
        </h5>
        {/* <embed src={CV} type='application/pdf' width='100%' height='100%' /> */}
      </div>
    </div>
  );
}

export default Resume;
