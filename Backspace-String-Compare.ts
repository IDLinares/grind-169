// Problem: https://leetcode.com/problems/backspace-string-compare/description/
// Topics: Two-Pointers, Strings, Stack

function backspaceCompare(s: string, t: string): boolean {
	let string1: string[] = [];
	let string2: string[] = [];

	for (let char of s) {
		if (char === '#') {
			if (string1.length > 0) {
				string1.pop();
			} else {
				continue;
			}
		} else {
			string1.push(char);
		}
	}

	for (let char of t) {
		if (char === '#') {
			if (string2.length > 0) {
				string2.pop();
			} else {
				continue;
			}
		} else {
			string2.push(char);
		}
	}

	if (string1.toString() === string2.toString()) {
		return true;
	}

	return false;
}
