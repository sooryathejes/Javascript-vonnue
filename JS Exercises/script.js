

// //write a for loop that print all even numbers between 1 and 50//(1)
// //
// // for(let i=2; i<=50;i += 2){
// //   console.log(i); 
// // }
// //use a while loop to calculate the sum of numbers from 1 to 100//(2)
// //
// // let sum=0;
// // for(let  i = 1;i<=100;i++){
// // sum +=i;


// // }
// // console.log(sum);

// //write a if-else statement to determine if a given number is positive,negative,or zero.//(3)
// //
// // let n=prompt("Enter a number")
// // if (n>0) {
// //     console.log(alert("The number you are entered is a positive number")); 
// // }else if(n<0){
// //     console.log(alert("The number you are entered is a negative number"));  
// // }else if(n=0){
// //     console.log(alert("The number is zero"));  
// // }
// //Use a switch statement to print the day of the week based on a number input (1 for monday,2 for tuesday,etc)//(4)
// //
// // function switchDay(day){
// //     switch (day) {
// //         case 1:
// //             console.log("Monday");
// //             break;
// //         case 2:
// //             console.log("Tuesday");
// //             break;
// //         case 3:
// //             console.log("Wednesday");
// //             break;
// //         case 4:
// //             console.log("Thursday");
// //             break;
// //         case 5:
// //             console.log("Friday");
// //         case 6:
// //             console.log("Saturday");
// //         case 7:
// //             console.log("Sunday");

// //         default:
// //             console.log("There is only 7 days in a week MF");
// //             break;
// //     }
// //     return day;

// // }
// // console.log(switchDay(3));


// //check the given number is positive,negative or zero//(5)
// let n = (re) => {
//     if (re > 0) {
//         return "The given number is positive"
//     }
//     else if (re < 0) {
//         return "The given number is negative"
//     }
//     else if (re == 0) {
//         return "The number is zero"
//     }

// }
// console.log(n(0));
// //check the given alphabet is vowel or consonant//(6)

// let alpha = (al) => {
//     let result = ""
//     switch (al) {
//         case "a":
//             result = "It is a vowel ";
//             break;

//         case "e":
//             result = "It is a vowel ";
//             break;

//         case "i":
//             result = "It is a vowel ";
//             break;

//         case "o":
//             result = "It is a vowel ";
//             break;

//         case "u":
//             result = "It is a vowel ";
//             break;

//         default:
//             result = "It is a consonant";
//     }
//     return result;
// }
// console.log(alpha("b"));
// //2//
// let alphabet = () => {
//     let result = "";
//     if (alphabet = "a" || "e" || "i" || "o" || "u") {
//         result = "It is a vowel";
//     } else result = "It is a consonant";
//     return result

// }
// console.log(alpha("a"));

// //check the given age is eligible for voting//(7)
// let vote = (age) => {
//     let result = "";
//     if (age >= 18) {
//         result = "You are eligible for vote";
//     }
//     else result = "Go home kid";
//     return result;
// }
// console.log(vote(108));

// //check the given number is even or odd.//(8)

// let check = (n) => {
//     let result = ""
//     if (n % 2 == 0) {
//         result = "It is an even number"
//     } else result = "it is an odd numer"
//     return result
// }
// console.log(check(21));

// //Calculate the multiplication table of a given number.//(9)

// let multi = (a) => {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${a}x${i}=${a * i}`);
//     }
// }
// multi(1);
// //calculate the factorial of a number//(10)
// //
// // let factorial = (n,) => {
// //     let result = ""
// //   for(let i=1;i >= n;i--){
// //     result *=i;
// //   }
// // }
// // console.log(factorial(5));

// //find max value in an array of numbers//(11)
// //1
// let array = [4, 6, 1, 5, 35, 67, 89, 1500, 400, 200, 100, 800];
// let max = array[0];
// for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i]
//     }
// }

// console.log(max);
// //2
// let arrayOf = (arr) => {
//     let max = arr[0];
//     for (i = 1; i <= arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(arrayOf([4, 6, 1, 5, 35, 67, 89, 3500, 400, 2000000000, 100, 800]));


// //Check if the given number is prime or not//(12)
// let primeCheck = (prime) => {
//     let result = ""

//     if (prime < 2) {
//         result = "Its not a prime number"
//     }
//     for (i = 2; i < prime; i++) {
//         if (prime % i == 0) {
//             result = "Its not a prime number"
//         } else result = "Its a prime number"
//     }
//     return result
// }
// console.log(primeCheck(4));

// //Write a javascript function to calculate the sum of two numbers//(13) 
// //
// let a = 1;
// let b = 2;
// let sum = a + b;
// console.log(sum);
// //
// // var sumOfTwoNumbers = (a,b) => {
// //     return a+b;
// // }
// // console.log( sumOfTwoNumbers(8,6));

// //Write a javascript function that checks if a given number is even or odd.//(14)
// let IsEvenOdd = (a) => {
//     result = "";
//     if (a % 2 == 0) {
//         result = "The number you are entered is an even number";
//     } else if (a % 2 == 1) {
//         result = "The number you are entered is an odd number";
//     }
//     return result;
// }
// console.log(IsEvenOdd(22));
// // //Reverse a given string without using built-in methods like split(),reverse() or join().//(15)
// // //
// // let reverseOfString = (string) =>{
// //     result = "";
// //    for(i = string.length-1;i>=0;i--){
// //     result += string[i]
// //    }
// //    return result;
// // }
// // console.log(reverseOfString("Hekllo"));
// //write a function to check if a given string is a palindrome//(16)
// //
// let isPalindrome = (str) => {
//     let result = "";
//     let str1 = "";
//     for (i = str.length - 1; i >= 0; i--) {
//         str1 += str[i]
//     }
//     if (str1 == str) {
//         result = "Palindrome"
//     } else if (str1 != str) {
//         result = "Not palindrome"
//     }
//     return result;

// }
// console.log(isPalindrome("malayalam"));

// //Find largest number in an array using a loop.//(17)
// //
// let largeNumber = (arr) => {
//     let large = arr[0];
//     for (i = 1; i < arr.length; i++) {
//         if (arr[i] > large) {
//             large = arr[i]
//         }
//     }
//     return large;
// }
// console.log(largeNumber([1, 3, 6, 8, 15, 3]));

// //Write a funnction to count the number of vowels in a given string.//(18)
// //
// let isVowels = (str) => {
//     for (i = 0; i > str.length; i++) {
//         return str[i];
//     }
// }
// console.log(isVowels("soorya"));

// //write a program to print hello world//(19)
// //
// let greet = "Hello world";
// console.log(greet);

// let hey = (hello) => {
//     return hello;
// }
// console.log(hey("Hello world"));
// //write a function that takes two numbers as input and points their sum//(20)
// //
// var sumOfTwoNumbers = (a, b) => {
//     return a + b;
// }
// console.log(sumOfTwoNumbers(2, 30));

// //write a program to calculate and prints the area of a rectangle given its length and width//(20)
// //
// let areaOfRectangle = (l, w) => {
//     if (l <= 0) {
//         throw new Error("Length should be a positive number")
//     }
//     if (w <= 0) {
//         throw new Error("Width should be a positive number")
//     }
//     return l * w;
// }
// console.log(areaOfRectangle(10, 20));
// //write a function that tells if a given number is even or odd//(21)
// //
// let evenOdd = (n) => {
//     let result = "";
//     if (n % 2 == 0) {
//         result = "The number you are entered is an even number"
//     } else {
//         result = "The number you are entered is an odd number"
//     }
//     return result;
// }
// console.log(evenOdd(1011));

// let oddEven = (n) => {
//     return n % 2 === 0 ? "The number you are entered is an even number" : "The  number you are entered is an odd number";
// }
// console.log(oddEven(10));

// //write a function that finds and prints the smallest number among three given numbers//(22)
// //
// let smallestAmong = (a, b, c) => {
//     if (a < b && a < c) {
//         return a;
//     } else if (b < a && b < c) {
//         return b;
//     } else if (c < a && c < b) {
//         return c;
//     }
// }
// console.log(smallestAmong(1, -1, -2));

// let smNumber = (a, b, c) => {
//     let smallest = a;
//     if (b < smallest) {
//         return b

//     } else if (c < smallest) {
//         return c;
//     }
// }
// console.log(smNumber(1, 2, -1));

// //write a function that returns the reverse of a string//(23) 
// //
// let revStr = (str) => {
//     if (typeof str !== 'string') {
//         throw new Error("Only strings are allowed")
//     }
//     let result = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     }
//     return result;
// }
// console.log(revStr("soorya"));

// let revStr2 = (str) => {
//     let spliInput = str.split('');
//     let reverseInput = spliInput.reverse();
//     let joiStr = reverseInput.join('');
//     return joiStr;
// }
// console.log(revStr2("soorya"));

// //write a function to calculate factorial of a given number//(24)
// //
// let fact = (n) => {
//     let result = 1;
//     for (i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(fact(4));


