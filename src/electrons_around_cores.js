// ElectronsAroundTheCore.js
function ElectronsAroundTheCore() {}
ElectronsAroundTheCore.prototype.add = function(string_numbers) {
	let returnValue = 0;

	numbers = string_numbers.replace('[', '').replace(']', '').split(',').map(Number);
	
	numbers.forEach(number => {
        if(number == 3){
                returnValue += 2;
        }
        else if(number == 5){
			returnValue += 4;
		}
    });

    return returnValue;
};
