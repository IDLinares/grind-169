// Problem: https://leetcode.com/problems/climbing-stairs/
// Topics: DP, Memoization, Tabulation

// Top-down
function climbStairs(n: number): number {
	// Creating array to store number of ways to each step (matching with the element number) to not have to recalculate

	let dp: number[] = [];

	dp[0] = 1;
	dp[1] = 1;
	dp[2] = 2;

	function ways(n: number): number {
		// Check if already calculated
		if (dp[n] !== undefined) {
			return dp[n];
		}
		if (n === 1) {
			return 1;
		}
		if (n === 2) {
			return 2;
		}

		dp[n] = ways(n - 1) + ways(n - 2); // Fibonacci Sequence
		return dp[n];
	}
	return ways(n);
}

// Bottom-up
function climbStairs2(n: number): number {
	// Creating table we fill as we work up from our base case

	if (n === 1) return 1;

	if (n === 2) return 2;

	const dp: number[] = new Array(n + 1);
	dp[1] = 1;
	dp[2] = 2;

	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}

	return dp[n];
}
