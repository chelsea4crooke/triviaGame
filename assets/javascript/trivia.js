// $(document).ready(function() {

    // To track the current question being answered
    var questionCounter= 0;

    // Timer for each question is 45 seconds
    var timer= 45;

    // Track correct answers for end of game
    var correct= 0;

    // Track incorrect answers for end of game
    var incorrect= 0;

    // Question, answer, image arrays

    var questions = [
        {
            question: "Which of the following IS a color visible in the visible light spectrum?",
            options: ["White" , "Teal" , "Red" , "Pink"],
            correctAnswer: "Red",
            image: "<img src='assets/images/question1.webp'>"
        },
        {
            question: "All of the following are types of electromagnetic radiation EXCEPT (blank).",
            options: ["X-rays" , "Ultraviolet Light" , "Infared Light" , "Florescent Light"],
            correctAnswer: "Florescent Light",
            image: "<img src='assets/images/question2.jpeg'>"
        },
        {
            question: "Which color has the longest wavelength?",
            options: ["Red" , "Blue" , "Violet" , "Yellow"],
            correctAnswer: "Red",
            image: "<img src='assets/images/question3.webp'>"
        },
        {
            question: "(Blank) rays are used to kill bacteria and other microbes. ",
            options: ["X-rays" , "Infared Rays" , "Ultraviolet Rays" , "Gamma Rays"],
            correctAnswer: "Gamma Rays",
            image: "<img src='assets/images/question4.webp'>"
        },
        {
            question: "Who discovered radio waves?",
            options: ["Thomas Edison" , "Heinrich Hertz" , "Alexander Graham Bell" , "Edwin Hubble"],
            correctAnswer: "Heinrich Hertz",
            image: "<img src='assets/images/question5.jpeg'>"
        },
        {
            question: "Which color has the shortest wavelength?",
            options: ["Violet" , "Red" , "Blue" ,"Yellow"],
            correctAnswer: "Violet",
            image: "<img src='assets/images/question6.webp'>"
        },
        {
            question: "Which type of electromagnetic wave has the longest wavelength?",
            options: ["Gamma waves" , "Radio Waves" , "Microwaves" , "Visible Light Waves"],
            correctAnswer: "Radio Waves",
            image: "<img src='assets/images/question7.webp'>"
        },
        {
            question: "Who discovered X-rays?",
            options: ["Wilhelm Roentgen" , "Albert Einstein" , "Isaac Newton" , "Nikola Tesla"],
            correctAnswer: "Wilhelm Roentgen", 
            image: "<img src='assets/images/question8.jpeg'>"
        },
        {
            question: "(Blank) is used in cameras for night vision and in medical treatments.", 
            options: ["Ultraviolet Rays" , "X-rays" , "Gamma Rays" , "Infared Rays"],
            correctAnswer: "Infared Rays",
            image: "<img src='assets/images/question9.jpeg'>"
        },
        {
            question: "The microwave was accidentally created during WWII from radar technology.",
            options: ["True" , "False"],
            correctAnswer: "True",
            image: "<img src='assets/images/question10.webp'>"
        },
    ]
    console.log(questions);
// });