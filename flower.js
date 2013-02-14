// by Jason Rowe - jasonrowe.com @jsonrow
function Flower(thee, numberOfPetals) {
    var petals = numberOfPetals;

    if(!petals && petals !== 0){
        petals = Math.floor(Math.random()* 5) + 5;
    }

    var originalTotalNumberOfPetals = petals;

    this.totalPetals = function () {
        return originalTotalNumberOfPetals;
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

    var love = false;

    this.toggleLove = function(){
        love = !love;
        return love;
    };

    this.isItLove = function(){
        return love;
    };

    this.result = function(){
        var message;

        if(this.toggleLove()){
            message = thee + " loves me";
        }
        else{
            message = thee + " loves me not";
        }

        return message;
    };
}