import SingleLinkedList from '../src/SingleLinkedList';

describe('peekBack', () => {

  test('LinkedList is empty should return null', () => {
    const list = new SingleLinkedList();
    expect(list.peekBack()).toBeNull();
  })

  test('LinkedList is not empty should return the tail element and should not modify the list', () => {
    const array = [1, 2, 3, 4];
    const list = new SingleLinkedList(array);
    expect(list.peekBack()).toBe(4);
    expect(list.toList()).toEqual([1, 2, 3, 4]);
  })

});