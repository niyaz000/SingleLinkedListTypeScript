import SingleLinkedList from '../src/SingleLinkedList';

describe('clear', () => {

  test('should clear the linkedList', () => {
    const array = [1, 2, 3, 4, 5];
    const list = new SingleLinkedList(array);
    list.clear();
    expect(list.isEmpty()).toBeTruthy();
  })

});