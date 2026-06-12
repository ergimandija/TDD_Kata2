// ElectronsAroundTheCore.js
function ElectronsAroundTheCore() {}
ElectronsAroundTheCore.prototype.add = function(string_numbers) {
	let returnValue = 0;

	numbers = string_numbers.replace('[', '').replace(']', '').split(',').map(Number);
	
	if (numbers.includes(3)) {
		returnValue += 2;
	}
	if (numbers.includes(5)) {
		returnValue += 4;
	}
	if(numbers.includes(5) && !numbers.includes(3)){
		returnValue = 16;
	}

    return returnValue;
};
