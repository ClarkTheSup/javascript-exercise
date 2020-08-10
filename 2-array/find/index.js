export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const person = collection.find(e => e.age <= 20 && e.age >= 11);
  console.log(person);
  return person.name;
}
