1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

Answer the following with reason after going through the above code:

- `[10] === [10]`//false because its different
- What is the value of obj? // answer { surname: 'Stark' }. reason - value are reassigned.
- `obj == newObj`// false reason - value is different of those variable.
- `obj === newObj`//false reason - all the variable address are different.
- `user === newObj`//false reason - all the variable address are different.
- `user == newObj`//false reason - user stores the value of obj and the other hand newObj stores the differenct value.
- `user == obj`//true reason - user stores the value of obj.
- `arr == arr2`//true reason - arr2 stores the value of arr.
- `arr === arr2`//true reason - all variables data type is string.

2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

<!-- To add this image here use ![name](./hello.jpg) --> 

```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1);// {name: 'Alex', age: 25} reason - 
console.log(person2);// {name: 'John', age: 50}
```

3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];
var users = {
  name: 'Sansa',
};
users.brothers = brothers;
brothers.push('Robb');
console.log(users.brothers === brothers); //1. output true 
console.log(users.brothers.length === brothers.length); //2. output true
```
