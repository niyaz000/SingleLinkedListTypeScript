import SingleLinkedList from '../src/Implementation/SingleLinkedList';

describe('peekFront', () => {

  test('LinkedList is empty should return null', () => {
    const list = new SingleLinkedList();
    expect(list.peekFront()).toBeNull();
  })

  test('LinkedList is not empty should return the head element and should not modify the list', () => {
    const array = [1, 2, 3, 4];
    const list = new SingleLinkedList(array);
    expect(list.peekFront()).toBe(1);
    expect(list.toList()).toEqual([1, 2, 3, 4]);
  })

});