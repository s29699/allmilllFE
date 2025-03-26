import React, { useEffect, useState } from 'react'

function Weapon() {
  const [type, setType] = useState("air")
  const [asla, setAsla] = useState([])

  const handleClick = async () => {
    const response = await fetch(`http://localhost:7000/api/v1/weapon/allweapon/${type}`,{
      method:"GET"
    });
    const data = await response.json();
    console.log("data", data.weapon);
    setAsla(data.weapon);
  }

  return (
    <div className="flex flex-col">
      <div className="bg-cyan-300 p-6 flex space-x-8 border border-black mb-4">
        <button
          className="px-6 py-2 border border-purple-500"
          onClick={() => {
            setType("land");
            handleClick();
          }}
        >
          Land
        </button>
        <button
          className="px-6 py-2 border border-purple-500"
          onClick={() => {
            setType("air");
            handleClick();
          }}
        >
          Air
        </button>
        <button
          className="px-6 py-2 border border-purple-500"
          onClick={() => {
            setType("water");
            handleClick();
          }}
        >
          Water
        </button>
        <button
          className="px-6 py-2 border border-purple-500"
          onClick={() => {
            setType("space");
            handleClick();
          }}
        >
          Space
        </button>
        <button
          className="px-6 py-2 border border-purple-500"
          onClick={() => {
            setType("bio");
            handleClick();
          }}
        >
          Biological
        </button>
      </div>
      <div>
        {
          asla.map((ele)=>(
            <div key={ele._id}>
              {ele.name}
            </div>
          ))
        }
        
      </div>
    </div>
  );
}

export default Weapon