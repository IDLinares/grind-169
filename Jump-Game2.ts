// Problem: https://leetcode.com/problems/jump-game-ii/description/
// Topics: Dynamic Programming, Arrays, Greedy

function jump(nums: number[]): number {
	let farthestJump = 0;
	let currentEnd = 0;
	let numOfJumps = 0;

	for (let i = 0; i < nums.length; i++) {
		if (currentEnd >= nums.length - 1) {
			break;
		}

		farthestJump = Math.max(farthestJump, i + nums[i]);

		if (i === currentEnd) {
			numOfJumps++;
			currentEnd = farthestJump;
		}
	}

	return numOfJumps;
}
let test = [2, 3, 1, 1, 4];
console.log(jump(test));
