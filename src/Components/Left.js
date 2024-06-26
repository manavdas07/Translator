import React  from 'react';

function Left(props) {
  return (
    <div className="left_container">
      <div className='left_header'>
      {/* <label for='language'>Language</label>
       <select id='language'>
          <option value='english'>English</option>
          <option value='hindi'>Hindi</option>
          <option value='marathi'>Marathi</option>
          <option value='gujarati'>Gujarati</option>
       </select> */}
      </div>
      <div className='left_body'>
        <input type='text' placeholder='Enter any text' value={props.data} onChange={(e)=>props.change(e.target.value)}/>
      </div>
    </div>
  );
}

export default Left;