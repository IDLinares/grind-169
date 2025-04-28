// Problem: https://leetcode.com/problems/valid-parentheses/description/
// Topic: Strings and Stacks

function isValid(s: string): boolean {
	// Creating an object to map opening and closing brackets for ease
	const validBrackets = {
		'}': '{',
		']': '[',
		')': '(',
	};

	// Stack to store keep track of most recently seen bracket
	let stack: string[] = [];

	for (let i = 0; i < s.length; i++) {
		// If it's an opening bracket, add it to the stack (LIFO)
		if (s[i] === '{' || s[i] === '(' || s[i] === '[') {
			stack.push(s[i]);
			continue;
		}

		// If it's a closing bracket, check the pop top of stack
		// Check top of stack against the validBrackets mapping we made
		if (stack.pop() !== validBrackets[s[i]]) {
			return false;
		}
	}

	// Make sure stack is empty after we traverse the string
	if (stack.length > 0) {
		return false;
	}

	return true;
}
