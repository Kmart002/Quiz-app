import React from 'react'

const javaQuest = () => {
  const questions = [
    {
      question: "What is JavaScript and what is its role in web development?",
      answers: [
        { option: "Network Protocol", correct: false },
        { option: "Programming Language", correct: false },
        { option: "Scripting Language", correct: false },
        { option: "It is a programming language used for web development to add interactivity and dynamic behavior.", correct: true },
      ],
    },
    {
      question: "How do you declare a variable in JavaScript?",
      answers: [
        { option: "Using var", correct: false },
        { option: "Using let", correct: false },
        { option: "Using const", correct: false },
        { option: "Using any valid variable name", correct: true },
      ],
    },
    {
      question: "Explain the difference between let, const, and var for variable declaration.",
      answers: [
        { option: "Their scope", correct: true },
        { option: "Their data type", correct: false },
        { option: "Their color in code editors", correct: false },
        { option: "Their size in memory", correct: false },
      ],
    },
    {
      question: "How do you display a message in the browser's console using JavaScript?",
      answers: [
        { option: "console.log()", correct: true },
        { option: "browser.print()", correct: false },
        { option: "alert()", correct: false },
        { option: "display.message()", correct: false },
      ],
    },
    {
      question: "What is the purpose of the typeof operator in JavaScript?",
      answers: [
        { option: "To check if a variable is defined", correct: false },
        { option: "To determine the data type of a value", correct: true },
        { option: "To compare two values", correct: false },
        { option: "To declare a new variable", correct: false },
      ],
    },
    {
      question: "How do you comment in JavaScript?",
      answers: [
        { option: "// This is a comment", correct: true },
        { option: "<!-- This is a comment -->", correct: false },
        { option: "/* This is a comment */", correct: false },
        { option: "** This is a comment **", correct: false },
      ],
    },
    {
      question: "Describe the concept of data types in JavaScript.",
      answers: [
        { option: "The size of the variable", correct: false },
        { option: "The amount of data a variable can hold", correct: false },
        { option: "The type of content a variable can store", correct: true },
        { option: "The shape of the variable", correct: false },
      ],
    },
    {
      question: "How do you convert a string to an integer in JavaScript?",
      answers: [
        { option: "convert.stringToInt()", correct: false },
        { option: "parseInt()", correct: true },
        { option: "Number()", correct: false },
        { option: "toInteger()", correct: false },
      ],
    },
    {
      question: "What is the difference between == and === operators?",
      answers: [
        { option: "== performs type and value equality, === performs only value equality", correct: false },
        { option: "== performs strict value equality, === performs both type and value equality", correct: true },
        { option: "== is used for strings, === is used for numbers", correct: false },
        { option: "== is used for addition, === is used for subtraction", correct: false },
      ],
    },
    {
      question: "How can you prevent JavaScript code execution until the document is fully loaded?",
      answers: [
        { option: "Using the window.load() method", correct: false },
        { option: "Placing scripts at the top of the HTML file", correct: false },
        { option: "Using the document.ready() method", correct: false },
        { option: "Placing scripts at the bottom of the HTML file", correct: true },
      ],
    },
    {
      question: "How do you define a function in JavaScript?",
      answers: [
        { option: "define myFunction() {}", correct: false },
        { option: "function myFunction() {}", correct: true },
        { option: "create function myFunction() {}", correct: false },
        { option: "newFunction myFunction() {}", correct: false },
      ],
    },
    {
      question: "What is the purpose of the spread operator (...) in JavaScript?",
      answers: [
        { option: "It performs arithmetic operations", correct: false },
        { option: "It merges two arrays into one", correct: true },
        { option: "It multiplies all elements in an array", correct: false },
        { option: "It converts strings to numbers", correct: false },
      ],
    },
    {
      question: "What is the significance of the 'this' keyword in JavaScript?",
      answers: [
        { option: "It refers to the previous function call", correct: false },
        { option: "It represents the current date and time", correct: false },
        { option: "It refers to the global object", correct: false },
        { option: "It refers to the current object context", correct: true },
      ],
    },
    {
      question: "How do you handle asynchronous operations in JavaScript?",
      answers: [
        { option: "Using loops", correct: false },
        { option: "Using callbacks, promises, or async/await", correct: true },
        { option: "By using global variables", correct: false },
        { option: "By using synchronous functions", correct: false },
      ],
    },
    {
      question: "What is a closure in JavaScript?",
      answers: [
        { option: "A variable that holds an entire HTML document", correct: false },
        { option: "A function that has access to its own variables and variables in its containing function's scope", correct: true },
        { option: "A type of loop in JavaScript", correct: false },
        { option: "A method for importing external libraries", correct: false },
      ],
    },
    {
      question: "What does the 'strict mode' in JavaScript do?",
      answers: [
        { option: "It enforces strict security measures in the browser", correct: false },
        { option: "It ensures that code is executed in the strict order it is written", correct: false },
        { option: "It enables enhanced debugging and error reporting", correct: true },
        { option: "It prevents certain data types from being used", correct: false },
      ],
    },
    {
      question: "What is the purpose of the fetch() function in JavaScript?",
      answers: [
        { option: "To modify the style of HTML elements", correct: false },
        { option: "To create animations and transitions", correct: false },
        { option: "To fetch resources from the network and make API requests", correct: true },
        { option: "To manipulate the DOM directly", correct: false },
      ],
    },
    {
      question: "How do you create a new array by applying a function to each element of an existing array?",
      answers: [
        { option: "Using the reduce() method", correct: false },
        { option: "Using the map() method", correct: true },
        { option: "Using the filter() method", correct: false },
        { option: "Using the forEach() method", correct: false },
      ],
    },
    {
      question: "What is the purpose of the try...catch statement in JavaScript?",
      answers: [
        { option: "To define loops in JavaScript", correct: false },
        { option: "To handle errors and exceptions", correct: true },
        { option: "To create custom functions", correct: false },
        { option: "To generate random numbers", correct: false },
      ],
    },
    {
      question: "What is a promise in JavaScript?",
      answers: [
        { option: "A guarantee that code will execute without errors", correct: false },
        { option: "A declaration of a future action or outcome", correct: false },
        { option: "An object representing the eventual completion or failure of an asynchronous operation", correct: true },
        { option: "A type of conditional statement", correct: false },
      ],
    }
  ]
  
  return (
    <div>
      
    </div>
  )
}

export default javaQuest