// 1. Create an array named numbers and store 5 number values in it
let numbers = [25, 45, 78, 95, 65];

// 2. Calculate the sum of array items and print it to the console using console.log()
console.log(`The sum of array items is ${numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]}`);

// 3. Calculate the average of array items and print it to the console using console.log()
console.log(`The average of array items is ${(numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4])/5}`);
// 4. Find the highest number in the array and print it to the console using console.log()
console.log(`The hughest number  of array items is ${numbers[0]>numbers[1]>numbers[2]>numbers[3]>numbers[4]}`);
// 5. Find the lowest number in the array and print it to the console using console.log()

// 6. Find the even numbers in the array and print them to the console using console.log()
let odd = [], even = [];
for(let number of numbers){
    if(number % 2 === 0){
        even.push(number);
    }else{
        odd.push(number);
    }
}
console.log(`The even numbers in the array is ${even.push(number)}`);
// 7. Find the odd numbers in the array and print them to the console using console.log()
for(let number of numbers){
    if(number % 2 !== 0){
        odd.push(number);
    }else{
        even.push(number);
    }
}
console.log(`The odd numbers in the array is ${odd.push(number)}`);
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

// 9. Log all the element of the array one by one

// 10. Find all the number in the array that is divisible by 3
