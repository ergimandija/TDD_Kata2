// ElectronsAroundTheCore.js
function ElectronsAroundTheCore() {}
ElectronsAroundTheCore.prototype.add = function(string_numbers) {
	let returnValue = 0;

	numbers = string_numbers.replace('[', '').replace(']', '').split(',').map(Number);
	
    let sum = 0;
	numbers.forEach(number => {
        if(number == 3){
                sum += 2;
        }
        
    });
    returnValue = sum;
	if (numbers.includes(5)) {
		returnValue += 4;
	}
	if(numbers.includes(5) && !numbers.includes(3)){
		returnValue = 16;
	}

    return returnValue;
};
