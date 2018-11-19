#include <stdint.h>

using namespace std;

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
	Node* xor(Node *a, Node *b);

public:
	XORLinkedList();
	void add(int data);
	Node* get(int index);
};


XORLinkedList::XORLinkedList() {
	XORLinkedList::initialize();
}

void XORLinkedList::initialize() {
	head = NULL;
	tail = NULL;
	length = 0;
}

Node* XORLinkedList:: xor(Node *a, Node *b) {
	Node *result = (Node *) ((uintptr_t) a ^ (uintptr_t) b);
}

void XORLinkedList::add(int data) {
	Node *newNode = new Node();
	newNode->data = data;
	
	if (tail != NULL) {
		tail->npx = xor(tail->npx, newNode);	// Because tail->npx was the XOR of the previous node address and NULL, the value will be the previous node address
	}
	newNode->npx = xor(tail, NULL);
	tail = newNode;

	if (head == NULL) {
		head = newNode;
	}
	
	length++;

}

Node* XORLinkedList::get(int index) {
	return new Node();
}