// Problem: https://leetcode.com/problems/valid-palindrome/description/]
// Topics: Two Pointers and Strings

function isPalindrome(s: string): boolean {
	/* Writing a regex
	'\W' = All non-word characters aka [^A-Za-z0-9_]
    '|_' = Make sure to include underscores since \W doesn't
    'g' at the end is for global search (all occurrences)
    Then use regex to remove all non-word characters with .replaceAll
    Set them all to lowercase
    */
	let regex = /\W|_/g;
	let cleanString = s.replaceAll(regex, '').toLowerCase();

	// Setting two pointers to compare the front and end of the string
	let start = 0;
	let end = cleanString.length - 1;

	// Move pointers towards each other checking if the front and back pointers match
	// KEY: start < end not equals to make sure it catches odd and even length strings
	while (start < end) {
		if (cleanString[start] !== cleanString[end]) {
			return false;
		}

		start++;
		end--;
	}

	return true;
}
