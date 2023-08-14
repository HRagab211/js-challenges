// header start

let bdy = document.getElementsByTagName('body')[0];

let header = document.createElement('header');
// header style
header.style.width='100%';
header.style.display='flex';
header.style.justifyContent='space-between';


let header_name  = document.createElement('h3');
let name    = document.createTextNode('Hossam Ragab');

header_name.style.color='green';
header_name.appendChild(name);

header.appendChild(header_name);

bdy.appendChild(header);

let ul = document.createElement('ul');
ul.style.listStyle='none';
ul.style.flex='1';
ul.style.display='flex';
ul.style.justifyContent='space-between';

let links_name = ['Home','Products','Profile','Contact'];

links_name.forEach((e)=>{

    let li=document.createElement("li");
    let li_text = document.createTextNode(`${e}`);
    li.appendChild(li_text);
    ul.appendChild(li);
});

header.appendChild(ul);

// header end



// products start

    let products_div  = document.createElement('div');
    // product div style
    products_div.style.backgroundColor='#eee';
    products_div.style.width='100%';
    products_div.style.height='80vh';
    products_div.style.display='flex';
    products_div.style.flexWrap='wrap';
    products_div.style.gap='20px';
    // products_div.style.alignItems='center';
    for (let i = 0; i < 15; i++) {

        let product_container = document.createElement('div');
        product_container.setAttribute('class','product');
        product_container.style.width='300px';
        product_container.style.height='200px';
        product_container.style.backgroundColor='white';
        product_container.style.margin='15px';
        product_container.style.display='flex';
        product_container.style.flexDirection='column';
        product_container.style.justifyContent='center';
        product_container.style.alignItems='center';
    
        let product_h1 = document.createElement('h1');
        product_h1.textContent=`${i+1}`;
        let product_p = document.createElement('p');
        product_p.innerText='Product';
        product_container.appendChild(product_h1);
        product_container.appendChild(product_p);
    
        products_div.appendChild(product_container);        
    }

    bdy.appendChild(products_div)

// products end


// footer

let footer = document.createElement('footer');
footer.style.backgroundColor='green';
footer.style.width='100%';
footer.style.height='70px';
footer.style.color='white';
footer.style.textAlign ='center' ;
// let h2 = document.createElement('h2');

footer.innerHTML = `<h2>
                        Copyright By Hossam Ragab @ 2023
                        </h2>
` 

bdy.appendChild(footer)