// //Write a fuction that tells if provided year is a leap year or not//(25)
// //
// let leapYear = (year) => {
//     if (year % 4 === 0) {
//         return true;
//     }
//     return false;

// }
// console.log(leapYear(1203));


// //write a function that calculates and print the sum of the digits of a given number//(26)
// //
// let sumOfNumbers = (sum) => {
//     for (i = 0; i <= sum.length; i++) {
//         result += num % 10;
//         num = Math.floor(num / 10);  
//     }
//     return result;

// }
// console.log(sumOfNumbers(23));
// let sumOfDigits = (num) => {
//     let result = 0;
//     while (num > 0) {
//         let lastDigit = num % 10;
//         result += lastDigit;
//         num = (num - lastDigit) / 10;
//     }
//     return result;
// };

// console.log(sumOfDigits(233));

// //write a program to print "Hello,World!"//(27)
// let greets = "Hello world!";
// console.log(greets);

// //create a function that takes a number as input and returns whether it is even or odd.//(28)
// let checkEvenOdd = (n) => {
//     if (n % 2 == 0) {
//         console.log("Even number");

//     } else if (n % 2 == 1) {
//         console.log("Odd number");

//     }
// }
// checkEvenOdd(5);
// //Write a function to find the maximum of two numbers.//(29)
// // let maxOfTwoNumbers = (a,b) => {
// //     if(a > b){
// //         return a;
// //     }else{
// //         return b;
// //     }
// // }
// // maxOfTwoNumbers(1,2);
// //create aprgran to calculate the sum of all numbers in an array.//(30)
// let arr = [2, 5];
// let sum1 = 0;
// for (i = 0; i < arr.length; i++) {
//     sum1 = sum1 + arr[i];
// }
// console.log(sum1);
// //write a function that reverses a given string.//(31)
// let revString = (str) => {
//     let result = ""
//     for (i = str.length - 1; i >= 0; i--) {
//         result += str[i]
//     }
//     return result;

// }
// console.log(revString("soorya"));


// //Write a program to check if a given string is a palindrom or not//(32)
// let checkPalindrome = (str) => {
//     result = "";
//     for (i = str.length - 1; i >= 0; i--) {
//         result += str[i];

//     }
//     if (str == result) {
//         return "Palindrome"
//     } else if (str != result) {
//         return "not palindrome"
//     }

// }
// console.log(checkPalindrome("malayalam"));
// //create a function that takes an array and returns the largest number in it.//(33)
// let largestNumber = (arr1) => {
//     let maxNumber = arr1[0];
//     for (i = 1; i < arr1.length; i++) {
//         if (arr1[i] > maxNumber) {
//             maxNumber = arr1[i]
//         }
//     }
//     return maxNumber
// }
// console.log(largestNumber([1, 22, 333, 4, 5]));

// //write a program to generate the first n numbers in the fibonacci sequence//(34)
// let fibonacciSeries = (n) => {
//     let prev1 = 0;
//     let prev2 = 1;
//     let curr;
//     let series = [prev1 + prev2];
//     for (let i = 2; i < n; i++) {
//         curr = prev1 + prev2;
//         series.push(curr);
//         prev1 = prev2;
//         prev2 = curr
//     }
//     return series
// }
// console.log(fibonacciSeries(10));
// //create a function that takes a string and returns the number of vowels in it. //(35)
// let vowelSeries = (str) => {
//     let count = 0;
//     let vowels = ["a", "e", "i", "o", "u"];
//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count += 1;
//         }
//     }
//     return count;
// };
// console.log(vowelSeries("SOORYA"));
// //write a function that finds the factorial of a given number//(36)
// let findFactorial = (n) => {
//     let result = 1;
//     for (i = n; i > 0; i--) {
//         result *= n--;
//     }
//     return result;
// }
// console.log(findFactorial(3));
// //Write a function to reverse a given string.//(37)
// let reverseString = (str) => {
//     let result = "";
//     for (i = str.length - 1; i >= 0; i--) {
//         result += str[i]
//     }
//     return result;
// }
// console.log(reverseString("soorya"));
// //create a function that takes a number as input and returns whether it is even or odd//(37) 
// let checkEvenOdd1 = (n) => {
//     if (n % 2 == 0) {
//         console.log("Even number");
//     } else if (n % 2 == 1) {
//         console.log("odd number");

//     }
// }
// checkEvenOdd1(5);
// //Find the Second Largest Number in an Array//(38)
// let secondLargest = (arr) => {
//     let large = arr[0];
//     let ordered = arr.sort((a, b) => a - b)
//     return ordered[ordered.length - 2];
// }
// console.log(secondLargest([5, 3, 10, 28, 23, 31, 21, 45, 34, 29]));
// //Write a function to remove all duplicate values from an Array//(39)
// let removeDuplicate = (arr) => {
//     let newArray = []
//     for (let i = 0; i <= arr.length; i++) {
//         if (!newArray.includes(arr[i])) {
//             newArray.push(arr[i])
//         }
//     }
//     return newArray;
// }
// console.log(removeDuplicate([5, 3, 10, 3, 28, 23, 5, 31, 21, 45, 34, 29]));

// //Check if a String is an Anagram//(40)
// let anagram = (str1, str2) => {
//     return str1.split('').sort().join('') == str2.split('').sort().join('') ? "Anagram" : "Not Anagram"
// }
// console.log(anagram("listen", "silent"));

