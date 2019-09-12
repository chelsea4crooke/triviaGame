$(document).ready(function () {
        // Question, answer, image arrays
        var questions = [
            {
                 question: "Which of the following IS a color visible in the visible light spectrum?",
                 options: ["White" , "Teal" , "Red" , "Pink"],
                 correctAnswer: 2,
                 image: "<img src='assets/images/question1.webp'>"
                },
            {
                 question: "All of the following are types of electromagnetic radiation EXCEPT (       ).",
                 options: ["X-rays" , "Ultraviolet Light" , "Infared Light" , "Florescent Light"],
                 correctAnswer: 3,
                 image: "<img src='assets/images/question2.jpeg'>"
                },
            {
                 question: "Which color has the longest wavelength?",
                 options: ["Red" , "Blue" , "Violet" , "Yellow"],
                 correctAnswer: 0,
                 image: "<img src='assets/images/question3.webp'>"
                },
             {
                 question: "(Blank) rays are used to kill bacteria and other microbes. ",
                 options: ["X-rays" , "Infared Rays" , "Ultraviolet Rays" , "Gamma Rays"],
                 correctAnswer: 3,
                 image: "<img src='assets/images/question4.webp'>"
                },
            {
                 question: "Who discovered radio waves?",
                 options: ["Thomas Edison" , "Heinrich Hertz" , "Alexander Graham Bell" , "Edwin Hubble"],
                 correctAnswer: 1,
                 image: "<img src='assets/images/question5.jpeg'>"
                },
            {
                 question: "Which color has the shortest wavelength?",
                 options: ["Violet" , "Red" , "Blue" ,"Yellow"],
                 correctAnswer: 0,
                 image: "<img src='assets/images/question6.webp'>"
                },
            {
                 question: "Which type of electromagnetic wave has the longest wavelength?",
                 options: ["Gamma waves" , "Radio Waves" , "Microwaves" , "Visible Light Waves"],
                 correctAnswer: 1,
                 image: "<img src='assets/images/question7.webp'>"
                },
            {
                 question: "Who discovered X-rays?",
                 options: ["Wilhelm Roentgen" , "Albert Einstein" , "Isaac Newton" , "Nikola Tesla"],
                 correctAnswer: 0, 
                 image: "<img src='assets/images/question8.jpeg'>"
                },
            {
                 question: "(       ) is used in cameras for night vision and in medical treatments.", 
                 options: ["Ultraviolet Rays" , "X-rays" , "Gamma Rays" , "Infared Rays"],
                 correctAnswer: 3,
                 image: "<img src='assets/images/question9.jpeg'>"
                },
            {
                 question: "The microwave was accidentally created during WWII from radar technology.",
                 options: ["True" , "False"],
                 correctAnswer: 0,
                 image: "<img src='assets/images/question10.webp'>"
                },
        ]
    
        console.log(questions);

 var correct= 0;
 var incorrect= 0;
 var unansweredCount= 0;
 var timer= 45;
 var intervalId;
 var userGuesses="";
 var running= false;
 var questionCounter= questions.length;
 var pick;
 var index;
 var newArray= [];
 var holder= [];

 // Hide the reset button
 $("#resetButton").hide(); 

 // Click start button to begin game
 $("#startButton").on("click" , function (){
     $("#startButton").hide();
     displayQuestion ();
     runTimer();
     for(var i = 0; i < questions.length; i++){
         holder.push(questions[i]);
     }
 });
 $(".answerButton").on("click", function (){
     runTimer();
     });
 console.log(questions.length);
 // Start timer
function runTimer(){
    if(!running){
        intervalId= setTimeout(decrement, 2000);
        running= true;
        runTimer.text("timeBox: " + runTimer);
    }
}
// Timer countdown
function decrement() {
    $("#timerBox").html("<h3>Time left: " + timer + "</h3>");
    timer--;

    //Stop timer if it reaches 0
    if(timer === 0){
        unansweredCount++;
        stop ();
        $("#questionBox").html("<p> OOOHHHH Times Up! The correct answer is: " + pick.options[pick.correctAnswer] + "</p>");
    };
}
// Stop timer
function stop (){
    running= false;
    clearInterval(intervalId);
}   
// To randomly pick a question in questions array if not already shown, 
//display question and loop through all questions and display possible answers
function displayQuestion (){
    index= Math.floor(Math.random() * questions.length);
    pick= questions[index];

    console.log(index);
    console.log(pick);
    
    $("#questionBox").html("<h2>" + pick.question + "</h2>");
    for(var i = 0; i < pick.question.length; i++){
        var userGuesses= $("<div>");
        userGuesses.addClass("options");
        userGuesses.html(pick.options[i]);
        userGuesses.attr("data-guessvalue", i);
        $("#questionBox").append(userGuesses);
    };
}
// Selecting answer on clicks ect
$(".answerButton").on("click" , function(){
    userGuesses= parseInt($(this).attr("data-guessvalue"));
    if(userGuesses === pick.correctAnswer){
        stop();
        correct++;
        userGuesses= "";
        hidepicture ();
        $("#answerBox").html("<p>Correct!</p>");
    }else{
        stop();
        incorrect++;
        userGuesses="";
        hidepicture ();
        $("#answerBox").html("<p>Nope not that one. The correct answer is: " + pick.options[pick.correctAnswer] + "</p>");
    }
    console.log(userGuesses);
});

});

    
   