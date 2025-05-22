import React, { useState } from 'react'
import './App.css'

const App = () => {
 
const quiz = [
  { questionNumber: 1, question: "Who is the Prime Minister of India in 2024?", options: { optionA: "Nehru", optionB: "Gandhi", optionC: "Modi", optionD: "Vijay" }, answer: "Modi" },
  { questionNumber: 2, question: "What is the capital of France?", options: { optionA: "Berlin", optionB: "Madrid", optionC: "Paris", optionD: "London" }, answer: "Paris" },
  { questionNumber: 3, question: "Which planet is known as the Red Planet?", options: { optionA: "Earth", optionB: "Mars", optionC: "Jupiter", optionD: "Saturn" }, answer: "Mars" },
  { questionNumber: 4, question: "What is the largest ocean on Earth?", options: { optionA: "Atlantic Ocean", optionB: "Indian Ocean", optionC: "Pacific Ocean", optionD: "Arctic Ocean" }, answer: "Pacific Ocean" },
  { questionNumber: 5, question: "Who wrote the play 'Romeo and Juliet'?", options: { optionA: "Charles Dickens", optionB: "William Shakespeare", optionC: "Leo Tolstoy", optionD: "Mark Twain" }, answer: "William Shakespeare" },
  { questionNumber: 6, question: "Which gas do plants absorb from the atmosphere?", options: { optionA: "Oxygen", optionB: "Carbon Dioxide", optionC: "Hydrogen", optionD: "Nitrogen" }, answer: "Carbon Dioxide" },
  { questionNumber: 7, question: "What is the hardest natural substance on Earth?", options: { optionA: "Gold", optionB: "Iron", optionC: "Diamond", optionD: "Silver" }, answer: "Diamond" },
  { questionNumber: 8, question: "Who invented the light bulb?", options: { optionA: "Isaac Newton", optionB: "Albert Einstein", optionC: "Nikola Tesla", optionD: "Thomas Edison" }, answer: "Thomas Edison" },
  { questionNumber: 9, question: "Which country hosted the 2020 Summer Olympics?", options: { optionA: "China", optionB: "Japan", optionC: "Brazil", optionD: "UK" }, answer: "Japan" },
  { questionNumber: 10, question: "What is the chemical symbol for water?", options: { optionA: "CO2", optionB: "H2O", optionC: "O2", optionD: "NaCl" }, answer: "H2O" }
];

const [question,setquestion]=useState(0)
const [value,setvalue]=useState("");
const [answer,setanswer]=useState("");
const [selection,setselection]=useState(null)
//for next question
function nextquiz(add){
  if(question<quiz.length-1){
      setquestion(question+add);
  }
  else{
    setquestion(0)
  }    
}

//for result
function ans(e){
 
   setvalue(e.target.textContent.toLowerCase());
   setanswer(currentquestion.answer.toLowerCase());  

     if(e.target.textContent===currentquestion.answer){
      setselection(true)
      e.currentTarget.style.background =  "green";
     }
     else{
      setselection(false)
      e.currentTarget.style.background = "red";
     }
}

const currentquestion=quiz[question]
 const listItems = Object.values(currentquestion.options);
  return (
    <>
        <div className='full-page'>
          <div className='quiz-box'>
            <h1>Question : {currentquestion.questionNumber}</h1>
            <h3>{currentquestion.question}</h3>
            <ul className='options'>
              {listItems.map((Items,index)=>(
                <li key={index}     
                onMouseEnter={(e)=>{e.currentTarget.style.backgroundColor="gray",
                                    e.currentTarget.style.color="white"
                                   }}
                onMouseLeave={(e)=>{e.currentTarget.style.background="linear-gradient(145deg,rgba(23,34,77,0.4),rgba(55,8,99,0.4))"}}   
                onClick={ans}
                        
               >
                    {Items}
                </li>
              ))}
            </ul>
            <button onClick={()=>nextquiz(1)} style={{height:"25px",textAlign:"center",color:"black",width:"50px",border:"none",borderRadius:"7px"}}>next</button>
          </div>
        </div>
    </>
  )
}
export default App

