const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

users.map((user, index) => {
  console.log(`Index: ${index}, Name: ${user.name}, Age: ${user.age}`);
});
