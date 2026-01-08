// Problem: https://leetcode.com/problems/contains-duplicate/description/
// Topics: Arrays, Maps/Sets

function containsDuplicate(nums: number[]): boolean {
	// Set can store only distinct value
	const dupes = new Set();

	for (let num of nums) {
		// If already in set, then you know at least 2 and can return true
		if (dupes.has(num)) {
			return true;
		} else {
			dupes.add(num);
		}
	}

	// No duplicates if no number is ever found in the set already
	return false;
}
