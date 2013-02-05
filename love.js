//jslint implied globals list
/*global window*/

//Introduction
window.onload = function(){
    //get selected sex

    //get selected name for final message

    //create flower 

    //setup petal event handlers
};

//prototype of love me, love me not game
function flower(thee, numberOfPetals) {

    var petals = numberOfPetals;

    if(!petals && petals !== 0){
        petals = Math.floor(Math.random()* 5) + 5;
    }

    this.removePetal = function(){
        
        if(petals > 0){
            petals = petals - 1;
        }
        
        return petals;
    };

    this.petals = function(){
        return petals;
    };

    this.result = function(){

        var message;

        if(petals % 2 === 0){
            message = thee + " loves me";
        }
        else{
            message = thee + " loves me not";
        }

        return message;
    };
}