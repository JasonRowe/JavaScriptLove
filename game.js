// prototype of love me, love me not game 
// by Jason Rowe - jasonrowe.com @jsonrow

// jslint implied globals list
/*global $ log event*/

// Introduction
$(function() {
    // setup click event for submit
    $("#start").click(function() {
        event.preventDefault();
		log("Handler for start .click() called.");

        var gameValues = new PlayerSelectedValues();
        log("Game Values Created");

        var flower = new Flower(gameValues.sex());
        log("Flower Created");
        log("# of Flower Petals " + flower.petals());

        RemoveIntro();

        //setup petals and click event handlers
        FlowerView(flower, gameValues);
	});
});

function FlowerView(flowerData, gameValues){

    var loveOrNot$ = $("#loveOrNot");

    if (typeof (Raphael) !== "function") {
        // no Raphael!
        throw "interactions: Raphaël not found. Please ensure Raphael.js is referenced before the interactions.js file.";
    }

    this.r = Raphael(flower, 100, 100);

    for(var i = 0; i < flowerData.petals(); i++){
        log("creating petal");

        //create unique petalId...
        var petalId = "petal" + i;

        //append new petal with id
        $("#gameArea").append("<div id='"+ petalId +"'>Petal</div>");

         //create div and add handler for id
        $("#" + petalId).on("click", function(){ 
            flowerData.removePetal();
            $(this).remove();
            log("removed petal, now only " + flowerData.petals() + " left");

            //show love message
            loveOrNot$.html(flowerData.result());

            if(flowerData.petals() == 0)
            {
                GameOver(flowerData, gameValues);
            }
        }); 
    }
};

function GameOver(flowerData, gameValues){
    log("game over");

    var finalWords = "Ah, " + gameValues.name() + " loves you!";

    if(!flowerData.isItLove())
    {
        finalWords = "Oh dear, " + gameValues.name() + " should make this up to you!";
    }

    $("#loveNote").append("<h1>" + finalWords + "</H1>");
};

function RemoveIntro(){
    $("#intro").hide();
}

function PlayerSelectedValues() {
    var sex = $('input[name=sex]:radio:checked').val();

    log("selected sex was " + sex);

    var name$ = $('#name');

    //set a default value for name
    var name = "someone";

     if(name$)
     {
        var nameValue = name$.val();

        if(nameValue)
        {
            name = name$.val();
        }

        log("selected name was " + name);
    }

    this.name = function()
    {
        return name;
    };

    this.sex = function()
    {
        return sex;
    };
}
