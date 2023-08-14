

let names=(...names)=>'String ['+names.join('],[')+'] => Done !';

console.log(names('Hossam','Ahmed','ragab'));



let myNumbers = [20,50,10,60];
// console.log((myNumbers.reduce((a,b)=>a+b)))


let  calc = (one,two,...nums)=>one+two-(nums.reduce((a,b)=>a+b));

console.log(Math.abs(calc(10,50,...myNumbers))) //80