// Problem: https://leetcode.com/problems/majority-element/description/
// Topics: Arrays, Hash Tables, Math, Sorting

function majorityElement(nums: number[]): number {
	// Map to store the elements in the array and their frequencies
	const map = new Map();
	const arrSize = nums.length;
	let majorityElement = 0;

	// For loop to count the frequency of each unique number in array
	for (let num of nums) {
		if (map.has(num)) {
			map.set(num, map.get(num) + 1);
		} else {
			map.set(num, 1);
		}
	}

	// For loop to determine which number has a frequency greater than half of the array
	// Problem guaranteed there would be one so can stop on first discovery
	for (let [key, value] of map) {
		if (value > arrSize / 2) {
			majorityElement = key;
			break;
		}
	}

	return majorityElement;
}
// Big-O: O(n) time with O(n) space

function majorityElementSorting(nums: number[]): number {
	// Sort elements first in increasing order
	nums.sort((a, b) => a - b);

	// Array is never empty so at least one
	let highestFreq = 1;
	let currFreq = 1;
	let majorityElement = nums[0];

	// For loop finding frequency of each number in place
	// Majority element always exists, so highest frequency number is majority element
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) {
			currFreq++;
			if (currFreq > highestFreq) {
				highestFreq = currFreq;
				majorityElement = nums[i];
			}
		} else {
			currFreq = 1;
		}
	}

	return majorityElement;
}
// Big-O: O(n log n) time, o(1) space
