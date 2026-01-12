// Problem: https://leetcode.com/problems/decode-string/description/
// Topics: Stacks, Recursion, String

function decodeString(s: string): string {
	let stack: string[] = [];
	let tempStrings: string[] = [];
	let copiesString: string = '';
	let copies: number = 0;
	let decodedString = '';
	let curr = -1;
	let count = 0;

	while (count < s.length) {
		let char = s[count];
		if (/\d/.test(char)) {
			while (/\d/.test(char)) {
				copiesString += char;
				count++;
				char = s[count];
			}
			stack.push(copiesString);
			copiesString = '';
			continue;
		} else if (/[\[]/.test(char)) {
			stack.push(char);
			curr++;
			tempStrings[curr] = '';
		} else if (/[\]]/.test(char)) {
			stack.pop();
			copies = Number(stack.pop());
			if (curr < 1) {
				decodedString += tempStrings[curr].repeat(copies);
			} else {
				tempStrings[curr - 1] += tempStrings[curr].repeat(copies);
			}
			tempStrings[curr] = '';
			curr--;
		} else {
			if (stack.length === 0) {
				decodedString += char;
				count++;
				continue;
			}

			if (tempStrings[curr]) {
				tempStrings[curr] += char;
			} else {
				tempStrings[curr] = char;
			}
		}

		count++;
	}

	return decodedString;
}

function efficientDecode(s: string): string {
	let stack: [number, string][] = [];
	let currentString: string = '';
	let currentK: number = 0;

	for (let char of s) {
		if (char >= '0' && char <= '9') {
			currentK = currentK * 10 + Number(char);
		} else if (char === '[') {
			stack.push([currentK, currentString]);
			currentK = 0;
			currentString = '';
		} else if (char === ']') {
			let [k, previousString]: [number, string] = stack.pop()!;
			currentString = previousString + currentString.repeat(k);
		} else {
			currentString += char;
		}
	}

	return currentString;
}

function decodeString2(s: string): string {
	let decodedString: string = '';
	let index: number = 0;

	function recursiveDecode(i: number): [string, number] {
		let result: string = '';
		let multiplier: number = 0;
		while (i < s.length) {
			if (s[i] >= '0' && s[i] <= '9') {
				multiplier = multiplier * 10 + Number(s[i]);
			} else if (s[i] === '[') {
				let nestedString: string = '';
				[nestedString, i] = recursiveDecode(i + 1);
				result += nestedString.repeat(multiplier);
				multiplier = 0;
				continue;
			} else if (s[i] === ']') {
				break;
			} else {
				result += s[i];
			}
			i++;
		}
		return [result, i + 1];
	}

	[decodedString, index] = recursiveDecode(index);

	return decodedString;
}

let encodedString = '3[a]b]';
console.log(decodeString2(encodedString));