// //Write a function to find the common elements between two arrays.//(41)
// let commonElements = (arr1, arr2) => {
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] == (arr2[j])) {
//                 newArr.push(arr1[i])
//             }
//         }
//     }
//     return newArr
// }
// console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6]));

// //Write a function to remove duplicate elements from an array.//(42)
// let deleteDuplicate = (arr) => {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!newArr.includes(arr[i])) {
//             newArr.push((arr[i]));
//         }
//     }
//     return newArr
// }
// console.log(deleteDuplicate([4, 5, 6, 6, 5, 7, 3, 8, 9]));

// // Write a function to count the frequency of each element in an array and return the result as an object.//(43)
// let countFrequency = (arr) => {
//     let freqObj = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (freqObj[arr[i]]) {
//             freqObj[arr[i]]++;
//         } else {
//             freqObj[arr[i]] = 1;
//         }
//     }
//     return freqObj;
// };

// console.log(countFrequency([1, 2, 2, 3, 3, 3, 4]));


// //Sort an Array in Ascending Order//(44)
// let ascendingOrder = (arr) => {
//     arr.sort((a, b) => a - b)

//     return arr;
// }
// console.log(ascendingOrder([2, 4, 5, 3, 7]));

// //Write a function that converts a temperature in Celsius to Fahrenheit.//(45)
// let convertTemprature = (celsius) => {
//     let fahrenheit = (9 / 5 * celsius) + 32;
//     return fahrenheit;
// }
// console.log(convertTemprature(21));

// //Write a function that finds the missing number in an array of consecutive numbers. The array is missing one number from the sequence.//(46)
// let findMissingNumber = (arr) => {
//     let allSum = 0;
//     let sumOfAll = 0;

//     for (let i = 0; i < arr.length; i++) {
//         allSum += arr[0] + i;
//         sumOfAll += arr[i];
//     }
//     let missingNumber = allSum - sumOfAll
//     return missingNumber;
// }
// console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9]));

// //Write a function that converts a string to title case (first letter of each word capitalized).//(47)
// let covertTitleCase = (str) => {
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// }

// console.log(covertTitleCase("soorya"));

// //Write a function that calculates the sum of all digits in a given number.//(48)
// let sumOfAllDigits = (num) => {
//     let sum = 0;
//     let newNum = num.toString().split('');
//     for (let i = 0; i < newNum.length; i++) {
//         sum += parseInt(newNum[i]);
//     }
//     return sum;
// }

// console.log(sumOfAllDigits(123));

// //Write a function that returns the largest word in a given string.//(49)
// let largestWord = (str) => {
//     let words = str.split(' ');
//     let largest = words[0];

//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length > largest.length) {
//             largest = words[i];
//         }
//     }

//     return largest;
// }
// console.log(largestWord("Hey sooryathejes soorya"));

// //Write a function that removes all non-alphanumeric characters from a string//(50)

// let nonAlphaNumeric = (str) => {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] > 'a' && str[i] < 'z') {
//             result += str[i]
//         } else if (str[i] > '0' && str[i] < '9') {
//             result += str[i]
//         } else if (str[i] > 'A' && str[i] < 'Z') {
//             result += str[i]
//         }
//     }
//     return result;

// }
// console.log(nonAlphaNumeric("Soorya123@"));

// //Write a function that counts how many times a given character appears in a string.//(51)

// let charCount = (str, char) => {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == char) {
//             count++
//         }
//     }
//     return count;
// }
// console.log(charCount("soorrrrrrya", "r"));

// //Write a function that checks if a given number is prime.//(52)

// let isPrime = (num) => {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return "Not Prime";
//         }
//     }
//     return "Prime";
// }
// console.log(isPrime(11));

// //Write a function that sums all the even numbers in an array of numbers.//(53)

// let sumOfEven = (arr) => {
//     let newArr = [];
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             newArr.push(arr[i]);
//         }
//     }
//     for (let i = 0; i < newArr.length; i++) {
//         sum += newArr[i];
//     }
//     return sum;
// }
// console.log(sumOfEven([2, 3, 4, 5, 6, 7]));

// //Write a function that returns an array containing the common elements of two arrays.//(54)

// let commonElementsOfTwo = (arr1, arr2) => {
//     let commonArray = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] == arr2[j]) {
//                 commonArray.push(arr1[i]);
//             }
//         }
//     }
//     return commonArray;
// }
// console.log(commonElementsOfTwo([1, 2, 3, 4, 5, 6], [5, 6, 7, 8, 9]));

// //Write a function that checks if a given number is a palindrome.//(55)

// let numberPalindrome = (num) => {
//     let revNum = "";
//     let strNum = num.toString();
//     for (let i = strNum.length - 1; i >= 0; i--) {
//         revNum += strNum[i];
//     }
//     return strNum == revNum ? "palindrome" : "Not palindrom";
// }
// console.log(numberPalindrome(121)); 

// //Write a function that reverses the words in a given string.//(56)

// let revWords = (str) => {
//     let revStr = [];
//     let arrayStr = str.split(" ");

//     for (let i = arrayStr.length - 1; i >= 0; i--) {
//         revStr += arrayStr[i]
//     }

//     return revStr
// }
// console.log(revWords("Hey _ Soorya"));
// //Write a function that takes two arrays and returns their intersection (common elements). Do not use built-in methods like Set.//(57)

// let intersectionArray = (arr1, arr2) => {
//     let newArray = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++)
//             if (arr1[i] == arr2[j]) {
//                 newArray.push(arr1[i])
//             }
//     }
//     return newArray
// }
// console.log(intersectionArray([1, 2, 3, 4, 5, 9], [5, 6, 3, 2, 8, 9]));

// //Write a function that checks if a string of parentheses is balanced.//(58)
// let parenthesesBalanced = (str) => {
//     let parenthesesArr = [];
//     let arrStr = str.split("");
//     let newStr = ""
//     for (let i = 0; i < arrStr.length; i++) {
//         if (arrStr[i] == "(") {
//             parenthesesArr.push(arrStr[i])
//         } else if (arrStr[i] == ")") {
//             parenthesesArr.push(arrStr[i])
//         }
//     }
//     if (parenthesesArr.length % 2 == 0) {
//         return "Balanced"
//     } return "Not balanced"
// }
// console.log(parenthesesBalanced("((Hey)))"));


// //Write a function to find the maximum difference between any two numbers in an array.//(59)
// let maxDiffrence = (arr) => {
//     arr.sort((a, b) => a - b);
//     let max = arr[arr.length - 1];
//     let min = arr[0];
//     let diff = max - min;
//     return diff
// }
// console.log(maxDiffrence([3, 4, 16, 8, 7]));

// //Write a function to check if one string is a rotation of another.//(60)
// let rotationStr = (str1, str2) => {
//     for (let i = 0; i < str1.length; i++) {
//         for (let i = 0; i < str2.length; i++) {
//             if (str1[i].includes(str2[i])) {
//                 return "It is a Rotation";
//             } else {
//                 return "It is not a rotation";
//             }
//         }
//     }

// }
// console.log(rotationStr("abcd", "dcba"));

// //Write a function that checks if a string contains all unique characters.//(61)

// let uniqueChar = (str) => {
//     for(let i = 0;i < str.length;i++){
//         for(let j = i + 1;j < str.length;j++){
//             if(str[i] == str[j]){
//                 return false 
//             }
//         }
//     }
//     return true
// }
// console.log(uniqueChar("abccd"));

// //Write a function that takes a string and removes all spaces from it.//(62)
// let removeSpaces = (str) => {
//     str = str.split(" ").join('')
//     return str
// }
// console.log(removeSpaces("Hey Hello"));    

// //flatten an array//(63)
// let flattenArray = (arr) =>{ 
//     let newArr = arr.flat();
//     return newArr;
// }
// console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));

// //Find the Second Largest Element in an Array//(64)
// let secondLargests = (arr) =>{
//     let newArr = arr.sort()
//     return newArr[newArr.length-2];
// }
// console.log(secondLargests([4,3,6,4,8,4,7]));

// //Given an array of integers arr[] of size n, the task is to rotate the array elements to the left by d positions //(65)
// let rotateArray = (arr,d) =>{
//     for(let i = 0;i < d;i++){
//      let first = arr[0]
//      for(let j = 0;j < arr.length-1;j++){
//         arr[j] = arr[j+1];
//      }
//      arr[arr.length - 1] = first;
//     }
//     return arr;
// }
// console.log(rotateArray([1, 2, 3, 4, 5],2)); 

// //Given two arrays a[] and b[] of size m and n respectively, the task is to determine whether b[] is a subset of a[]. Both arrays are not sorted, and elements are distinct.//(66)

// let subSet = (arr1,arr2) =>{
//     for(let i = 0;i < arr1.length;i++){
//         for(let j = 0;j < arr2.length;j++){
//             if(!arr1.includes(arr2[j])){
//                 return false
//             }
//         }
//     }
//     return true

// } 
// console.log(subSet([11, 1, 13, 21, 3, 7],[11, 3, 7, 1] ));


// //Given an unsorted array a[] of size N, the task is to find its mean and median. //(67)

// let mean = (arr) =>{
//     let sum = 0;
//     for(let i = 0;i < arr.length;i++){
//        sum += arr[i]
//     }
//     let mean = sum/arr.length
//     return mean;
// }
// console.log(mean([1,3,4,2,6,5,8,7,9,10]));


// let median = (arr) => {
//     arr.sort((a, b) => a - b);  
//     if (n % 2 === 0) {
//          return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
//     } else {
//          return arr[Math.floor(arr.length / 2)];
//     }
// };
// console.log(median([1, 3, 4, 2, 6, 5, 8, 7, 9]));

// //Given an array arr[] of size N, find the smallest and second smallest element in an array.//(68)

// let smallestSecondSmallest = (arr) =>{
//     let lowest = arr[0]
//     let secondLowest = arr[1];

//    for(let i = 0;i < arr.length;i++){
//         if(arr[i] < arr[0]){
//             lowest = arr[i]
//         }
//         if(arr[i] < secondLowest && lowest != arr[i]){
//             secondLowest = arr[i];
//         }

//    }
//    return `${lowest} , ${secondLowest}` 

// }
// console.log(smallestSecondSmallest([12, 13, 1, 10, 34, 1]));

// //Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.//(69)

// let secondLargestArr = (arr) =>{
//     let max = arr[0];
//     let secMax = arr[0]
//     for(let i = 0;i < arr.length;i++){
//         if(arr[i] > max){ 
//             max = arr[i]
//         }else if(secMax < arr[i] && max != arr[i]){
//             secMax = arr[i]
//         }
//     }
//     return secMax;
//     }
// console.log(secondLargestArr([12, 35, 1, 10, 34, 1]));

// //forEach()

// //Write a program that uses forEach() to print each element of an array of strings in uppercase.//(70)
//     let str = ["soorya","hey"];

//     str.forEach(n =>{
//         console.log(n.toUpperCase());

//     })

// //Use forEach() to calculate and print the sum of an array of numbers.//(71)

// let numbers = [5, 10, 15, 20];
// let sum2 = 0 ;

// numbers.forEach((numbers) =>{
//     sum2 += numbers
// })
// console.log(sum2);

// //Create an array of objects representing students, and use forEach() to log each student's name.//(72)

// let students = [
//     { name: "Alice", age: 20 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 23 }
// ];
// students.forEach((students) =>{
//     console.log(students.name);

// })

// //Write a program that multiplies each number in an array by 3 using forEach() and logs the result.//(73)

// let nums = [1, 2, 3, 4, 5];
// nums.forEach(n =>{
//     console.log(n*3);

// })

// //Modify an external counter variable to count how many odd numbers are in an array using forEach().//(74)
// let values = [2, 3, 5, 8, 9, 12,13]
// let count = 0;
// values.forEach((n) =>{
//     if(n % 2 != 0){
//         count++
//     }
// })
// console.log(count);

// //Square each number in an array and log the results.//(75)

// let numbersFOrSquare = [1, 2, 3, 4, 5];

// numbersFOrSquare.forEach((n) => {
//     console.log(n*n);
// })

// //Calculate the total cost of all products.//(76)
// let products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 500 },
//     { name: "Tablet", price: 300 }
// ];
// let total = 0;
// products.forEach((products) => {
//     total += products.price
// })
// console.log(total);

// //Log each character of a string array with its position//(77)

// let characters = ["a", "b", "c", "d", "e"];
// characters.forEach((n,i)=>{
//     console.log(`Index ${i} : ${n}`);

// })

// //Count how many elements are greater than a specified number//(78)
// let number = [10, 15, 20, 25, 30,40];
// let threshold = 18;
// let count1 = 0;

// number.forEach((n) => {
//     if(n > threshold){
//         count1++
//     }
// })
// console.log(`Count of numbers greater than ${threshold} is ${count1}`);

// //Group array elements into odd and even numbers//(79)

// let num = [11, 24, 35, 46, 57, 68];
// let odd = [];
// let even = [];
// num.forEach((n) =>{
//     if(n % 2 == 0){
//         even.push(n)
//     }else if(n % 2 != 0){
//         odd.push(n)
//     }
// })
// console.log(`Even : ${even}
// Odd  : ${odd}`);

// //map()

// //Create an array of the squares of all numbers in a given array.//(79)

// let nbr = [1, 2, 3, 4, 5];
// let squares = nbr.map(n => n*n)
//     console.log(squares); 

// //Convert an array of strings to an array of their lengths.//(80)
// let words = ["apple", "banana", "cherry"];
// let arrayOfLength = words.map(n => n.length)
// console.log(arrayOfLength);

// //Transform an array of prices (in dollars) to their equivalent values in euros (assume 1 USD = 0.85 EUR).//(81)

// let prices = [10, 20, 30, 40];
// console.log(prices.map(n => n*0.85));

// //Add 10 to each number in an array.//(82)

// let val = [5, 15, 25, 35];
// console.log(val.map(n => n+10));

// //Convert an array of objects representing students into an array of their names.//(83)
// let student = [
//     { name: "Alice", age: 20 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 23 }
// ];
// console.log(student.map(student => student.name));

// //Convert an array of temperatures in Celsius to Fahrenheit.//(84)

// let celsius = [0, 20, 30, 40, 50];
// console.log(celsius.map(n => (n*9/5)+32));


// //Increase each number in an array by 5 and return the new array.//(85)

// let nbs = [1, 2, 3, 4, 5];
// console.log(nbs.map(n => n+5));

// // Create an array of objects with each object containing the square of the original number.//(86)

// let nms = [1, 2, 3, 4, 5];
// console.log(nms.map(n => `number : ${n} , square : ${n*n}`));

// //Add a specific suffix to each string in an array.//(87)

// const word = ["apple", "banana", "cherry"];
// const suffix = " fruit";

// console.log(word.map(n => n + suffix));

// //Round each decimal number in an array to the nearest integer.//(87)

// let decimals = [1.5, 2.6, 3.1, 4.8];
// console.log(decimals.map(n => Math.round(n)));


// //filter()

// //Filter out all the even numbers from an array.//(88)
// let nrs = [1, 2, 3, 4, 5];
// let evenNum = nrs.filter(n => n % 2 !== 0);
// console.log(evenNum);


// //Filter out all strings that are shorter than 4 characters from an array.//(89)

// let fruits = ["apple", "banana", "kiwi", "cherry"];

// let shorter = fruits.filter(n => n.length > 4 );
// console.log(shorter);

// //Filter an array of ages to get only those greater than 18.//(90)

// let ages = [15, 22, 18, 30, 17];
// let ageLess = ages.filter(n => n > 18)
// console.log(ageLess);


// //Filter out all negative numbers from an array.//(91)

// let negNumbers = [1, -2, 3, -4, 5];
// let negative = negNumbers.filter(n => n > 0);
// console.log(negative);


// //Filter out all the names that contain the letter "a" from an array.//(92)

// let names = ["Alice", "Bob", "Charlie", "gave"];
// let namesA = names.filter((n) => !n.includes("a")  && !n.includes("A"))
// console.log(namesA);

// //Calculate the total price of items in a shopping cart.//(93)

// let cart = [
//     { name: "Shirt", price: 500 },
//     { name: "Pants", price: 1000 },
//     { name: "Shoes", price: 1500 }
// ]; 
// console.log(cart.map(n => n.price).reduce((a,b) => a + b));

// //Flatten a 2D array into a 1D array.//(94)

// let arrays = [[1, 2], [3, 4], [5, 6]];
// console.log(arrays.reduce((a,b)=>a.concat(b),[]));

// //some()


// //Check if an array contains any even numbers.//(95)

// let numbrs = [1, 3, 5, 7, 10];
// let anyEven = numbrs.some(n => n % 2 == 0);
// console.log(anyEven);

// //Check if any string in the array contains more than 5 characters.//(96)

// let wods = ["apple", "banana", "kiwi", "cherry"];
// let numOfArray = wods.some((n) => n.length < 5)
// console.log(numOfArray);

// //Check if an array contains any negative numbers.//(97)

// let numbe = [2, 4, 6, 8];
// let anyNegative = numbe.some(n => n < 0);
// console.log(anyNegative);

// //Check if any string in the array starts with the letter "A".//(98)

// let letters = ["apple", "banana", "cherry", "avocado"];
// let strStartsWithA = letters.some(n => n[0] == "A" || n[0] == "a");
// console.log(strStartsWithA);

// //Check if there is at least one adult (age >= 18) in the array of ages.//(99)

// let age = [15, 23, 12, 16, 10];  

// let leastOneAdult = age.some(n => n >= 18);   
// console.log(leastOneAdult);

// //every()

// //Check if all numbers in an array are greater than 0.//(100)

// let numers = [1, 2, 3, 4];
// let allNumberGreater = numers.every(n => n > 0)
// console.log(allNumberGreater);

// //Check if all strings in the array have more than 3 characters.//(101)

// let wrds = ["apple", "banana", "kiwi"];
// let moreThanThree = wrds.every(n => n.length > 3)
// console.log(moreThanThree);

// //Check if all ages in the array are under 30.//(102)

// let old = [25, 22, 18, 27];
// let agesUnder = old.every(n => n > 30);
// console.log(agesUnder);

// //Check if all strings in an array start with the letter "A".//(103)

// let letter = ["apple", "avocado", "apricot"];
// let startWith = letter.every(n => n[0] === "a")
// console.log(startWith);


// //Check if all numbers in the array are even.//(104)

// let numb = [2, 4, 7, 8]; 
// let allNumbersEven = numb.every(n => n % 2 === 0)
// console.log(allNumbersEven); 


// //find()

// //Find the first number greater than 50 in an array.//(105)
// let numrs = [10, 25, 60, 45, 80];
// let frstNum = numrs.find(n => n > 50);
// console.log(frstNum);

// //Find the first string that contains more than 5 characters.//(106)
// let wds = ["apple", "kiwi", "banana", "pear"];
// let moreFive = wds.find((n) => n.length > 5);
// console.log(moreFive);


// //Find the first negative number in an array.//(107)
// let nubers = [5, -3, 0, -7, -2];
// let firstNeg = nubers.find(n => n < 0);
// console.log(firstNeg);

// //Find the first student who scored more than 90 marks.//(108)
// let peeople = [
//     { name: "Alice", marks: 85 },
//     { name: "Bob", marks: 92 },
//     { name: "Charlie", marks: 98 }
// ];
// let markMore = peeople.find(n => n.marks > 90);
// console.log(markMore);

// //Find the first element in the array that starts with the letter "C".//(109)
// let wors = ["apple", "banana", "cherry", "citrus"];
// let srtWith = wors.find(n => n[0] == "c");
// console.log(srtWith);


// //findIndex()


// //Find the index of the first number greater than 50 in an array.//(110)
// let numbes = [10, 25, 60, 45, 80];
// let indxFirst = numbes.findIndex(n => n > 50);
// console.log(indxFirst);


// //Find the index of the first string with more than 5 characters.//(111)
// let ords = ["apple", "kiwi", "banana", "pear"];
// let idxFirsLen = ords.findIndex(n => n.length > 5);
// console.log(idxFirsLen);


// //Find the index of the first negative number in an array.//(112)
// let nurs = [5, 3, 0, -7, -2];
// let idxNeg = nurs.findIndex(n => n < 0);
// console.log(idxNeg);


// //Find the index of the first student who scored more than 90 marks.//(113)
// let studnts = [
//     { name: "Alice", marks: 85 },
//     { name: "Bob", marks: 92 },
//     { name: "Charlie", marks: 88 }
// ];
// let idxMark = studnts.findIndex(n => n.marks >90);
// console.log(idxMark);


// //Find the index of the first element in the array that starts with the letter "P".//(114)
// let ws = ["kpple", "banana", "aherry", "pear"];
// let idxP = ws.findIndex(n => n[0] === "a");
// console.log(idxP);

// //sort() 

// //Sort an array of numbers in descending order.//(115)
// const dig = [10, 5, 8, 1, 7];
// let sortDesc = dig.sort((a,b) => a-b); 
// console.log(sortDesc);



// //Sort an array of strings alphabetically.//(116)
// const lettr = ["zebra", "apple", "orange", "mango"];
// sortAlpha = lettr.sort()
// console.log(sortAlpha);


// //Sort an array of objects by age in ascending order.//(117)
// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 30 }
// ];
// let sortAges = people.sort((a,b) => a.age - b.age);  
// console.log(sortAges);


// //Sort an array of numbers by their absolute values. //(118)
// const di = [-10, -5, 0, 5, 10]; 

// //Sort an array of strings by length in ascending order.//(119)
// const wo = ["apple", "kiwi", "banana", "cherry"];   

// //find greatest prime number below n//(120)
// let primeCheck1 = (n) => {
//     for(let i = 2;i < n;i++){
//         return true;
//     }
//     return false
// }
// console.log(primeCheck1(12));


// let greatestPrime = (n) => {
//     let i = 0;
//     let prime = n[0];   
//     while(i < n && primeCheck1){
//         i++
//         if(n[i] > prime){
//             n[i] == prime
//         }
//     }
//     return n[i];
// }
// console.log(greatestPrime(100));

// //1. Write a JavaScript function that calculates the sum of two numbers//(121)

// let sumOfTwoNumbers1 = (a,b) => {
//     sum = a + b
//     return sum
// }
// console.log(sumOfTwoNumbers(2,3));

// Write a JavaScript program to reverse the given string//(122)

// let reverseOfString = (str) =>{
//     let result = ''
//     for(let i = str.length-1;i >= 0;i--){
//         result+=str[i]
//     }
//     return result
// }

// console.log(reverseOfString('malayalam'));

// //Write a JavaScript function that finds the maximum number in an array//(123)
// let findMaxNum = (arr) => {
//     let max = arr[0]
//     for(let i = 0;i < arr.length;i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(findMaxNum([1,4,33,3,57,8]));      

// //Write a JavaScript function that uses an array of numbers and only gives a new array with even numbers//(124)

// let numberArray = (arr)=> {
//     let newArr = []
//     for(let i = 0;i < arr.length;i++){
//         if(arr[i] % 2 === 0){
//             newArr += arr[i]
//         }
//     }
//     return newArr

// }
// console.log(numberArray([1,2,3,4,5,6,7,8])); 

// //Write a JavaScript program to check whether the given number is prime//(124)
// let checkPrime = (n) =>{
//     for(let i = 2;i < n;i++){
//         if(n % i != 0){ 
//             return "  Prime"
//         }else{
//             return 'Not Prime'
//         } 
//     }
// }
// console.log(checkPrime(3)); 

//Write a JavaScript program to change the string to title (first letter of every word should be in upper case)//(125)
// let stringToTitle = (str) => {
//     let  newStr = ''
//     for(let i = 0;i < str.length;i++){
//         str[i].toUppercase(str[0])
//         newStr += str[i]
//     }
//     return newStr
// }
// console.log(stringToTitle("soorya"));

//  Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.The three functions are:increment() increases the current value by 1 and then returns it.decrement() reduces the current value by 1 and then returns it.reset() sets the current value to init and then returns it.//(126)

// let createCounter = (init) => {
//     newArr = []
//     let calls = ["increment","decrement","reset"]
//     for(i = 0;i < calls.length;i++){
//         if(calls[i] === "increment"){
//             newArr.push(init+1) 
//         }else if(calls[i] === "decrement"){
//             newArr.push(init - 1) 
//         }else if(calls[i] === "reset"){ 
//             newArr.push(init) 
//         }
//     }
//     return newArr
// }
// console.log(createCounter(5))

// //Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.The returned array should be created such that returnedArray[i] = fn(arr[i], i).Please solve it without the built-in Array.map method.//(127)

// let transformOver = (n) => {
//     let newArr = []
//     let arr = [1,2,3]
//     for(let i = 0;i < arr.length;i++){
//         newArr += arr[i] + i
//     }
//     return newArr 
// }
// console.log(transformOver(1));

// //Given an integer array arr and a filtering function fn, return a filtered array filteredArr.The fn function takes one or two arguments:arr[i] - number from the ar i - index of arr[i] filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.//(128)

// let filterArray = (arr) => {
//     let newArr = []
//     for(let i = 0;i < arr.length;i++){
//         if(arr[i] > 10){
//             newArr += arr[i]
//         }
//     }
//     return newArr
// }
// console.log(filterArray([2,3,10,20,30]));

// //Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.If the length of the array is 0, the function should return init.//(129)

// let arrayReducer = (arr) => { 
//     let curr = 0; 
//     for(let i = 0; i < arr.length; i++) { 
//         curr += arr[i];
//     }
//     return curr; 
// }; 

// console.log(arrayReducer([1,2,3,4]));  

// let checkAge = (age) => {
//     return age >18 ? "You are eligible":"NOt"
// }
// console.log(checkAge(17));

// setTimeout(() => {
//     console.log("jishnu");

// },1000)


// // async function fetchApi (){
// //     try{
// //         let res = await fetch ('https://jsonplaceholder.typicode.com/users')
// //         let data = await res.json()
// //         console.log(data);

// //     }catch(err){
// //         console.log(err);

// //     }
// // }
// // fetchApi() 

// const person = {
//     name: "John Doe",  
//     age: 30,           
//     isStudent: false,  
//     skills: ["JavaScript", "React"], 
//     address: {         
//       city: "New York",
//       zip: "10001"
//     }
// }
// console.log(Object.entries(person));

// console.log("one");

// let getApi = (cb) => {
//     setTimeout(() => {
//         cb("two");

//     },3000)
// }
// getApi((value) => {
//     console.log(value);

// })

// console.log("three");


// let starPrint = (n) =>{
//     for(let i = 1;i < n;i++){
//         let star = "*".repeat(2 * i - 1)
//         let space = " ".repeat(n - 1)
//         console.log(space + star + space);
//     }
// }  
// starPrint(5)



// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).The function composition of an empty list of functions is the identity function f(x) = x.You may assume each function in the array accepts one integer as input and returns one integer as output.

// //Write a function argumentsLength that returns the count of arguments passed to it.(130)
// let argLength = (arr) => {
//     return arr.length
// }
// console.log(argLength([5]));

// //flatten an array(131)
// let flattenArray = (arr) => {
//     let newArr = arr.flat()
//     let latestArray = newArr.flat()

//     return latestArray
// }
// console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7]));

// // Sum of All Nested Numbers(132)
// let sumOfNestedArray = (arr) => {
//     let sum = 0
//     let newArr = arr.flat()
//     let latestArray = newArr.flat()
//     for (let i = 0; i < latestArray.length; i++) {
//         sum += latestArray[i]
//     }
//     return sum
// }
// console.log(sumOfNestedArray([1, [2, 3], [4, [5, 6]], 7]));

// //Given a nested array, write a function that finds the maximum value from all levels of the array.//(133)
// let maxValueFromArray = (arr) => {
//     let result = []
//     let stack = [...arr]
//     let max = arr[0]
//     while (stack.length) {
//         var current = stack.pop()
//         if (Array.isArray(current)) {
//             for (let i = current.length - 1; i >= 0; i--) {
//                 stack.push(current[i])
//             }
//         } else {
//             result.unshift(current)
//         }
//     }
//     for (let i = 0; i < result.length; i++) {
//         if (result[i] > max) {
//             max = result[i]
//         }
//     }
//     return max

// }
// console.log(maxValueFromArray([1, [2, 3], [4, [5, 6]], 7]))

// //Write a function that returns the total count of all elements (including those inside nested arrays)//(134)

// let countElements = (arr) => {
//     let flatArr = []

//     while (arr.length) {
//         let current = arr.pop()
//         if (Array.isArray(current)) {
//             for (let i = current.length - 1; i >= 0; i--) {
//                 arr.push(current[i])
//             }
//         } else {
//             flatArr.unshift(current)
//         }
//     }
//     let count = flatArr.length;
//     return count
// }
// console.log(countElements([1, [2, 3], [4, [5, 6]], 7]))

// //Given a nested array, check if a specific value exists at any level within the array//(135)
// let elementExist = (arr,n) => {
//     let flatArr = []

//     while(arr.length){
//         let current = arr.pop()
//         if(Array.isArray(current)){
//             for(let i = current.length - 1;i >= 0;i--){
//                 arr.push(current[i])
//             }
//         }else{
//             flatArr.unshift(current)
//         }
//     }
//     for(let i = 0;i <= flatArr.length;i++){
//         return flatArr.includes(n) ? true:false
//     }
// }
// console.log(elementExist([1, [2, 3], [4, [5, 6]], 7],10));

// // //Given an array of objects, each containing a category property, group the objects by their category in a nested array structure.//(136)
// // let groupObject = (arr) => {
// //     let fruits = [];
// //     let Vegetables = [];
// //     for(let i = 0;i <= arr.length;i++){DeepTrack
// //         let objs = arr[i]
// //         for(let i = 0;i < objs.length;i++){
// //             if(objs.category === "Fruit"){ 
// //                 fruits.push(objs[i])
// //             } 
// //         }
// //     }
// // } 
// // console.log(groupObject([{ name: 'Apple', category: 'Fruit' }, { name: 'Carrot', category: 'Vegetable' }, { name: 'Banana', category: 'Fruit' }]));


// //Given a K-increasing-decreasing array arr[], the task is to sort the given array. An array is said to be K-increasing-decreasing if elements repeatedly increase upto a certain index after which they decrease, then again increase, a total of K times. The diagram below shows a 4-increasing-decreasing array.//(137)

// let sortLogic = (arr) => {
//     let min = arr[0]
//     let newArr = [ arr[0]] 
//     while(arr.length){
//         let i = 0;
//         i++
//         if(arr[i] < arr[0]){
//             newArr.push(arr[i])
//         }

//     }
//     return newArr

// }
// console.log(sortLogic([57, 131, 493, 294, 221, 339, 418, 458, 442, 190]));


// let iterateByNumber = (arr) => {
//     const count = 0
//  }
// console.log(iterateByNumber([2,"B",3["C","K"]]));


// let fetchData = async() => {
//     let res = await fetch('https://jsonplaceholder.typicode.com/users')
//     let data = await res.json()
//     console.log(data);

// }
// fetchData()


//Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

let callLastElement = (arr) => {
    return arr[arr.length - 1]
}
console.log(callLastElement([1, 2, 3, 4, 5, 7]));



let perfectSquare = (n) => {
    if (typeof (n) !== "number") {
        return "invalid input"
    }
    for (let i = 1; i <= n; i++) {
        if (i * i == n) {
            return "perfect sqr"
        }
    }
    return "Not"
}

console.log(perfectSquare(1));

let armstrongNumber = (n) => {
    let sum = 0;
    let strN = n.toString()
    for (let i = 0; i < strN.length; i++) {
        sum += strN[i] ** 3
    }
    return sum == n ? "arm" : "not"
}
console.log(armstrongNumber(11));

let fibonacci = (n) => {
    let arr = [0, 1];
    let firstNumber = 0;
    let secondNumber = 1;

    for (let i = 2; i < n; i++) {
        let nextNumber = firstNumber + secondNumber
        arr.push(nextNumber)
        firstNumber = secondNumber
        secondNumber = nextNumber
    }
    return arr

}
console.log(fibonacci(10));

//Given an array of numbers, write a function that rotates the array k times to the right. After rotation, return the rotated array.

// let rotateArray = (arr, k) => {
//     for(let i = 0; i < k; i++) { 
//        let newEl = arr[arr.length-1]
//        for(let j = arr.length-1;j > 0;j--){
//          arr[j] = arr[j-1]
//        } 
//        arr[0] = newEl

//     }
//     return arr

// };

// console.log(rotateArray([1, 2, 3, 4, 5], 2)); 

// 1. Add Two Numbers Represented by Arrays (Reverse Order)
// You are given two arrays where each array represents a number. The digits of the number are stored in reverse order (e.g., [2, 4, 3] represents the number 342). Write a function that adds these two numbers and returns the result as an array in the same reversed order.

// Example:

// javascript
// Copy
// Edit
// Input: [2, 4, 3], [5, 6, 4]
// Output: [8, 0, 7]
let sumOfTwoReverse = (arr1, arr2) => {
    let newArrOne = []
    let newArrTwo = []
    for (let i = arr1.length - 1; i >= 0; i--) {
        newArrOne.push(arr1[i])
    }
    for (let j = arr2.length - 1; j >= 0; j--) {
        newArrTwo.push(arr2[j])
    }
    let newArrOneJoin = newArrOne.join("")
    let newArrTwoJoin = newArrTwo.join("")
    let finalArr = [parseInt(newArrOneJoin), parseInt(newArrTwoJoin)]

    let sum = 0
    for (let i = 0; i < finalArr.length; i++) {
        sum += finalArr[i]
    }
    let larr = sum.toString().split("").map(Number)
    let farr = []
    for (let i = larr.length - 1; i >= 0; i--) {
        farr.push(larr[i])
    }
    return farr
}
console.log(sumOfTwoReverse([4, 3, 5], [5, 6, 7]));

// 2. Multiply Two Numbers Represented by Arrays (Reverse Order)
// Write a function that multiplies two numbers represented by arrays in reverse order. Each array represents a number, and the digits are in reverse order. Return the result as an array in the same reversed order.


// Input: [2, 4, 3], [5, 6, 4]
// Output: [2, 4, 3, 0]




// 3. Rotate a List of Numbers to the Right
// Given an array of numbers, write a function that rotates the array k times to the right. After rotation, return the rotated array.

// Example:

// javascript
// Copy
// Edit
// Input: [1, 2, 3, 4, 5], k = 2
// Output: [4, 5, 1, 2, 3]

let rotateArray = (arr, K) => {
    for (let i = 0; i < K; i++) {
        let lastEl = arr[arr.length - 1]
        for (let j = arr.length - 1; j > 0; j--) {
            arr[j] = arr[j - 1]
        }
        arr[0] = lastEl
    }
    return arr
}
console.log(rotateArray([1, 2, 3, 4, 5], 2));
// 4. Find the Longest Substring Without Repeating Characters
// Write a function that takes a string and returns the length of the longest substring that does not contain repeating characters.

// Input: "abcabcbb" 
// Output: 3 (The longest substring is "abc") 
let findLongest = (str) => {
    let arr = str.split("")
    for (let i = 0; i < arr.length; i++) {

    }
    return arr;
}
console.log(findLongest("abcabcbb"));
// 5. Flatten a Nested Array
// Write a function that takes a nested array and returns a flattened version of that array. The array can have nested arrays of arbitrary depth.

// Input: [1, [2, [3, 4], 5], 6]
// Output: [1, 2, 3, 4, 5, 6]

let countElements = (arr) => {
    let flatArr = []

    while (arr.length) {
        let current = arr.pop()
        if (Array.isArray(current)) {
            for (let i = current.length - 1; i >= 0; i--) {
                arr.push(current[i])
            }
        } else {
            flatArr.unshift(current)
        }
    }
    return flatArr
}
console.log(countElements([1, [2, 3], [4, [5, 6]], 7]))



// 6. Find All Pairs of Integers That Sum to a Target
// Write a function that takes an array of integers and a target sum. Return all unique pairs of integers that sum up to the target.

// Example:


// Input: [1, 2, 3, 4, 3, 2, 1], target = 5
// Output: [[1, 4], [2, 3]]

let targetSum = (arr, t) => {
    let newArr = [];
    let setArr = new Set(arr)
    let lastArr = [...setArr]

    for (let i = 0; i < lastArr.length; i++) {
        for (let j = lastArr.length - 1; j > 0; j--) {
            if (arr[i] + arr[j] == t) {
                newArr.push([arr[i], arr[j]])
            }
        }
    }
    return newArr

}
console.log(targetSum([1, 2, 3, 4, 3, 2, 1], 5));

// 7. Merge Two Sorted Arrays
// Write a function that takes two sorted arrays and merges them into one sorted array. You should return the merged array as a sorted list.

// Example:

// javascript
// Copy
// Edit
// Input: [1, 3, 5], [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]
let mergeTwoArrays = (arr1, arr2) => {
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i])
    }
    return arr2.sort((a, b) => a - b)
}
console.log(mergeTwoArrays([1, 3, 5], [2, 4, 6]));

