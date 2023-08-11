import React from 'react'

const cssQuest = () => {
    const questions = [
        {
            question: "What does CSS stand for?",
        answers: [
          { option: "Computer style sheets", correct: false },
          { option: "Creative style sheets", correct: false },
          { option: "Colourfull style sheet", correct: false },
          { option: "Cascading style sheet", correct: true },
        ]
        },
    
        {
            question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        answers: [
          { option: "In the head section", correct: true },
          { option: "In the body section", correct: false },
          { option: "At the end of the document", correct: false },
          { option: "At the middle section", correct: false },
        ]
        },
    
        {
            question: "Which HTML tag is used to define an internal style sheet?",
        answers: [
          { option: "<css>", correct: false },
          { option: "<script>", correct: false },
          { option: "<style>", correct: true },
          { option: "<myStyle>", correct: false },
        ]
        },
    
        {
            question: "Which is the correct CSS syntax?",
        answers: [
          { option: "body{color=black;}", correct: true },
          { option: "body:color=black", correct: false },
          { option: "{body;color:black;}", correct: false },
          { option: "{body:color=black;}", correct: false },
        ]
        },
    
        {
            question: "How do you insert a comment in a CSS file?",
        answers: [
          { option: "//This is a comment//", correct: true },
          { option: "//This is a comment", correct: false },
          { option: "/* This is a comment*/", correct: false },
          { option: "/This is a comment/", correct: false },
        ]
        },
    
        {
            question: "Which property is used to change the background color?",
        answers: [
          { option: "bgcolor", correct: false },
          { option: "background-color", correct: true },
          { option: "color", correct: false },
          { option: "backgroundColor", correct: false },
        ]
        },
    
        {
            question: "Which CSS property is used to change the text color of an element?",
        answers: [
          { option: "text-color", correct: false },
          { option: "color-text", correct: false },
          { option: "fgcolor", correct: false },
          { option: "color", correct: true },
        ]
        },
    
        {
            question: "Which CSS property controls the text size?",
        answers: [
          { option: "text-style", correct: false },
          { option: "text-size", correct: false },
          { option: "font-size", correct: true },
          { option: "font-style", correct: false },
        ]
        },
    
        {
            question: "How do you make the text bold?",
        answers: [
          { option: "font-weight:bold", correct: true },
          { option: "style:bold", correct: false },
          { option: "font:bold", correct: false },
          { option: "font-size:bold", correct: false },
        ]
        },
    
        {
            question: "Which property is used to change the left margin of an element?",
        answers: [
          { option: "indent", correct: false },
          { option: "margin-right", correct: false },
          { option: "margin-left", correct: true },
          { option: "padding-left", correct: false },
        ]
        }
    ]
    
    
  //   questions.map((items) => {
  //       console.log(items);
  //   })
  // return (
  //   <div>
 
        
  //   </div>
  // )
}

export default cssQuest
