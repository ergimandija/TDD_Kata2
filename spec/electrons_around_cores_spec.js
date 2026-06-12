describe('Electrons Around The Core', function() {

	beforeEach(function() {

		calculator = new ElectronsAroundTheCore();

	});

	it('should return 0 for string "[1, 1, 1, 1]"', function() {

		expect(calculator.add('[1, 1, 1, 1]')).toEqual(0);

	});

});