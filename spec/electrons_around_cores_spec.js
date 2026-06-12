describe('Electrons Around The Core', function() {

	beforeEach(function() {

		calculator = new ElectronsAroundTheCore();

	});

	it('should return 0 for string "[1, 1, 1, 1]"', function() {

		expect(calculator.add('[1, 1, 1, 1]')).toEqual(0);

	});

	it('should return 2 for string "[1, 1, 1, 3] => 2"',function(){
		expect(calculator.add('[1, 1, 1, 3]')).toEqual(2);
	});

	it('should return 16 for string "[5, 5, 5, 5]"',function(){
		expect(calculator.add('[5, 5, 5, 5]')).toEqual(16);
	});

	it('should return 6 for string "[1, 2, 3, 4, 5]"',function(){
		expect(calculator.add('[1, 2, 3, 4, 5]')).toEqual(6);
	});

	it('should return 4 for string "[2, 2, 3, 3]"',function(){
		expect(calculator.add('[2, 2, 3, 3]')).toEqual(4);
	});

});