const questions_data=[
    {
        question: "What is the name of the weak zone of the earth’s crust?",
        a: "Seismic",
        b: "Cosmic",
        c: "Formic",
        d: "Anaemic",
        correct:'a'
    },{
        question: "Where was India's first national Museum opened?",
        a: "Delhi",
        b: "Hyderabad",
        c: "Rajasthan",
        d: "Mumbai",
        correct:'d'
    },{
        question: "The world’s nation 5G mobile network was launched by which country?",
        a: "Japan",
        b: "Asia",
        c: "South Korea",
        d: "Malaysia",
        correct:'c'
    },{
        question: "What is the capital of india?",
        a: "Kerala",
        b: "Lucknow",
        c: "Delhi",
        d: "None of them",
        correct:'c'
    }
    ]
const questionEl=document.getElementById("question");
const ans_a=document.getElementById("ans_a");
const ans_b=document.getElementById("ans_b");
const ans_c=document.getElementById("ans_c");
const ans_d=document.getElementById("ans_d");
let selectedEl=document.querySelectorAll('.answer');

// console.log(ans_a, ans_b,ans_c,ans_d);

let submitbtn=document.getElementById("submit");
let currentQuestion=0;

let correctQuestion=0;
let score=0;

loadQuiz();
function loadQuiz()
{
    deselect();
    let currentQuestionData=questions_data[currentQuestion];
    questionEl.innerText=currentQuestionData.question;
    
    ans_a.innerText=currentQuestionData.a;
    ans_b.innerText=currentQuestionData.b;
    ans_c.innerText=currentQuestionData.c;
    ans_d.innerText=currentQuestionData.d;
}

function getSelected()
{
    let answer=undefined;
    selectedEl.forEach((selectedEl)=>{
        if(selectedEl.checked)
        {
            answer=selectedEl.id;
        }
    })
    return answer;
}
function deselect()
{
    selectedEl.forEach((selectedEl)=>{
        selectedEl.checked=false;
    })
}
loadQuiz();
submitbtn.addEventListener("click",(e)=>{
   
    let answer=getSelected();
    if(answer){
        if(answer === questions_data[currentQuestion].correct)
        {
            score+=2;
            correctQuestion+=1;
        }
        currentQuestion++;
        if(currentQuestion>=questions_data.length)
            alert(`Quiz is completed successfully your correct Question is: ${correctQuestion}/${questions_data.length} and score is: ${score}/${questions_data.length*2} `);
        else
            loadQuiz();
    }
    else{
        alert("Please make any selection !!!");
    }
})