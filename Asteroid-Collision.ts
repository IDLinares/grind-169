// Problem: https://leetcode.com/problems/asteroid-collision/description/
// Topics: Stack, Arrays

function asteroidCollision(asteroids: number[]): number[] {
	// 1st index is position, 2nd is size
	let remainingAsteroids: number[] = [];

	for (let i = 0; i < asteroids.length; i++) {
		// No asteroids in stack, then just push on since can't collide with itself
		if (remainingAsteroids.length < 1) {
			remainingAsteroids.push(asteroids[i]);
			continue;
		}

		// If top of stack is positive, then incoming asteroid must be negative to collide
		if (remainingAsteroids.at(-1)! > 0) {
			// If current asteroids is also positive, will not collide just push to stack
			if (asteroids[i] > 0) {
				remainingAsteroids.push(asteroids[i]);
				continue;
			}

			// Loop to make sure current negative asteroid can collide with every possible moving positive asteroid
			while (remainingAsteroids.length > 0 && remainingAsteroids.at(-1)! > 0) {
				// Check if current asteroid is larger than top of stack, otherwise break
				if (Math.abs(asteroids[i]) > remainingAsteroids.at(-1)!) {
					remainingAsteroids.pop();
				} else {
					break;
				}
			}

			if (remainingAsteroids.length < 1 || remainingAsteroids.at(-1)! < 0) {
				remainingAsteroids.push(asteroids[i]);
			} else if (Math.abs(asteroids[i]) === remainingAsteroids.at(-1)!) {
				remainingAsteroids.pop();
			} else {
				continue;
			}
			// Top of the stack is negative and will not collide with anything after it positive or negative, so just push it to stack
		} else {
			remainingAsteroids.push(asteroids[i]);
		}
	}

	return remainingAsteroids;
}

let asteroids = [5, 10, -5];
console.log(asteroidCollision(asteroids));
