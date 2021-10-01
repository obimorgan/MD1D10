let questions = [
    {
        question: "What is 1 + 6?",
        answers: [
            {text: "3", correct: false},
            {text: "2", correct: false},
            {text: "7", correct: true},
            {text: "9", correct: false}
        ]
    }

]
const currentQuestionIndex = 0

const displayQuestion = function () {
    const questionElement = document.getElementById("questions")
    questionElement.innerText = questions.question
    


    //display answers
    // const answerElement = document.getElementById("answer-btn")
    // for (answers[i] = 0; i < answers[i].length; answers[i]++) {
    //     const button = document.createElement("button")
    //     button.classList.add('btn')
    //     answerElement.appendChild(button)

    // } doesnt work.Wrong loop

    questions[0].answers.forEach (answers => { 
        const answerElement = document.getElementById("answer-btn")
        const button = document.createElement("button")
        button.innerText = questions[0].answers[0].text.innerText
        button.classList.add("btn")
        answerElement.appendChild(button)
    });

    
}


window.onload = function() {
    displayQuestion()
}


// const questions = {
//     q1: "What is 2 + 9",
//     q2: "What is 2 + 9",
//     q3: "What is 2 + 9",
//     q4: "What is 2 + 9",
//     q5: "What is 2 + 9",
//     q6: "What is 2 + 9",
// }
// const answers = [
//     {q1 : [
//         {ans: "11", correct: true},
//         {ans: "68", correct: false},
//         {ans: "10", correct: false},
//         {ans: "8", correct: false}
//     ]}
// ]
// const displayQuestion = function () {
//     const questionElement = document.getElementById("questions")
//     questionElement.innerHTML = questions.q1
    
//     answers.q1.forEach (q1 => { 
//         const answerElement = document.getElementById("answer-btn")
//         const button = document.createElement("button")
//         button.innerText = q1.ans.innerText
//         button.classList.add("btn")
//         answerElement.appendChild(button)
//     });
    

// }


// window.onload = function() {
//     displayQuestion()
// }


