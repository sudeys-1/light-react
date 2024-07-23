import { useState } from "react"
function Body (){
    const [Color , setColor]=useState("false")
    // onBTN
    const OnBTN =function(){
        setColor  (true)
    }
    const OfBTN =function(){
        setColor  (false)
    }

    return <div className="">
        
        <div style={{background :Color ===true ?"yellow" : ""}} className=" ml-[500px] mt-[100px] h-[400px] w-[400px] border-[3px] border-solid border-black rounded-full" ></div>
        <button onClick={OnBTN}  style={{background :Color ===true ?"green" :""}}   className="  rounded-[10px] ml-[550px] mt-[50px] w-[100px] p-[10px] border-black border-[3px]" >ON</button>
        <button onClick={OfBTN}  style={{background :Color ===false ?"red" :""}} className="  rounded-[10px] ml-[100px] mt-[50px] w-[100px] p-[10px] border-black border-[3px]" >OF</button>
        
    </div>
}
export default Body 