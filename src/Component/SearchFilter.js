import React from 'react'
import JSONDATAT from "../MOCK_DATA.json"
import { useState } from 'react'

export default function SearchFilter() {
    const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <input type='text' placeholder='Search...' onChange={event => {setSearchTerm(event.target.value)}}/>
      {JSONDATAT.filter((val)=>{
        if(searchTerm === ""){
            return val;
        }else if( val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val;
        }
      }).map((val, key) => {
          const newLocal = <div><p>{val.first_name}</p></div>;
        return (newLocal)
      })}
    </div>
  )
}
