// Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
// Topics: Arrays and Dynamic Programming

function maxProfit(prices: number[]): number {
	let maxProfit = 0;

	// If only one day, can't buy and sell on the same day so no profit made
	if (prices.length < 2) {
		return maxProfit;
	}

	// Set lowest price to start of the array
	let lowestPrice = prices[0];

	// Traverse through whole array
	for (let i = 1; i < prices.length; i++) {
		// Any time there is a lower price, set that as the new lowest price in array (new buy date)
		// Always sell after buy and you won't sell when it's a lower price cause then negative profit
		if (prices[i] < lowestPrice) {
			lowestPrice = prices[i];
			continue;
		}

		// Compare current maxProfit to the difference between current day's price and the lowest price we have seen
		maxProfit = Math.max(maxProfit, prices[i] - lowestPrice);
	}

	return maxProfit;
}
