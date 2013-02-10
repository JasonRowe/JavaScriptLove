//Tests for trianglePointsToDegrees.js file

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

	var triangle = new TrianglePointsToDegrees(1,3,-2,-2,3,3);

	assert(triangle.edgeA().points.length === 2, "points were created")

	//check distance calculation
	var distance = triangle.edgeA().distance;
	assert(distance === 5.830951894845301, "lenth was calculated")
};