// Problem: https://leetcode.com/problems/sort-colors/description/
// Topics: Array, Two-Pointers, Sorting

// Multiple passes, count number of each color since we know it's just red, white, and blue
function sortColors(nums: number[]): void {
	// Set variables for each potential color
	let numOfRed = 0;
	let numOfWhite = 0;
	let numOfBlue = 0;

	for (let color of nums) {
		// Switch statement to increment count of each color in array
		switch (color) {
			case 0:
				numOfRed++;
				break;
			case 1:
				numOfWhite++;
				break;
			case 2:
				numOfBlue++;
				break;
		}
	}

	// Go through array and add back in the colors in order with the count of each one
	for (let i = 0; i < nums.length; i++) {
		if (numOfRed > 0) {
			nums[i] = 0;
			numOfRed--;
			continue;
		}

		if (numOfWhite > 0) {
			nums[i] = 1;
			numOfWhite--;
			continue;
		}

		if (numOfBlue > 0) {
			nums[i] = 2;
			numOfBlue--;
			continue;
		}
	}
}

// One Pass: Two-Pointer Method
function sortColors2(nums: number[]): void {
	// Three-Pointers for three distinct values
	// Moves 0s to the left, 1s to the middle, and 2s to the right
	let low = 0; // Keeps track of last zero
	let high = nums.length - 1; // Keeps track of last 2
	let curr = 0;

	while (curr <= high) {
		if (nums[curr] === 0) {
			let temp = nums[low];
			nums[low] = nums[curr];
			nums[curr] = temp;
			low++;
			curr++;
		} else if (nums[curr] === 2) {
			let temp = nums[high];
			nums[high] = nums[curr];
			nums[curr] = temp;
			high--;
		} else {
			curr++;
		}
	}
}
const nums = [2, 0, 1];
console.log(sortColors2(nums));
