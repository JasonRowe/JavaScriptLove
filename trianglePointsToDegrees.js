function TrianglePointsToDegrees(x1, y1, x2, y2, x3, y3){
	
    //use distance formula to find lengths between (x1,y1) (x2,y2) and (x3,y3) named a,b,c
	function lineDistance( point1, point2 ){
		var xs = 0;
		var ys = 0;

		xs = point2.x - point1.x;
		xs = xs * xs;

		ys = point2.y - point1.y;
		ys = ys * ys;

		return Math.sqrt( xs + ys );
	};

	log("create points");

	var point1 = {"x": x1, "y": y1};
	var point2 = {"x": x2, "y": y2};
	var point3 = {"x": x3, "y": y3};

	log("create triangle edges");

	var edgeA = {};

	edgeA.points = [point1, point2];
	edgeA.distance = lineDistance(point1, point2);
	edgeA.oppositPoint = point3;

	this.edgeA = function(){
		return edgeA;
	};

	var edgeB = {};

	edgeB.points = [point2, point3];
	edgeB.distance = lineDistance(point2, point3);
	edgeB.oppositPoint = point1;

	this.edgeB = function(){
		return edgeB;
	};

	var edgeC = {};

	edgeC.points = [point3, point1];
	edgeC.distance = lineDistance(point3, point1);
	edgeC.oppositPoint = point2;

	this.edgeC = function(){
		return edgeC;
	};

	//Begin by using the cosine rule to find the largest angle. 

	//The largest angle is always opposite to the largest side, so this is angle 
		//
}