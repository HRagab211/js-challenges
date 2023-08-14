function random(...inputs)
{

    let name,age,hire;

    inputs.forEach(function(val){
    if(typeof val==='string'){
        name=val;
    }else if (typeof val==='boolean')
    {
        hire=val;
    }
    else {
        age=val;
    }
    });
    document.write('<div>');
    document.write(`<p> Hello ${name} Your age is ${age} ${hire?"you are available to hire":"You are not available to Hire"} </p>`)
    document.write('</div>');
}

random('Hossam',true,23);
random(30,'Ali',true);
random(false,'yasmeen',40);