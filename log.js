function log(){
   var alertFallback = false;

	try{
		console.log.apply(console, arguments);
	}
	catch(e){
		try{
			opera.postError.apply(opera, arguments);
		}
		catch(e){
			if(alertFallback){
				alert(Array.prototype.join.call(arguments, " "));
			}
		}
	}
}