// Print odd numbers in an array

var numbers=[1,3,5,6,7,8,9];

result= numbers.filter((num)=>{return num%2!==0});
console.log(result)

var numbers=[2,4,6,8,10,12,14,16]
result= numbers.map((val)=> {return val*2});
console.log(result);

// Prints the elements in title caps

var str=["sathish","nimalan","udhay"]
 n = str.map((val)=>{return val.charAt(0).toUpperCase() + val.subst.toLowerCase()})
 console.log(n)
 console.log(str)

// Print sum of all elements in an array

var n=[5,10,20,25,30,35]
sum=n.reduce((accumalator,currentvalue)=> {return accumalator+currentvalue})
console.log(sum)

// Print prime numbers in an array

var prime=[1,2,3,4,5,6,7,8,9,10,11,12,13]

numbers= prime.filter((val)=> {return val%2!==0})
console.log(numbers)

// Print palindromes in an array

var palindromes=["pop","mom","cat"]
pal = palindromes.filter((e)=> {return e=== e.split('').reverse().join("")})
console.log(pal)



