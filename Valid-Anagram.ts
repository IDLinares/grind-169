// Problem: https://leetcode.com/problems/valid-anagram/
// Topics: Hash Map

function isAnagram(s: string, t: string): boolean {
	// If strings are not same length, immediately cannot be an anagram
	if (s.length !== t.length) {
		return false;
	}

	// Create map to hold characters with their frequencies of one string
	const map = new Map();

	for (let char of s) {
		// If the map already has the character, increase its frequency in the map
		if (map.has(char)) {
			map.set(char, map.get(char) + 1);
		} else {
			// Add new chracter is not already in the map
			map.set(char, 1);
		}
	}

	// Traverse the second string
	for (let char of t) {
		// Reduce the frequency if the map has the characters
		if (map.has(char)) {
			map.set(char, map.get(char) - 1);

			// If a frequency ever reaches zero, remove it from the map
			if (map.get(char) === 0) {
				map.delete(char);
			}
		} else {
			// If the character isn't in the map then not an anagram
			return false;
		}
	}

	// Map should be empty when second string is traversed for strings to be anagrams
	if (map.size > 0) {
		return false;
	}

	return true;
}

// Method using sorting and property of anagrams
function isAnagramSorted(s: string, t: string): boolean {
	// If strings are not same length, immediately cannot be an anagram
	if (s.length !== t.length) {
		return false;
	}

	// Create character arrays from strings using toSplit with no pattern
	let sArray = s.split('');
	let tArray = t.split('');

	// Sort both chracter arrays since anagrams should have all the same letters and quantity of letters
	sArray.sort();
	tArray.sort();

	// Can now compare letter by letter for equality or create new strings and compare the strings
	if (sArray.join() !== tArray.join()) {
		return false;
	}

	return true;
}
