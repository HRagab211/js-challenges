/*
div class product

h3 with text 

p with text 

repeat div 100 time

*/
// function createPage (i){



//     let div = document.createElement('div');
//     div.setAttribute('class','product');
//     // create h3
//     let h3 = document.createElement('h3');
//     // create h3 text
//     let h3Text = document.createTextNode('Hossam Ragab'+i);
//     // child appended to h3
//     h3.appendChild(h3Text);
//     // append h3 to div
//     div.appendChild(h3);
//     //create p tag and append it to the parent element
    
//     let p = document.createElement('p');
//     let pText = document.createTextNode('I am full stack developer');
//     // child appended to p
//     p.appendChild(pText);
    
//     div.appendChild(p);
//     div.appendChild(document.createElement('hr'));

// document.body.appendChild(div);
    
// }

// for (let i = 0; i < 100; i++) {
    
//     createPage(i+1);
// }

let text = document.getElementById('user');

text.onblur = function(){

document.links[0].click();
}