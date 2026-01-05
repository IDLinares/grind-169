// Problem: https://leetcode.com/problems/longest-palindrome/
// Topics: Strings, Hash Table, Greedy

function longestPalindrome(s: string): [number, string] {
	let longest = 0;
	let palindrome = '';
	const letters = new Map();

	for (let char of s) {
		if (letters.has(char)) {
			letters.set(char, letters.get(char) + 1);
		} else {
			letters.set(char, 1);
		}
	}

	let oddChar = false;
	let leftside = '';
	let middlepart = '';
	for (let [char, count] of letters) {
		if (count % 2 === 0) {
			longest += count;
			let repeatedChar = char.repeat(count / 2);
			leftside += repeatedChar;
		} else {
			let maxEven = count - 1;
			longest += maxEven;
			if (!oddChar) {
				middlepart = char;
				oddChar = true;
			}
			let repeatedChar = char.repeat(count / 2);
			leftside += repeatedChar;
		}
	}
	let rightside = leftside.split('').reverse().join('');
	palindrome = leftside + middlepart + rightside;
	if (oddChar) return [longest + 1, palindrome];
	else return [longest, palindrome];
}

const s =
	'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth';
console.log(longestPalindrome(s));
