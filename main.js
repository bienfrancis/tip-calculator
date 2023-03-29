// on keypress validate input should be not 0 or text add warning

let bill = document.querySelector(".billed");
let custom = document.querySelector('#percent-opt');
let person = document.querySelector('#numberPeolpe');
let reset = document.querySelector('.reset');
let tipAmountPerPerson = document.querySelector('.tip__amount');
let cantBeZero = document.querySelector('#peopleNumber');
let totalBills, totalCustom, totalPerson, amountPerson, totalPerPerson ;
let span = document.createElement('span');
let spanText = document.createTextNode("Can't be zero");
let btnPercent = document.querySelectorAll('.btn-percent');
let btnPercentVal;

span.appendChild(spanText);

const checkNumeric = (data) => {
    if(isNaN(data.value) || data.value == 0){
        data.style  = "outline: 2px solid #b9826d";
        reset.classList.remove('active');
    }else{
        data.style  = "outline: 2px solid hsl(172, 67%, 45%)";
        reset.classList.add('active');
    }
}

// set active to button percentage and get value
for(let i = 0; i < btnPercent.length; i++){
    let activeBtn = btnPercent[i];
    activeBtn.addEventListener('click', () => {
        removeActive();  
        activeBtn.classList.add('active');
        totalCustom = activeBtn.value;
    })
}

const removeActive = () => {
    for(let i = 0; i < btnPercent.length; i++){
        btnPercent[i].classList.remove('active');
        btnPercentVal = '';
    }
}

bill.addEventListener('input', () => {
    checkNumeric(bill);
    totalBills = bill.value;

});

custom.addEventListener('input', () =>{
    checkNumeric(custom);
    totalCustom = custom.value;
    removeActive();
})

const calculateTotal = () =>{
    totalPerPerson = ((parseFloat(totalBills) / parseFloat(totalPerson)).toFixed(2)) + parseFloat(amountPerson).toFixed(2);
    tipAmountPerPerson.innerText = '$' + amountPerson.toFixed(2);
    cantBeZero.removeChild(span);
}

const calculatePerPerson = () => {
    amountPerson = ((parseFloat(totalBills) * parseFloat(totalCustom) / 100).toFixed(2)) / parseFloat(totalPerson);
    document.querySelector('.tip__total').innerText = '$' + totalPerPerson;
}

person.addEventListener('input', () =>{
    checkNumeric(person);
    totalPerson = person.value;
    if(isNaN(totalPerson) || totalPerson == null){
        tipAmountPerPerson.innerText = '$ 0.00';
    }
    else if(totalPerson == 0 || totalPerson == null){
        cantBeZero.appendChild(span);
        tipAmountPerPerson.innerText = '$ 0.00';
        document.querySelector('.tip__total').innerText = '$ 0.00';
    }
    else{
        if(btnPercentVal){
            // amountPerson = ((parseFloat(totalBills) * parseFloat(btnPercentVal) / 100).toFixed(2)) / parseFloat(totalPerson);
            // tipAmountPerPerson.innerText = '$' + amountPerson.toFixed(2);
            calculatePerPerson();
            ca
            
        }else{
            
        }
        
        
           
    }
});


reset.addEventListener('click', () => {
    bill.value = '';
    custom.value = '';
    person.value = '';
    removeActive();
    tipAmountPerPerson.innerText = '$ 0.00';
    reset.classList.remove('active');
});



