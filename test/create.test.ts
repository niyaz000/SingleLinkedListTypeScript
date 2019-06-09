import SingleLinkedList from '../src/SingleLinkedList';

describe('constructor', () => {

  test('should create a linkedlist with elements provided in the collection inorder', () => {
    const array = [1, 2, 3, 4, 5];
    const list = new SingleLinkedList(array);
    expect(list.toList()).toEqual([1, 2, 3, 4, 5]);
  })

  test('should create an empty linkedlist', () => {
    const list = new SingleLinkedList();
    expect(list.toList()).toEqual([]);
  })

});