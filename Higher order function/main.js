let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = myString.split(',').filter((e)=>{
    return isNaN(e);

}).map((e,index,array)=>{
    if(index === array.length-true){
        {
            return ;
        }
    }
    if (e === '_')
    {
        e =' ';
    }
    return e[+false];
}).join('');
console.log(solution); // Elzero Web School