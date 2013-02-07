//Tests for love.js file

//simple assertion function
function assert(value, desc){
	var li = document.createElement("li");
	li.className = value ? "pass" : "fail";
	li.appendChild(document.createTextNode(desc));
	document.getElementById("results").appendChild(li);
}

window.onload = function(){
	//sanity test
	assert(true, "the test suite is running.");

	//can create flower
	var myFlower = new Flower("she", 10);
	
	//get number of petals which should be 10
    var origPetalCount = myFlower.petals();
	
	//assert that we have the expected 10 petals
	assert(origPetalCount === 10, "the number of petals is correct - " + origPetalCount);

	//can get she loves me result when we have even number of petals (10)
	var expectedMessage = "she loves me";
	var actualMessage = myFlower.result();

	//can pick a petal which will remove one from 10 leaving 9
	var expectedCount = 9;
	var actualCount = myFlower.removePetal();
	assert(expectedCount === actualCount, "removed a petal expectedCount " + expectedCount + " actual " + actualCount);

    //test totalPetals()
	assert(origPetalCount == myFlower.totalPetals(), "should still be able to retrieve original total petal count for calculations")

	//assert the message has now changed
	var expectedMessage = "she loves me not";
	var actualMessage = myFlower.result();

	assert(expectedMessage === actualMessage, "she loves me not");
	assert(myFlower.isItLove() === false,"it should not be love");
	
	//can create flower with zero petals
	var myFlowerWithoutPetals = new Flower("she", 0);
	assert(myFlowerWithoutPetals.petals() === 0, "removed a petal expectedCount " + 0 + " actual " + myFlowerWithoutPetals.petals());

	//try to remove a petal when the flower has zero petals
	var petalCountShouldNotBeNegative = myFlowerWithoutPetals.removePetal();
	assert(myFlowerWithoutPetals.petals() === 0, "removed a petal expectedCount " + 0 + " actual " + myFlowerWithoutPetals.petals());
}

