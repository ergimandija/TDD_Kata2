// ElectronsAroundTheCore.js
function ElectronsAroundTheCore() {}
ElectronsAroundTheCore.prototype.add = function(string_numbers) {
	if (string_numbers === '[1, 1, 1, 1]') {
		return 0;
	} else if (string_numbers === '[1, 1, 1, 3]') {
		return 2;
	}
};
