const questions = {

javascript: [
{
question: "What is closure?",
answer: "A function that remembers outer scope."
},
{
question: "What is Promise?",
answer: "Object representing async completion."
},
{
question: "What is let?",
answer: "Block scoped variable."
}
],

html: [
{
question: "What does HTML stand for?",
answer: "Hyper Text Markup Language"
},
{
question: "Tag for link?",
answer: "<a>"
},
{
question: "Tag for image?",
answer: "<img>"
}
],

css: [
{
question: "Property for text color?",
answer: "color"
},
{
question: "Flexbox display value?",
answer: "display:flex"
},
{
question: "Center element horizontally?",
answer: "margin:auto"
}
]

}



const startbtn=document.getElementById('start-btn');
const topic=document.getElementById('topic');
const count=document.getElementById('count');

const setup=document.getElementById('setup');
const flashCardArea=document.getElementById('flashcard');
const resultArea=document.getElementById("result");

const question = document.getElementById("question");
const answer=document.getElementById("answer");

const correctBtn=document.getElementById("correctbtn");
const wrongbtn=document.getElementById("wrongbtn");

const scoretext=document.getElementById("scoreText");
const restartbtn=document.getElementById("restart");

