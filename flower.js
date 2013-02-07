function Flower(thee, numberOfPetals) {
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

    this.isItLove = function(){
        return petals % 2 === 0;
    };

    this.result = function(){
        var message;

        if(this.isItLove()){
            message = thee + " loves me";
        }
        else{
            message = thee + " loves me not";
        }

        return message;
    };
}