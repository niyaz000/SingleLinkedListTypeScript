import Node from './Node';

export default class SingleLinkedList<T>
{

  private head: Node<T>;

  constructor(collection?: T[])
  {
    this.head = null;
    if(collection != undefined) {
      collection.slice().reverse().forEach(node => this.add(node));
    }
  }

  public add(data: T)
  {
    this.head = new Node(data, this.head);
  }

  public peekFront() :T {
    return this.head == null ? null : this.head.data;
  }

  public peekBack() :T
  {
    if(this.isEmpty()) {
      return null;
    }
    let temp = this.head;
    while(temp.next != null) {
      temp = temp.next;
    }
    return temp.data;
  }

  public isEmpty() :boolean
  {
    return this.head == null;
  }

  public addBack(data: T)
  {
    if(this.isEmpty()) {
      return this.add(data);
    }
    let temp = this.head;
    while(temp.next != null)
    {
      temp = temp.next;
    }
    temp.next = new Node(data, null);
  }

  public toList(): T[]
  {
    let array = [];
    let temp = this.head;
    while(temp != null)
    {
      array.push(temp.data);
      temp = temp.next;
    }
    return array;
  }

  public clear()
  {
    this.head = null;
  }

  public length(): number
  {
    let temp = this.head;
    let length = 0;
    while(temp != null)
    {
      temp = temp.next;
      ++length;
    }
    return length;
  }

  public reverse()
  {
    let temp = this.head;
    let prev = null;
    while(temp != null)
    {
      let next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    this.head = prev;
  }

}

