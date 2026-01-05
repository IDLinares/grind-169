// Problem: https://leetcode.com/problems/reverse-linked-list/description/
// Topics: Linked List, Pointers

import { ListNode } from './Node-Classes.ts';

// Iterative
function reverseList(head: ListNode | null): ListNode | null {
	if (head === null || head.next === null) {
		return head;
	}
	let prev: ListNode | null = null;
	let curr: ListNode | null = head;
	let next: ListNode | null = head.next;

	while (next) {
		curr.next = prev;
		prev = curr;
		curr = next;
		next = next.next;
	}

	curr.next = prev;
	head = curr;

	return head;
}

// Recursive
function reverseListRecursive(head: ListNode | null): ListNode | null {
	if (head === null || head.next === null) {
		return head;
	}

	const newHead = reverseListRecursive(head.next);
	head.next.next = head;
	head.next = null;

	return newHead;
}