// 8. Group Anagrams
// Write a function that groups anagrams from a list of strings. Return the groups as an array of arrays.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"] 
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

// let groupAnagram = (arr) => {

// for(let i = 0;i < arr.length;i++){ 
//     for(let j = 0;j<arr[i].length;i++){
//         a
//     } 
// }
// } 
// console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));


// 9. Remove Duplicates from an Array
// Write a function that removes duplicates from an array without using any built-in set or map methods. Return a new array with only unique elements.

// Input: [1, 2, 2, 3, 3, 4]
// Output: [1, 2, 3, 4]

let removeDuplicate = (arr) => {
    let sortedArray = [...arr]
    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = 0; j < sortedArray.length; j++) {
            if (sortedArray[j] > sortedArray[i + 1]) {
                let temp = sortedArray[j]
                sortedArray[j] = sortedArray[i + 1]
                sortedArray[i + 1] = temp
            }
        }
    }
    let duplicate = [sortedArray[0]]
    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] !== sortedArray[i - 1]) {
            duplicate.push(sortedArray[i])
        }
    }
    return duplicate


}
console.log(removeDuplicate([5, 4, 7, 20, 8, 38, 10, 45, 10, 5]));

// 10. Reverse Words in a Sentence
// Write a function that reverses the words in a given sentence. The words should appear in reverse order, but the individual words should remain unchanged.

