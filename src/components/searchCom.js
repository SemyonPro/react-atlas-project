import React, { useRef, useState } from 'react';
import {doApiGet, URL_API } from '../services/apiservice';
import Card from './cardCom';


function Search() {
  let refCountry = useRef();
  let [name,setName] = useState();
  const searchCountry = async () =>{
    let data = await doApiGet(URL_API + refCountry.current.value);
   setName(data[0]);
  }

  return (
    <div className="Header text-center bg-dark pb-5 py-5">
      <input defaultValue={"china"} className="" type="text" ref={refCountry} />
      <button className="outline-secondary" onClick={searchCountry}>Search</button>
     {name?<Card name={name}/>:<div></div>}
    </div>
  );
}

export default Search;
