//by Jason Rowe - jasonrowe.com @jsonrow 2013
//Given a triangle with points (x1, y1, x2, y2, x3, y3),
// calculates angles A,B,C and edges a,b,c
//
//
//     lower case a,b,c are the edges
//     upper case A,B,C are angles
//            (x1, y1)
//               /\
//            b / C\ a
//             /    \
//            /      \
//    (x2,y2)/A______B\(x3, y3)
//               c
function TrianglePointsToDegrees(x1, y1, x2, y2, x3, y3){
	
    //distance formula to find lengths between points
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
	edgeA.points = [point3, point1];
	edgeA.distance = lineDistance(point3, point1);

	this.edgeA = function(){
		return edgeA;
	};

	var edgeB = {};
	edgeB.points = [point1, point2];
	edgeB.distance = lineDistance(point1, point2);

	this.edgeB = function(){
		return edgeB;
	};

	var edgeC = {};
	edgeC.points = [point2, point3];
	edgeC.distance = lineDistance(point2, point3);

	this.edgeC = function(){
		return edgeC;
	};

    var sidea = edgeA.distance;
    var sideb = edgeB.distance;
    var sidec = edgeC.distance;

   log("calc angles");

	var anga = Math.acos((-sidea*sidea+sideb*sideb+sidec*sidec)/(2*sideb*sidec));
	var angb = Math.acos((-sideb*sideb+sidea*sidea+sidec*sidec)/(2*sidea*sidec));
	var angc = Math.acos((-sidec*sidec+sidea*sidea+sideb*sideb)/(2*sidea*sideb));

	this.aDegree = function(){
		return anga*180/Math.PI;
	};

	this.bDegree = function(){
		return angb*180/Math.PI;
	};

	this.cDegree = function(){
		return angc*180/Math.PI;
	};
}