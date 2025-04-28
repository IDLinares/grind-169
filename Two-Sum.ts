// Problem: https://leetcode.com/problems/two-sum/description/
// Topics: Arrays, Hash Tables

function twoSum(nums: number[], target: number): number[] {
	// Creating a map to map current integer to its complement
	const map = new Map<number, number>();
	let ans: number[] = [];
	//  Adding the complement of the first element and the index it is found at to the map
	map.set(target - nums[0], 0);

	// Cycle through nums array checking if current value is already in map
	for (let i = 1; i < nums.length; i++) {
		// If map already has current value, then we know we have seen the complement before to make the target
		if (map.has(nums[i])) {
			// Add the current index and the index of the complement that we stored in the map
			ans.push(map.get(nums[i])!);
			ans.push(i);
		}

		// If not in map, set the complement we're looking for with this current index
		map.set(target - nums[i], i);
	}

	return ans;
}
