import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");

  const onChange = async (e) => {
    setData(e.target.value);
    const options = {
      method: "GET",
      url: "https://translated-mymemory---translation-memory.p.rapidapi.com/api/get",
      params: {
        langpair: 'en|it',
        q: data,
        mt: '1',
        onlyprivate: '0',
        de: 'a@b.c'
      },
      headers: {
        "X-RapidAPI-Key": "3fb4860c42msh30b9393d50ce807p1b57d0jsn9b228840cbc5",
        "X-RapidAPI-Host": "translated-mymemory---translation-memory.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setData2(response.data.responseData.translatedText);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App_container">
      <div className="a_header">Translator</div>
      <div className="a_body">
        <div className="a_body_1">
          <div className="left_container">
            <div className='left_body'>
              <input type='text' placeholder='Enter any text' value={data} onChange={onChange} />
            </div>
          </div>
        </div>
        <div className="a_body_2">
          <div className="right_container">
            <div className='right_body'>
              <input type='text' placeholder='Translate' value={data2} />
            </div>
          </div>
        </div>
      </div>
      <button className="trbtn">Translate</button>
    </div>
  );
}

export default App;