// Input: "Hello World"
// Output: "World Hello"

// let reverseWord = (str) => {
//     let words = str.split(" ");
//     let reversedStr = "";
//     for(let i = words.length - 1;i >= 0;i++){
//         reversedStr += words[i] + (i !== 0 ? " ":'')
//     }
//     return reversedStr
// }
// console.log(reverseWord("Hello world"));


// 11. Find the Intersection of Two Arrays
// Write a function that takes two arrays and returns the intersection of the arrays, i.e., the elements that appear in both arrays.


// Input: [1, 2, 2, 1], [2, 2]  
// Output: [2, 2]

let intersectionOfArrays = (arr1, arr2) => {
    let intersectionArray = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                intersectionArray.push(arr1[i])
            }
        }
    }
    return intersectionArray

}
console.log(intersectionOfArrays([1, 2, 3, 4], [2, 5, 4, 6]));

// 12. Find the Missing Number in an Array
// You are given an array of integers from 1 to n with one missing number. Write a function to find and return the missing number.

// Example:

// javascript
// Copy
// Edit
// Input: [3, 7, 1, 2, 8, 4, 5], n = 8
// Output: 6

let findMissingNumber = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]

    }
    let n = arr.length + 1
    let expectedSum = n * (n + 1) / 2
    let missingNumber = expectedSum - sum
    return missingNumber

}
console.log(findMissingNumber([]));

