import React  from 'react';


function Right() {
  return (
    <div className="right_container">
      <div className='right_header'>
      {/* <label for='language'>Language</label>
       <select id='trlanguage'>
          <option value='english'>English</option>
          <option value='hindi'>Hindi</option>
          <option value='marathi'>Marathi</option>
          <option value='gujarati'>Gujarati</option>
       </select> */}
      </div>
      <div className='right_body'>
        <input type='text' placeholder='Translate'/>
      </div>
    </div>
  );
}

export default Right;