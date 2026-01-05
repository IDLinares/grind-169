// Problem: https://leetcode.com/problems/clone-graph/description/
// Topics: Hash Table, DFS

class _Node {
	val: number;
	neighbors: _Node[];

	constructor(val?: number, neighbors?: _Node[]) {
		this.val = val === undefined ? 0 : val;
		this.neighbors = neighbors === undefined ? [] : neighbors;
	}
}

// Make a deep copy of a graph

function cloneGraph(node: _Node | null): _Node | null {
	// Will need to make a copy of the first node in the graph

	if (node) {
		let startCopy = new _Node(node.val);
	}
}
