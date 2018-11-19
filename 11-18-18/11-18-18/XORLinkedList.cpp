#include <stdint.h>
#include <iostream>
#include "XORLinkedList.h"


XORLinkedList::XORLinkedList() {
	XORLinkedList::initialize();
}

void XORLinkedList::initialize() {
	head = NULL;
	tail = NULL;
	length = 0;
}

Node* XORLinkedList::XOR(Node *a, Node *b) {
	Node *result = (Node *)((uintptr_t)a ^ (uintptr_t)b);
	return result;
}

void XORLinkedList::add(int data) {
	Node *newNode = new Node();
	newNode->data = data;

	if (tail != NULL) {
		tail->npx = XOR(tail->npx, newNode);	// Because tail->npx was the XOR of the previous node address and NULL, the value will be the previous node address
	}
	newNode->npx = XOR(tail, NULL);
	tail = newNode;

	if (head == NULL) {
		head = newNode;
	}

	length++;
}

Node* XORLinkedList::get(int index) {
	Node *result = NULL;
	if (index < length) {
		Node *current = head;
		Node *previous = NULL;
		Node *next = NULL;

		int pos = 0;
		while (pos < index) {
			next = XOR(current->npx, previous);
			previous = current;
			current = next;
			pos++;
		}
		result = current;
	}

	return result;
}




void XORLinkedList::print() {
	Node *current = head;
	Node *previous = NULL;
	Node *next = NULL;


	while (current != NULL) {
		std::cout << current->data << " -> ";

		next = XOR(current->npx, previous);
		previous = current;
		current = next;
	}

	std::cout << "NULL";
}
