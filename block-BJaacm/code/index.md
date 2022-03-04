```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // true. reason - newUser stores the value of user.
- `user === newUser;`// true. reason - all those variable are same data type that is string.
- `user.name === newUser.name;`// true. reason - all those variable are same data type that is string.
- `user.name == newUser.name;`// true. reason - newUser.name stores the value of user.name
- `user.sibling == newUser.sibling;`// true. reason - newUser.sibling stores the value of user.sibling
- `user.sibling === newUser.sibling;`//  true. reason - all those variable are same data type that is string.
- `user.sibling == allBrothers;`// false. reason - user.sibling is an key object and allBrothers is an array.
- `user.sibling === allBrothers;`// false. reason - user.sibling is an key object and allBrothers is an array.
- `brothersCopy === allBrothers;`// false. reason - all variable is different data type.
- `brothersCopy == allBrothers;`// false. reason - brothersCopy stores the value of user.sibling that is object key and the other hand allBrothers is an array. 
- `brothersCopy == user.sibling;`// true. reason - brothersCopy stores the value of user.sibling.
- `brothersCopy === user.sibling;`// true. reason - all those variable are same data type that is string.
- `brothersCopy[0] === user.sibling[0];`// true. not primitive always done copy by reference address gets copied so both the value has changed.and its data type is also same that is string.
- `brothersCopy[1] === user.sibling[1];`// true. not primitive always done copy by reference address gets copied so both the value has changed.
- `user.sibling[1] === newUser.sibling[1];`// true. not primitive always done copy by reference address gets copied so both the value has changed.and its data type is also same that is string.
