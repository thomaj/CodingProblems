#pragma once

struct Node {
	int data;
	Node* npx;
};




class XORLinkedList {
private:
	Node* head;
	Node* tail;
	int length;

	void initialize();
	Node* XOR(Node *a, Node *b);

public:
	XORLinkedList();
	void add(int data);
	Node* get(int index);
	void print();
};
