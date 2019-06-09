export default interface LinkedList<T>
{
  toList(): T[];
  add();
  peekFront() :T;
  peekBack() :T;
  isEmpty() :boolean;
}