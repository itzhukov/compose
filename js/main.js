import chai from 'chai';

function compose() {
	let args = arguments;
	let start = args.length-1;

	return function() {
		let i = start;
		let result = args[start].apply(this, arguments);

		while (i--) {
			console.log(result);
			result = args[i].call(this, result);
		}

		return result;
	};
}

function mult(a) {
	return a*2;
}

let composed = compose(Math.round, parseFloat, mult)('72.5');
let check = Math.round(parseFloat(mult('72.5')));

console.info('composed', composed);
console.info('check', check);

chai.assert.equal(composed, check, 'Error in `compose` function');