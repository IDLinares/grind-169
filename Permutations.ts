// Problem: https://leetcode.com/problems/permutations/description/
// Topics: Array, Backtracking

function permute(nums: number[]): number[][] {
	let permutations: number[][] = [];
	let currentPerm: number[] = [];
	const used = new Set<number>();

	// Recursive function for backtracking through each permutation
	function backtrack(permutations: number[][], currentPerm: number[], used: Set<number>, nums: number[]): void {
		// Base Case
		if (currentPerm.length === nums.length) {
			permutations.push(Array.from(currentPerm));
			return;
		}

		// Loop through all available options
		for (let num of nums) {
			if (used.has(num)) {
				continue;
			}

			currentPerm.push(num);
			used.add(num);

			// Recursivelyt explore all permutations with this current combination
			backtrack(permutations, currentPerm, used, nums);

			// Unchoose these numbers and start with a new number in the loop
			currentPerm.pop();
			used.delete(num);
		}
	}

	backtrack(permutations, currentPerm, used, nums);

	return permutations;
}