// 13. Maximum Subarray Sum (Kadane’s Algorithm)
// Write a function to find the contiguous subarray (containing at least one number) which has the largest sum and return that sum.

// Example: 

// javascript
// Copy
// Edit
// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6 (The subarray [4, -1, 2, 1] has the largest sum) 


// 14. Check for Balanced Parentheses
// Write a function that checks if the parentheses in a string are balanced. A string is balanced if each opening parenthesis has a corresponding closing parenthesis.

// Example:

// javascript
// Copy
// Edit
// Input: "(())"
// Output: true

// 15. Sum of Digits Until a Single Digit 
// Write a function that takes a number and returns the sum of its digits until the result is a single digit.


// Input: 38
// Output: 2 (3 + 8 = 11, 1 + 1 = 2)

// let sumOfDigits = (n) => {
//     let arr = n.toString().split("").map(Number)
//     let newArr = []
//     let sumOfArray = arr[i] +arr[i + 1]
//     for (let i = 0; i < arr.length; i++) {
//         if(sumOfArray.length !== 1){

//         }

//     }
// } 
// console.log(sumOfDigits(38));




// 1. Reverse Every Second Subarray
// Given an array, divide it into subarrays of length k, and reverse every second subarray.
// Input: ([1,2,3,4,5,6,7,8,9], k = 3)
// Output: [[1,2,3], [6,5,4], [7,8,9]]

