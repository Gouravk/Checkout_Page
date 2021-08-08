let addbtn1=document.querySelector('#add1');
let subbtn1=document.querySelector('#subtract1');
let input1=document.querySelector('#id-quant1');
let addbtn2=document.querySelector('#add2');
let subbtn2=document.querySelector('#subtract2');
let input2=document.querySelector('#id-quant2');

addbtn1.addEventListener('click', () =>{

    input1.value=parseInt(input1.value) + 1;
});

subbtn1.addEventListener('click', () =>{
    if(parseInt(input1.value)>1){
        input1.value=parseInt(input1.value) - 1;
    }
    
});

addbtn2.addEventListener('click', () =>{

    input2.value=parseInt(input2.value) + 1;
});

subbtn2.addEventListener('click', () =>{
    if(parseInt(input2.value)>1){
        input2.value=parseInt(input2.value) - 1;
    }
    
});
