import SingleLinkedList from '../src/Implementation/SingleLinkedList';

describe('isEmpty', () => {

  test('LinkedList is empty should return true', () => {
    const list = new SingleLinkedList();
    expect(list.isEmpty()).toBeTruthy();
  })

  test('LinkedList is not empty should return false', () => {
    const array = [1, 2, 3, 4];
    const list = new SingleLinkedList(array);
    expect(list.isEmpty()).toBeFalsy();
  })

});