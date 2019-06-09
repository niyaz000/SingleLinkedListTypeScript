import SingleLinkedList from '../src/Implementation/SingleLinkedList';

describe('addBack', () => {

  test('LinkedList is empty should update new element as the head', () => {
    const list = new SingleLinkedList();
    list.addBack(1)
    expect(list.peekFront()).toBe(1);
  })

  test('should add new elements at the tail of the LinkedList', () => {
    const list = new SingleLinkedList();
    list.addBack(5);
    list.addBack(4);
    list.addBack(3);
    expect(list.toList()).toEqual([5, 4, 3]);
  })

});