let reverseSubArr = (arr, k) => {
    let result = []
    for (let i = 0; i < arr.length; i += k) {
        let subArr = arr.slice(i, i + k)
        if ((i / k) % 2 === 1) {
            subArr.reverse()
        }
        result.push(subArr)

    }
    return result

}
console.log(reverseSubArr[1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
let reverseEverySecondSubArr = (arr, k) => {
    let result = [];

    for (let i = 0; i < arr.length; i += k) {
        let subArr = arr.slice(i, i + k);
        if ((i / k) % 2 === 1) {
            subArr.reverse();
        }
        result.push(subArr);
    }

    return result;
};

console.log(reverseEverySecondSubArr([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))

// 2. Find All Triplets That Sum to Zero
// Write a function that finds all unique triplets in an array that sum up to zero.


// Input: [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]

let TripletSumToZero = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    let triple = [arr[i], arr[j], arr[k]]
                    newArr.push(triple)
                }
            }
        }
    }
    return newArr
}
console.log(TripletSumToZero([-1, 0, 1, 2, -1, -4]));



// 4. Count Number of Unique Pairs That Sum to a Target
// Write a function that counts unique pairs in an array that sum to a given target.

// Input: [1, 3, 2, 2, 4, 5], target = 6
// Output: 2 (Pairs: [1,5] and [2,4])

let uniquePairsSomeToTarget = (arr, t) => {
    let uniqueArr = new Set(arr)
    let newArr = [...uniqueArr]
    let dupArr = []
    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[i] + newArr[j] == t) {
                let newEl = [newArr[i], newArr[j]]
                dupArr.push(newEl)
            }
        }
    }
    return dupArr.length
}
console.log(uniquePairsSomeToTarget([1, 3, 2, 2, 4, 5], 6));

// Merge Intervals
// Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]

// let mergeIntervals = (arr) => {
//     let newArr = [];
//     for(let i = 0;i < arr.length;i++){
//         for(let j = 0;j < arr[i].length;j++){
//             if(arr[j].length-1 > arr[j[arr[0]]]){

//             }
//         }
//     }
// }
// console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));


// Find the Next Greater Element for Each Element
// For each element in an array, find the next greater element to its right. If there is none, return -1.

// Input: [2, 1, 3, 5, 4]
// Output: [3, 3, 5, -1, -1]

let nextGreater = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let found = false
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                newArr.push(arr[j])
                found = true
                break
            }
        }
        if (!found) newArr.push(-1)
    }
    return newArr
}
console.log(nextGreater([2, 1, 3, 5, 4]));


//Find First and Last Position of Element in Sorted Array
// Write a function that finds the starting and ending position of a given target in a sorted array.

// Input: [5,7,7,8,8,10], target = 8
// Output: [3,4]

let positionOfEl = (arr, t) => {
    let first = arr.indexOf(t)
    let last = arr.lastIndexOf(t)
    return [first, last]

}
console.log(positionOfEl([5, 7, 7, 8, 8, 10], 8));

// Find Kth Largest Element in an Array
// Write a function that returns the Kth largest element in an array.


// Input: [3,2,1,5,6,4], k = 2
// Output: 5

let findLarge = (arr, k) => {
    let sortedArray = arr.sort((a, b) => a - b)
    return sortedArray.length - k + 1
}
console.log(findLarge([3, 2, 1, 5, 6, 4], 2));

// Find Missing Ranges
// Given a sorted array and a range [lower, upper], find the missing numbers in that range.


// Input: [0, 1, 3, 50, 75], lower = 0, upper = 99
// Output: ["2", "4->49", "51->74", "76->99"]

let findMissingRanges = (arr, s, l) => {

}
console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99));


// Find the Index of Peak Element
// Find an index i such that arr[i] is greater than its neighbors.

// Input: [1, 2, 3, 1]
// Output: 2 (arr[2] = 3 is a peak)

let findPeakEl = (arr) => {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return arr.indexOf(max)

}
console.log(findPeakEl([1, 2, 3, 1]));

// Find Two Elements With Minimum Absolute Difference
// Find two elements in an array with the smallest absolute difference.

// Input: [3, 8, 15, 17]
// Output: [15, 17]

let minimumAbsoluteDiff = (arr) => {
    let sortedArr = arr.sort((a, b) => a - b)
    let last = arr[arr.length - 1]
    let scndLast = arr[arr.length - 2]
    return [scndLast, last]
}
console.log(minimumAbsoluteDiff([3, 8, 15, 17]));


//Given an array arr[] of size n, the task is to find all the Leaders in the array. An element is a Leader if it is greater than or equal to all the elements to its right side.

let findLeader = (arr) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let isLeader = true
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[i] <= arr[j]) {
                isLeader = false;
                break;
            }
        }
        if (isLeader) {
            result.push(arr[i])
            break
        }
    }
    return result
}
console.log(findLeader([16, 17, 4, 3, 5, 2]));


// let leader = (arr) => {
//     let result  = []
//     for(let i = 0;i <arr.length;i++){
//         let isLeader =  true
//         for(let j = i + 1;j < arr.length;j++){
//             if(arr[i] < arr[j]){
//                 isLeader = false
//                 break;
//             }
//         }
//         if(isLeader){
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(leader([16, 17, 4, 3, 5, 2]));


//Given an array arr consisting of N integers and an integer K, the task is to insert an adjacent K for every occurrence of it in the original sequence and then truncate the array to the original length using an O(1) auxiliary space.

let insertSameEl = (arr, k) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == k) {
            arr.splice(i + 1, 0, k)
            i++
            arr.pop()
        }
    }
    return arr
}
console.log(insertSameEl([2, 3, 2, 4, 2, 5], 2));

// Given an integer array, find a maximum product of a triplet in the array.

// let maxProduct = (arr) => {
//     arr.sort((a, b) => a - b)

//     return arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3]
// }
// console.log(maxProduct([10, 3, 5, 6, 20]));

//move zero to the end of the code

let moveZero = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            newArr.push(arr[i])
        }
    }
    let noZero = arr.filter(item => item !== 0)
    return noZero.concat(newArr)

}
console.log(moveZero([1, 0, 3, 0, 2, 4, 0]));

//count accurance of k in the code
let countAccurance = (arr, k) => {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == k) {
            count++
        }
    }
    return count
}
console.log(countAccurance([0, 1, 3, 0, 2, 2, 4, 2], 2));

// Given an array arr[] of n integers, construct a product array res[] (of the same size) such that res[i] is equal to the product of all the elements of arr[] except arr[i]. 
let productOfEle = (arr) => {
    let res = new Array(arr.length).fill(1)
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                res[i] *= arr[j]
            }
        }
    }
    return res

}
console.log(productOfEle([10, 3, 5, 6, 2]));


//You are given a 2D array where each element is a subarray containing integers. Your task is to identify and return all unique duplicate elements found in any of the subarrays.

let dupNested = (arr) => {
    let lkld = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
        }
    }
    return lkld
}
console.log(dupNested([
    [1, 2, 3, 4, 5, 4, 4, 1],
    [, 2, 3, 4, 5, 5]
]));

//////////////////////////
//splice


// let arr = ['I','go','home']
// delete arr[1]
// alert(arr[1])

// let arr = ['I','study','javascript']
// arr.splice(1,1)
// alert(arr)

