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

	var triangle = new TrianglePointsToDegrees(1, 3, -2, -2, 3, -1);

	assert(triangle.edgeA().points.length === 2, "points were created")

	//check distance calculation
	var distance = triangle.edgeB().distance;
	assert(distance === 5.830951894845301, "lenth of edge b calculated")

	var distance = triangle.edgeC().distance;
	assert(distance === 5.0990195135927845, "lenth of edge c calculated")

	var distance = triangle.edgeA().distance;
	assert(distance === 4.47213595499958, "lenth of edge a calculated")

    var aDegree = triangle.aDegree();
	assert(aDegree === 47.72631099390629, "Degree of angle A calculated")

    var bDegree = triangle.bDegree();
    assert(bDegree === 74.74488129694222, "Degree of angle B calculated")

    var cDegree = triangle.cDegree();
    assert(cDegree === 57.528807709151515, "Degree of angle C calculated")
};