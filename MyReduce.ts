interface Array<T> {
	myReduce<U>(callbackFn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue?: U): U;
}

Array.prototype.myReduce = function (callbackFn, initialValue) {
	let acc;
	let i = 0;

	// 1. Determine the starting accumulator
	if (arguments.length >= 2) {
		acc = initialValue;
	} else {
		// We must find the first non-hole element
		let initialized = false;
		while (i < this.length) {
			if (i in this) {
				acc = this[i];
				initialized = true;
				i++; // Move to the next index for the actual reduction
				break;
			}
			i++;
		}

		// 2. Handle the "Empty Array" error
		if (!initialized) {
			throw new TypeError('Reduce of empty array with no initial value');
		}
	}

	// 3. The Reduction Loop
	while (i < this.length) {
		if (i in this) {
			acc = callbackFn(acc, this[i], i, this);
		}
		i++;
	}

	return acc;
};

[].myReduce((prev, curr) => prev + curr);
