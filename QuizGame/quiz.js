let questionBook = [
    {
        id: "qa-1",
        question: "What is the full form of DOM ?",
        options:[
            "Domain Object Model",
            "Digital Object Model",
            "Documnet Object Model",
            "None of these"
        ],
        correctAns:"Documnet Object Model"
    },{
        id: "qa-2",
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "int",
            "var",
            "string",
            "define"
        ],
        correctAns: "var"
    },{
        id: "qa-3",
        question: "Which method is used to display output in the browser console?",
        options: [
            "print()",
            "display()",
            "console.log()",
            "document.write()"
        ],
        correctAns: "console.log()"
    },{
        id: "qa-4",
        question: "Which of the following is a primitive data type in JavaScript?",
        options: [
            "Array",
            "Object",
            "String",
            "Function"
        ],
        correctAns: "String"
    },{
        id: "qa-5",
        question: "Which operator is used to check both value and data type?",
        options: [
            "==",
            "===",
            "=",
            "!="
        ],
        correctAns: "==="
    },{
        id: "qa-6",
        question: "Which method is used to find the length of a string?",
        options: [
            "size()",
            "length()",
            "length",
            "count()"
        ],
        correctAns: "length"
    },{
        id: "qa-7",
        question: "Which keyword is used to declare a constant variable?",
        options: [
            "var",
            "let",
            "const",
            "static"
        ],
        correctAns: "const"
    },{
        id: "qa-8",
        question: "Which method is used to add an element at the end of an array?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        correctAns: "push()"
    },{
        id: "qa-9",
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: [
            "<!-- -->",
            "//",
            "/* */",
            "#"
        ],
        correctAns: "//"
    }
];

let questionElement = document.querySelector("#question");
let optionElement = document.querySelector("#options");
let scoreElement = document.querySelector("#score");
let score = 0;
let currentQuestion = 0;

// console.log(questionElement,optionElement,scoreElement);

function displayQuestion() {
    
    let {id,question,options,correctAns} = questionBook[currentQuestion];
    console.log(id,question,options,correctAns);
    questionElement.textContent=question;
    scoreElement.textContent=`Score = ${score}/${questionBook.length}`
    options.map((opt)=>{
        let btn = document.createElement("button");
        btn.textContent=opt;
        btn.setAttribute("class","btn");
        optionElement.append(btn);
        btn.addEventListener("click",()=>{
            if(opt==correctAns){
                btn.style.backgroundColor="green"
                btn.style.color="white"
                score+=1;
            }else{
                btn.style.backgroundColor="red"
                btn.style.color="white"
                score-=0.25;
            }
            console.log(score);
            scoreElement.textContent=`Score : ${score}/${questionBook.length}`
            setTimeout(()=>{
                nextQuestion();
            },1000);
            
            let allbutton = document.querySelectorAll(".btn");
            console.log(allbutton);
            allbutton.forEach((v) => (v.disabled = true));
            
        })
    });
    
}

displayQuestion()

function nextQuestion() {
    currentQuestion++;
    optionElement.innerText ="";
    if(currentQuestion == questionBook.length){
        questionElement.innerHTML = "Quiz Completed Successfully";
        scoreElement.innerHTML = `You Scored ${score} out of ${questionBook.length}`
        document.getElementById("nextButton").style.display="none";
    }else{
        displayQuestion()
    }
}