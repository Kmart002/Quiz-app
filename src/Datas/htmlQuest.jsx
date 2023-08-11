import React from 'react'
import '../Datas/htmlBtn.css'
const htmlQuest = () => {
  const questions = [
    {
        question: "What type of a language is HTML?",
    answers: [
      { option: "Network Protocol", correct: false },
      { option: "Programming Language", correct: false },
      { option: "Scripting Language", correct: false },
      { option: "Markup Language", correct: true },
    ]
    },

    {
      question: "What should be the first tag in any HTML Document?",
  answers: [
    { option: "<head>", correct: false },
    { option: "<title>", correct: false },
    { option: "<html>", correct: false },
    { option: "<!doctype html>", correct: true},
  ]
  },
  {
    question: "What tag is used to display a picture in a HTML page?",
answers: [
  { option: "Img", correct: true },
  { option: "Source", correct: false },
  { option: "Picture", correct: false },
  { option: "Image", correct: false },
]
},

{
  question: "HTML are web pages read and rendered by",
answers: [
{ option: "Server", correct: false },
{ option: "Web browser", correct: true },
{ option: "Compiler", correct: false },
{ option: "Interpreter", correct: false },
]
},

{
  question: "What is the correct HTML tag for inserting a line break?",
answers: [
{ option: "<br/>", correct: true },
{ option: "<lb>", correct: false },
{ option: "<break/>", correct: false },
{ option: "<nbsp>", correct: false },
]
},

{
  question: "HTML documents are saved in",
answers: [
{ option: "None of the above", correct: false },
{ option: "ASCII text", correct: true },
{ option: "Special binary format", correct: false },
{ option: "Machine language codes", correct: false },
]
},

{
  question: "Which tag creates a check box for a form in HTML?",
answers: [
{ option: "<input type= checkbox>", correct: false },
{ option: "<input=checkbox>", correct: false },
{ option: "<checkbox>", correct: false },
{ option: "<input checkbox>", correct: true },
]
},

{
      question: "Choose the correct HTML tag for the smallest size heading?",
  answers: [
    { option: "<H6>", correct: true },
    { option: "<H1>", correct: false },
    { option: "<Heading>", correct: false },
    { option: "<Head/>", correct: false },
  ]
  },

  {
    question: "Choose the correct HTML element to define important text?",
answers: [
  { option: "<i>", correct: false },
  { option: "<strong>", correct: true },
  { option: "<important>", correct: false },
  { option: "<b/>", correct: false },
]
},

{
  question: "Which character is used to indicate an end tag?",
answers: [
{ option: "<#>", correct: false },
{ option: "<%>", correct: false },
{ option: "</>", correct: true },
{ option: "<*>", correct: false },
]
}

]

let index = 0
let currentQ = 1
let a = questions[currentQ].question


const getNext = () => {
  currentQ = index+=1
}

  return(<>
    <div className="quest">   
    {a}
    </div>
    <span>
    <button>Prev.</button>
    <button className="styled-button" onClick={getNext}>Next</button>

  </span>
  </>
  )
}

export default htmlQuest