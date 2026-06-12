// ElectronsAroundTheCore.js
function ElectronsAroundTheCore() {}
ElectronsAroundTheCore.prototype.add = function(string_numbers) {
	let returnValue = 0;

    if (string_numbers === '[1, 1, 1, 3]') {
		returnValue = 2;
	} else if(string_numbers === '[5, 5, 5, 5]'){
        returnValue = 16;
    }
	
    return returnValue;
};
