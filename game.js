// prototype of love me, love me not game 
// by Jason Rowe - jasonrowe.com @jsonrow

// jslint implied globals list
/*global $ log event*/

// Introduction
$(function() {

    function startGame(){
        log("Handler for start .click() called.");

        var gameValues = new PlayerSelectedValues();
        log("Game Values Created");

        var flower = new Flower(gameValues.sex());
        log("Flower Created");
        log("# of Flower Petals " + flower.petals());

        RemoveIntro();

        //setup petals and click event handlers
        FlowerView(flower, gameValues);
    };

    // setup click event for submit
    $("#start").click(function(event) {
        event.preventDefault();
        startGame();
	});

     $("#name").keypress(function(e) {
        var code = (e.keyCode ? e.keyCode : e.which);

        if (code == 13) {
            startGame();
            return false;
        }
    });
});

function FlowerView(flowerData, gameValues){

    var loveOrNot$ = $("#loveOrNot");

    if (typeof (Raphael) !== "function") {
        // no Raphael!
        throw "interactions: Raphaël not found. Please ensure Raphael.js is referenced before the interactions.js file.";
    }

    this.paper = Raphael(flower, 350, 650);

    var stem = this.paper.path("M 150 150, Q 210 227 150 300 Q 70 400 150 450")
    stem.attr({stroke:'#47D147',"stroke-width":5});

    stem.attr("width", 5);
    for(var i = 0; i < flowerData.petals(); i++){
        log("creating petal");

        // Creates circle Polar coordinate system

        var radius = 83;
        var centerX = 170;
        var centerY = 160;
        var xPosition = radius * Math.cos(2 * Math.PI * i / flowerData.petals()) + centerX;
        var yPosition = radius * Math.sin(2 * Math.PI * i / flowerData.petals()) + centerY;

        var ellipseHeight = 70;
        var petalEllipse = this.paper.ellipse(xPosition, yPosition, 30, ellipseHeight);

        var angle = null;

        if(xPosition !== centerX){

            var triangle = new TrianglePointsToDegrees(xPosition, yPosition, centerX, centerY, xPosition, yPosition + ellipseHeight)
        
            //the following needs
            if(xPosition > centerX){
                angle = triangle.cDegree();
            }
            else if(xPosition < centerX && yPosition < centerY){
                angle = -triangle.cDegree();
            }
            else if(xPosition !== centerX){
                angle = -triangle.cDegree();
            }
        }

        //rotate ellipse around center
        if(angle){
            petalEllipse.transform("r" + angle);
        }

        // Sets the fill attribute of the circle to red (#f00)
        var color = Raphael.getColor(0.82);
        petalEllipse.attr("fill", "#fff");

        // Sets the stroke attribute of the circle to white
        petalEllipse.attr("stroke", "#000");
        petalEllipse.attr("stroke-opacity", 0.1);

        petalEllipse.click( function(){ 
            flowerData.removePetal();
            this.remove();
            log("removed petal, now only " + flowerData.petals() + " left");

            //show love message
            loveOrNot$.html(flowerData.result());

            if(flowerData.petals() == 0)
            {
                GameOver(flowerData, gameValues);
            }
        });
    }

    var flowerCenter = this.paper.circle(centerX, centerY, 25);

    // Sets the fill attribute of the center circle 
    flowerCenter.attr("fill", "#EBEB65");

    // Sets the stroke attribute of the circle to white
    flowerCenter.attr("stroke", "#fff");
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
