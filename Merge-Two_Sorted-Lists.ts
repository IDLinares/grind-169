// Problem: https://leetcode.com/problems/merge-two-sorted-lists/description/
// Topics: Linked List and Recursion

// Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
	// Checking if any list is empty. No need to sort
	if (list1 === null) {
		return list2;
	}

	if (list2 === null) {
		return list1;
	}

	let head: ListNode | null;
	// Setting a head node to return based on which list has a smaller start
	if (list1.val < list2.val) {
		head = list1;
		list1 = list1.next;
	} else {
		head = list2;
		list2 = list2.next;
	}

	let temp: ListNode | null = head;

	// Traversing both lists
	while (true) {
		// Breaks loop when any list becomes null and adds the rest of the remaining list
		if (list1 === null) {
			temp.next = list2;
			break;
		}

		if (list2 === null) {
			temp.next = list1;
			break;
		}

		// Set temp.next to be the smaller of the current node between the two lists
		// Move that list up to the next
		if (list1.val < list2.val) {
			temp.next = list1;
			list1 = list1.next;
		} else {
			temp.next = list2;
			list2 = list2.next;
		}

		// Move temp up after setting its next
		temp = temp.next;
	}

	return head;
}
