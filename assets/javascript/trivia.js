$(document).ready(function () {
    var card = $("#questionBox");
    var countStartNum = 30;
            // Questions, answer, image arrays//
    var questions = [{
        question: "Which of the following IS a color visible in the visible light spectrum?",
        options: ["White" , "Teal" , "Red" , "Pink"],
        correctAnswer: "Red",
        image: "<img src='../images/quest1.jpeg'>"
        }, {
        question: "All of the following are types of electromagnetic radiation EXCEPT (________).",
        options: ["X-rays" , "Ultraviolet Light" , "Infared Light" , "Florescent Light"],
        correctAnswer: "Florescent Light",
        image: "assets/images/question2.jpeg"
        },  {
        question: "Which color has the longest wavelength?",
        options: ["Red" , "Blue" , "Violet" , "Yellow"],
        correctAnswer: "Red",
        image: "assets/images/quest3.html"
        }, {
        question: "(______) rays are used to kill bacteria and other microbes. ",
        options: ["X-rays" , "Infared Rays" , "Ultraviolet Rays" , "Gamma Rays"],
        correctAnswer: "Gamma Rays",
        image: "assets/images/quest4.jpeg",
        }, {
        question: "Who discovered radio waves?",
        options: ["Thomas Edison" , "Heinrich Hertz" , "Alexander Graham Bell" , "Edwin Hubble"],
        correctAnswer: "Heinrich Hertz",
        image: "assets/images/question5.jpeg",
        }, {
        question: "Which color has the shortest wavelength?",
        options: ["Violet" , "Red" , "Blue" ,"Yellow"],
        correctAnswer: "Violet",
        image: "assets/images/quest6.gif"
        }, {
        question: "Which type of electromagnetic wave has the longest wavelength?",
        options: ["Gamma waves" , "Radio Waves" , "Microwaves" , "Visible Light Waves"],
        correctAnswer: "Radio Waves",
        image: "assets/images/quest7.html"
        },  {
        question: "Who discovered X-rays?",
        options: ["Wilhelm Roentgen" , "Albert Einstein" , "Isaac Newton" , "Nikola Tesla"],
        correctAnswer: "Wilheml Roentgen", 
        image: "assets/images/question8.jpeg"
        },  {
        question: "(_____) is used in cameras for night vision and in medical treatments.", 
        options: ["Ultraviolet Rays" , "X-rays" , "Gamma Rays" , "Infared Rays"],
        correctAnswer: "Infared Rays",
        image: "assets/images/question9.jpeg"
        }, {
        question: "The microwave was accidentally created during WWII from radar technology.",
        options: ["True" , "False"],
        correctAnswer: "True",
        image: "assets/images/quest10.html"
        }];
    // Var to hold setInterval//
    var timer;
    var game = {
        questions: questions,
        currentQuest: 0,
        counter: countStartNum,
        correct: 0,
        wrong: 0,

        countDown: function(){
            game.counter--;
            $("#timerSpot").text(game.counter);
            if(this.counter === 0){
                console.log("Times Up!");
                this.timesup();
            }
        },
        loadQuestion: function(){
            timer= setInterval(game.countDown, 1000);

            card.html("<h3>" + questions[this.currentQuest].question + "</h3>");

            for(var i=0; i < questions[this.currentQuest].options.length; i++){
                card.append("<button class= 'answer-btn' 'data-name='" + questions[this.currentQuest].options[i] + "'>" + questions[this.currentQuest].options[i] + "</button>");
            }
        },
        nextQuestion: function(){
            game.counter = countStartNum;
            $("#counter-num").text(game.counter);
            game.currentQuest ++;
            game.loadQuestion();
        },
        timeUp: function(){

            clearInterval(timer);

            $("#counter-num").html(game.counter);

            card.html("<h3> You're out of time!</h3>");
            card.append("<h4> The correct answer is: " + questions[this.currentQuest].correctAnswer);
            card.append(questions[this.currentQuest].image + "</h4>");

            if(game.currentQuest === questions.length - 1){
                setTimeout(game.results, 3 * 1000);
            }else{
                setTimeout(game.nextQuestion, 3 * 1000);
            }
        },

        results: function(){

            clearInterval(timer);

            card.html("<h3> All done, here's your stats </h3>");

            $("#counter-num").text(game.counter);

            card.append("<h4> Correct Answers: " + game.correct + "</h4>");

            card.append("<h4> Wrong Answers: " + game.wrong + "</h4>");

            card.append("<h4> Unanswered: " + (questions.length - (game.wrong + game.correct)) + "</h4>");

            card.append("<br><button id= 'start-over'> Try again? </button>");
        },
        clicked: function(e){
            clearInterval(timer);
            if($(e.target).attr("data-name") === questions[this.currentQuest].correctAnswer){
                this.answeredRight();
            }else{
                this.answeredWrong();
            }
        },
        answeredWrong: function(){

            game.wrong++;

            clearInterval(timer);

            card.html("<h3>MMM... Not really </h3>");
            card.append("<h3> The right answer was: " + questions[game.currentQuest].correctAnswer + "</h3>");
            card.append(questions[game.currentQuest].image);

            if(game.currentQuest === questions.length -1){
                setTimeout(game.results, 3 * 1000);
            }else{
                setTimeout(game.nextQuestion, 3 * 1000);
            }
        },
        answeredRight: function(){

            game.correct++;

            clearInterval(timer);

            card.html("<h3>YAY! Way to go, you smart!!</h3>");
            card.append(questions[game.currentQuest].image);

            if(game.currentQuest === questions.length - 1){
                setTimeout(game.results, 3 * 1000);
            }else{
                setTimeout(game.nextQuestion, 3 * 1000);
            }
        },
        reset: function(){
            this.currentQuest= 0;
            this.counter= countStartNum;
            this.correct= 0;
            this.wrong= 0;
            this.loadQuestion();
        }
    };
// Click Events //
    $(document).on("click", "#start-over", function(){
        game.reset();
    });

    $(document).on("click", ".answer-btn", function(e){
        game.clicked(e);
    });

    $(document).on("click", "#startButton", function(){
        $("#questionBox").prepend("<h2> Time left: <span id= 'counter-num'>30</span>seconds</h2>");
        game.loadQuestion();
        $("#starting").hide();
        $("#startButton").hide();
    });
});