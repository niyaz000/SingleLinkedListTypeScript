import SingleLinkedList from '../src/SingleLinkedList';

describe('length', () => {

  test('LinkedList is empty should return length as 0', () => {
    const list = new SingleLinkedList();
    expect(list.length()).toBe(0);
  })

  test('LinkedList is not empty should return length as 4', () => {
    const array = [1, 2, 3, 4];
    const list = new SingleLinkedList(array);
    expect(list.length()).toBe(4);
  })

});