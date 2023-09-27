import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [number,setNumber]=useState(false);
  const [character,setcharacter]=useState(false);
  const [length,setLength]=useState(6);
  const [password,setPassword]=useState("");
  const inputRef=useRef(null);
const copyClipBoart=useCallback(()=>{
      inputRef.current?.select();
        navigator.clipboard.writeText(password)
             
            
},[password])
 const passwordGenerator =useCallback(()=>{
  let pass=""
  let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(number) string +="01233456789";
     if(character) string +="!@#$%&*(){}[]";
     for(let i=1 ; i<=length ;i++){
      let chr=Math.floor(Math.random()*string.length+1)
      pass+=string.charAt(chr);
    }
    setPassword(pass)
 },[number,character,length,setPassword])
 useEffect(()=>{
    passwordGenerator();
 },[length,number,character,passwordGenerator])
  return (
    <>
      <div className="flex flex-row justify-center items-center bg-slate-200 h-screen w-full">
        <div className="bg-black mx-5  p-3 sm:p-10 w-full sm:w-1/2 rounded-md h-auto sm:h-[200px]  ">
          <h1 className="text-white text-center font-bold tracking-widest">
          
            Password Generator
          </h1>
          <div className="flex flex-col  sm:flex-row sm:justify-between  mt-2 space-y-2 sm:space-x-2 sm:m-5 ">
            <input
              type="text"
              name="password"
              id=""
              value={password}
              ref={inputRef}
              readOnly

              
              className="p-2  w-full h-auto rounded-md border-none outline-none"
            />
            <button className="bg-blue-600 text-white  sm:p-2 rounded-md"
            onClick={copyClipBoart}>
              Copy
            </button>
          </div>
          <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center space-y-1 mt-2 sm:m-5">
            <div>
              <input
                type="checkbox"
                className="rounded-full"
                id="checkbox"
                name="number"
                value={number}
                onClick={()=>{
                  setNumber(!number);
                 
                }}
              ></input>
              <label className="ml-1 text-white" htmlFor="checkbox">
                Numbers
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="rounded-full"
                id="char"
                name="character"
                value={character}
                onClick={()=>{
                  setcharacter(!character);
                }}
              ></input>
              <label className="ml-1 text-white" htmlFor="char">
                Special Character
              </label>
            </div>
            <div>
              <input
                type="range"
                className="rounded-full cursor-pointer"
                id="range"
                min="6"
                max="99"
                value={length}
                onChange={(e)=>{setLength(e.target.value)}}
              ></input>
              <label className="ml-1 text-white" htmlFor="range">
               {`Length (${length})`}
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
