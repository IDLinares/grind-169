// Problem: https://leetcode.com/problems/invert-binary-tree/
// Topics: Tree, DFS, BFS,

class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

// Use function as recursive function for depth first search
function invertTree(root: TreeNode | null): TreeNode | null {
	// Check that tree/current node isn't empty
	if (root === null) {
		return root;
	}
	// Go all the way down the left branch of the tree
	invertTree(root.left);

	// Then all the way down the right branch of the tree
	invertTree(root.right);

	// Once deepest part of this branch found, swap the two children of each node as you climb up the tree out of the recursion
	let temp = root.left;
	root.left = root.right;
	root.right = temp;

	// Return updated tree (root itself does not change in inverted tree)
	return root;
}
