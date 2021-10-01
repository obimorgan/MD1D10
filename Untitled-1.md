<!--
        QUIZ GAME!

        RULES:
        / The player must guess correctly a certain amount of questions
        / Each correct answer gives him one point
        / Answers could be multiple or true/false
        / At the end of the game, the user must know his/her total score

        QUESTIONS:
        / You can get them from this URL ( http://bit.ly/strive_QUIZZ ) or you can write your own
        / Could be multiple of boolean (true / false)

        HINTS:
        / Keep a global variable score for the user score // score cn be kept in an object

        / Keep a variable questionNumber for the question the user is answering // const questionNumber = [q1,q2]
        
        / When questionNumber is bigger then the available questions, present the score // questionNumber > score
        
        / Start working with the questions saved in a variable (or you can use AJAX for fetching external questions if you already know how to do it!)
        const q1 = {
            answer1 : "xyz",            
            answer1 : "xyz", 
            answer1 : "xyz", 
            answer1 : "xyz",         
        }
        / Start with the easier version and THEN implement the EXTRAs
        
        / Please debug everything / try it on the console to be sure of what to expect from your code

        EXTRA:
        / Show if the answer provided was the wrong one or correct it after clicking
        / Present the questions one at a time instead of having all of them displayed together
        / Let the user select difficulty and number of questions (you can get q/a from https://opentdb.com/api.php?amount=10&category=18&difficulty=easy modifying amount and difficulty)
    
        /* WHEN YOU ARE FINISHED
          Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
        */
            {
        q1:"What is 3 + 6",
        answers: [
            {a1: 3, correct: false },
            {a2: 1, correct: false},
            {a3: 7, correct: false},
            {a4: 9, correct: true}
        ]
    },
    {
        q1:"What is 10 - 7",
        answers: [
            {a1: 3, correct: true},
            {a2: 1, correct: false},
            {a3: 7, correct: false},
            {a4: 9, correct: false}
        ]
    },
    {
        q1:"What is 3 + 2",
        answers: [
            {a1: 3, correct: false },
            {a2: 1, correct: true},
            {a3: 7, correct: false},
            {a4: 9, correct: false}
        ]
    },
    -->