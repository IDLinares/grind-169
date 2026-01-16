// Problem: https://leetcode.com/problems/jump-game/description/
// Topics: Dynamic Programming, Greedy, Array

function canJumpRecursive(nums: number[]): boolean {
	const lastIndex = nums.length - 1;
	let pointer = 0;
	let canReach = false;

	if (pointer === lastIndex) {
		return true;
	}

	function dfs(pointer: number) {
		let maxJumps = nums[pointer];

		for (let i = maxJumps; i > 0; i--) {
			if (pointer + i >= lastIndex) {
				canReach = true;
				break;
			}
			dfs(pointer + i);
		}
		nums[pointer] = 0;
	}

	dfs(pointer);
	return canReach;
}

function canJump(nums: number[]): boolean {
	let farthestReach = 0;

	for (let i = 0; i < nums.length; i++) {
		if (i > farthestReach) {
			return false;
		}

		farthestReach = Math.max(farthestReach, i + nums[i]);
		if (farthestReach >= nums.length - 1) {
			return true;
		}
	}

	return true;
}
