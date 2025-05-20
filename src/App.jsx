import { useState } from 'react';
import './App.css'

function App(){
const[result,setresult]=useState(null);
const listitem=["option 1","option 2","option 3","option 4"];

  return (
    <>
    <div className='full-page'>
       <div className='quiz-box'>
        <h1>Question 1</h1>
        <h3>thiss the first question for quiz...</h3>
        <ul className='options'>
         {listitem.map((itemss,index)=>(
           <li key={index}
           onClick={()=>setresult(index)}
           onMouseEnter={(e)=>{if(result!==index){
              e.currentTarget.style.backgroundColor="gray"
              e.currentTarget.style.color="white"
           }}}
           onMouseLeave={(e)=>{if(result!==index){
            e.currentTarget.style.background="linear-gradient(145deg,rgba(23,34,77,0.4),rgba(55,8,99,0.4))"
            e.currentTarget.style.color="white"
           }}}
           
           style={{
            background:(result === index) ? "green" : "linear-gradient(145deg,rgba(23,34,77,0.4),rgba(55,8,99,0.4))" }}>
            {itemss}
            </li>
         ))}
        </ul>
       </div>
    </div>
    </>
  )
}
export default App