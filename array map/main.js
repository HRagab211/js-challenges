//
// let nums = [1,-13,12,-5,5,-6,-8,4,6,8];
//
// let newNums= nums.map(function (ele){
//    return ele * -1
// });
//
//


// let str= "Hos123sa2m";
//
// let newStr = str.split('').map((ele)=>{
//    if (isNaN(ele) )
//    {
//       return ele;
//    }
//
//
// }).join('');
//
//
// console.log(newStr)
//
// let firends =['hossam','ahmed','hassan','hany','mohammed','Hana','yasmeen'];
//
// let filterd = firends.filter((ele)=>{
//    return ele.toLowerCase().startsWith('h');
// });
//
// console.log(filterd);

//
// let sentence = "I Love Foood Code Too Playing Much";
//
// let newS = sentence.split(' ').filter((s)=>{
//    return s.length<=4;
// }).join(' ');
//
// console.log(newS);

//
// let mix = "A13BS25a6ZX";
// let total=0;
// let res = mix.split('').filter(function(el){
//    return isNaN(parseInt(el))?false:true;
// }).map(function (e){
//   total += parseInt(e)
// });
//
// console.log(total);

let num = [1,2,3,4,6,7];

let newnums = num.reduce(function (previousValue,currentValue,currentIndex,array){
   console.log(previousValue+1);
   console.log(currentValue);
   console.log(currentIndex);
   console.log(array);
})