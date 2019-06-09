import SingleLinkedList from '../src/Implementation/SingleLinkedList';

describe('reverse', () => {

  test('should reverse the linkedlist in place', () => {
    const array = [1, 2, 3, 4];
    const list = new SingleLinkedList(array);
    list.reverse();
    expect(list.toList()).toEqual([4, 3, 2, 1]);
  })

});