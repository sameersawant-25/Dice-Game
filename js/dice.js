var noOfButton = document.querySelectorAll(".dice").length;
var randomNo1;
var randomNo2;

//dice1
    document.querySelector("h3").innerHTML = "Player 1 click on dice";
    document.querySelectorAll(".dice")[0].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;
        
        if(buttonInnerHTML){
            randomNo1 = Math.floor(Math.random() * 6) + 1;

            var randomDiceImage = "dice" + randomNo1 + ".png";

            var randomImageSource = "images/" + randomDiceImage;

            var image1 = document.querySelectorAll("img")[0];

            image1.setAttribute("src", randomImageSource);
            
            document.querySelector("h3").innerHTML = "Player 2 click on dice";
        }
});

//dice2
document.querySelectorAll(".dice")[1].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;
        
    if(buttonInnerHTML){
        randomNo2 = Math.floor(Math.random() * 6) + 1;

        var randomDiceImage2 = "dice" + randomNo2 + ".png";

        var randomImageSource2 = "images/" + randomDiceImage2;

        var image2 = document.querySelectorAll("img")[1];

        image2.setAttribute("src", randomImageSource2);
        
        //compare
        if (randomNo1 > randomNo2 ) {
            document.querySelector("h1").innerHTML = "Player 1 Wins";
        }
        else if(randomNo1 < randomNo2){
            document.querySelector("h1").innerHTML = "Player 2 Wins";
        }
        else{
            document.querySelector("h1").innerHTML = "Match tied";
        }
        
        document.querySelector("h3").innerHTML = "Player 1 click on dice";
    }
});