// let arr = ["i","study","javascript","right","now"]

// arr.splice(0,3,"lets","dance")
// alert(arr)

// let arr = ["i","study","js","right","now"]
// let removed  = arr.splice(0,3)
// alert(removed);

// let arr = ["I","study","javascript"]
// arr.splice(2,0,"complex","language")
// alert(arr)

// let arr = [1,2,5]
// arr.splice(-1,0,3,4) 
// alert(arr)

////////////////////////////////
//slice

// let arr = ["t","e","s","t"]
// alert(arr.slice(1,3))
// alert(arr.slice(-1))

// let arr = ["t","e","s","t"]
// alert(arr.slice())

///////////////////////////
//concat

// let arr = [1,2]
// alert(arr.concat([3,4]))
// alert(arr.concat([3,4],[5,6]))
// alert(arr.concat([3,4],5,6))

////////////////////////////
//forEach

// ["Bilbo","Gandalf","Nazgul"].forEach(alert)

// ["Bilbo","Gandalf","Nazgul"].forEach((item,index,array) => {
//     alert(`${item} is at index ${index} in ${array}`)
// })

///////////////////////////
//indexOf(),includes()

// let arr = [1,0,false]

// alert(arr.indexOf(0))
// alert(arr.indexOf(false))
// alert(arr.indexOf(null))

// alert(arr.includes(1))

// let fruits = ['apple','orange','apple']
// alert(fruits.indexOf('apple'))
// alert(fruits.lastIndexOf('apple'))

// let users = [
//     {id:1,name:"John"},
//     {id:2,name:"Pete"},
//     {id:3,name:"Mary"}
// ]
// let user = users.find(item => item.id == 1)
// alert(user.name)

// let users =[
//     {id:1,name:"John"},
//     {id:2,name:"pete"},
//     {id:3,name:"Mary"},
//     {id:4,name:"John"}
// ]
// alert(users.findIndex(user => user.name == 'John'))
// alert(users.findLastIndex(user => user.name == 'John'))

/////////////////////
//filter

// let users = [
//     {id:1,name:"John"},
//     {id:2,name:"Pete"},
//     {id:3,name:"Mary"}
// ]
// let someUser = users.filter(item => item.id < 3)
// alert(someUser.length)

////////////////////
//map

// let lengths = ["Bilbo","Gandalf","Nazgul"].map(item =>item.length);
// alert(lengths)

/////////////////////
//revrse

// let arr = [1,2,3,4,5]
// alert(arr.reverse())   

////////////////////
//split and join

// let names = "bilbo,gandalf,nazgul"
// let arr = names.split(', ')
// for(let name of arr){
//     alert(`A message to ${name}`)
// } 

// let arr = ['Bilbo,gandalf,nazgul,saruman'].split(',',2);
// alert(arr) 

// let str = 'test'
// alert(str.split(''))

// let arr = ['Bilbo','Gandalf','Nazgul']
// alert(str = arr.join('.'))

// let arr = [1,2,3,4,5]
// alert(arr.reduce((sum,current) => sum + current))

// let camalCase = (str) => {
// return str.split('-').map((word,index) => index == 0? word : word[0].toUpperCase() + word.slice(1)).join('')
// }
// console.log(camalCase('backgro-veriety'));
// let arr = [5,3,8,1] 

// let usere = {
//     name:"John",
//     age:30
// }

// let arr = ['apple','banana','orange']
// let obj = {
//     fruits:[]
// }
// arr.forEach(items =>obj.fruits.push(items))
// console.log(obj);

// let arr = ['a','b','c']
// let obj = {}

// arr.forEach((val,index) => {
//     obj[`item${index + 1}`] = val
// })

// console.log(obj);

// let arr = ['a','b','c']
// let obj = {} 
// arr.forEach((index,val) => {
//     obj[`items${index + 1}`] = val
// })

// let isBalanced = (str) => {
//     let stack = []
//     let pair = {
//         ')' : '(',
//         '}' : '{',
//         ']' : '['
//     }  
//     for(let char of str){
//         if(['(','{','['].includes(char)){
//             stack.push(char)
//         }
//     }
//     return stack
// }
// console.log(isBalanced("([{[]}])")); 

// let findCount = (arr) => {
//     for (let i = 0; i < arr.length; i++) {

//     }
// }
// console.log(findCount([1, 2, 3, 4, 5, 4, 6, 4, 1]));

// let camelCase = (str) => {
//     let arr = str.split("-")
//     let kj = arr[0]

//     for (let i = 1; i < arr.length; i++) {
//         let hel = arr[i]
//         kj+=hel[0].toUpperCase() + hel.slice(1) 
//     }
//     return kj 
// }
// console.log(camelCase("list-style-image"));

// Given an array arr[] of n integers, construct a product array res[] (of the same size) such that res[i] is equal to the product of all the elements of arr[] except arr[i]. 

let productAll = (arr) => {
    let res = new Array(arr.length).fill(1);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] != arr[j]) {
                res[i] *= arr[j]
            }
        }
    }
    return res
}
console.log(productAll([1, 2, 3, 4, 5]));

// ✅Given an array of integers that can include negative numbers and zeros, find the maximum product of a contiguous subarray.

function maxProduct(arr) {
    const n = arr.length

    let result = arr[0]

    for (let i = 0; i < n; i++) {
        let mul = 1

        for (let j = i; j < n; j++) {
            mul *= arr[j]

            if (mul > result)
                result = mul
        }
    }
    return `${result}`
}
console.log(maxProduct([-2, 6, -3, -10, 0, 2]));


let findLongestSubString = (str) => {
    let temp = ""
    let longest = ""
    for (let i = 0; i < str.length; i++) {
        if (temp.includes(str[i])) { 
            let index = temp.indexOf(str[i]);
            temp = temp.slice(index + 1);
        }
        temp += str[i];
        if (temp.length > longest.length) {
            longest = temp
        }
    }
    return longest
}
console.log(findLongestSubString("abcabopqrstuvwxyabcdef"));


//Longest Substring Without Vowels

let longestNoVowelSubstring = (str) => {
    let temp = ""
    let longest = ""
    let vovel = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < str.length; i++) {
            if(vovel.includes(str[i])) {
                temp = ""
            }else{ 
                temp += str[i]
                if (temp.length > longest.length) {
                    longest = temp
                }
            }
        }
        return longest
}
console.log(longestNoVowelSubstring("helloworldbeautiful"));

//Number of islands

const getAdjNeighbors = (i,j,grid,visited) => {
    const adjNeighbors = []
    if(i > 0 && !visited[i - 1][j])adjNeighbors.push([]) 

    return adjNeighbors
}

const dFS =(i,j,grid,visited) =>{
    const stack = [[i,j]]
    let islandSize = 0;


    while(stack.length){
        let curNode =  stack.pop(); 
        let [i,j] = curNode

        //check if visited at i and j
        if(visited[i][j])continue;
        visited[i][j] = true;

        //check if cell is part of an island
        if(grid[i][j] == '0')continue;
        islandSize++

        let adjNeighbors = getAdjNeighbors(i,j,grid,visited)

        stack.push(...adjNeighbors);
    }

    return islandSize > 0 ? true : false; 
}
 
let numIsland = (grid) => {
    let visited = grid.map(row => row.map(cell => false));
    let islandCount = 0;
    for(let i = 0;i < grid.length;i++){
        for(let j = 0;j < grid[i].length;j++){ 
            if(dFS(i,j,grid,visited))islandCount++; 
        }
    }
 
    return islandCount
}

// let fizzBuzz =(n) => {
//     for(let i = 1;i <= n;i++){ 
//         if(i % 3 == 0 && i % 5 == 0){
//             console.log('Fizz buzz');
            
//         }else if(i % 3 == 0){
//             console.log('Fizz');
//         }else if(i % 5 == 0){
//             console.log('Buzz');

//         }else{
//             console.log(i);
//         }
//     }
// }
// fizzBuzz(15) 

let patternPrint = (n) => {
    for (let i = 0; i <= n; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }    
};
       
patternPrint(5);


// let fetchApi = async() => {
//     const res  = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data  = await res.json()
//     console.log(data);
    
// }
// fetchApi() 

let removeDiplicate = (arr) =>{
    let dupArr = []
    for(let i = 0;i < arr.length;i++){
        if(!dupArr.includes(arr[i])){
            dupArr.push(arr[i])
        }
    }

    return dupArr

}
console.log(removeDiplicate([1,2,3,4,5,3,2]));


let printStar = (n) => {
 for(let i = 0;i <= n;i++){
    let star = ''
    for(let k = 1 ; k <= n-i; k++){
        star += ' '
    }
    for(let j = 1;j <= i;j--){
        star += '* '
    }
    console.log(star);
 }
}
printStar(5) 

// let checkPalindrome = (str) =>{
//     let result = '';
//     for(let i = str.length-1;i >= 0;i--){
//         result += str[i]
//     } 
//     return result == str?'Palindrome':'Not a palindrome'
// }
// console.log(checkPalindrome('malayalam'));  