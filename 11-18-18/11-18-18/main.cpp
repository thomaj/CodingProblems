#include "XORLinkedList.h"
#include <iostream>

int main() {
	XORLinkedList ll = XORLinkedList();

	ll.add(1);
	ll.add(2);
	ll.add(3);
	ll.add(4);
	ll.add(5);
	ll.add(6);
	ll.add(7);
	ll.add(8);

	std::cout << ll.get(7)->data << std::endl;

	ll.print();
	std::cout << std::endl;

	char _;
	std::cin >> _;
}