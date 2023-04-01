// on keypress validate input should be not 0 or text add warning

let bill = document.querySelector(".billed");
let custom = document.querySelector('#percent-opt');
let person = document.querySelector('#numberPeolpe');
let reset = document.querySelector('.reset');
let tipAmountPerPerson = document.querySelector('.tip__amount');
let cantBeZero = document.querySelector('.err-message');
let totalBills, totalCustom, totalPerson, amountPerson, totalPerPerson ;
let btnPercent = document.querySelectorAll('.btn-percent');
let allInput = document.querySelectorAll('input[type="number"]');
let btnPercentVal;

// span.appendChild(spanText);

const checkNumeric = (data) => {
    if(Math.sign(data.value) <= -1 || data.value == 0){
        data.style  = "outline: 2px solid #b9826d";
        data.value ='';
        reset.classList.remove('active');
    }else{
        data.style  = "outline: 2px solid hsl(172, 67%, 45%)";
        reset.classList.add('active');
    }
}

// set active to button percentage and get value asddd
for(let i = 0; i < btnPercent.length; i++){
    let activeBtn = btnPercent[i];
    activeBtn.addEventListener('click', () => {
        removeActive();  
        activeBtn.classList.add('active');
        totalCustom = activeBtn.value;
        reset.classList.add('active');
        calculateTotal();
    })
}

// remove class active
const removeActive = () => {
    for(let i = 0; i < btnPercent.length; i++){
        btnPercent[i].classList.remove('active');
        btnPercentVal = '';
    }
}

// calculate tip
const calculateTotal = () =>{
    if(totalPerson <= 0 || totalPerson == null){
        tipAmountPerPerson.innerText = '$ 0.00';
        document.querySelector('.tip__total').innerText = '$ 0.00';
    }else{
        amountPerson = ((parseFloat(totalBills) * parseFloat(totalCustom) / 100)) / parseFloat(totalPerson);
        totalPerPerson = (parseFloat(totalBills) / parseFloat(totalPerson)) + parseFloat(amountPerson);
        tipAmountPerPerson.innerText = '$' + parseFloat(amountPerson).toFixed(2);
        document.querySelector('.tip__total').innerText = '$' + parseFloat(totalPerPerson).toFixed(2);
    }
}

// remove values and outline on each input
const removeOutline = () => {
    for(let a = 0; a < allInput.length; a++){
        allInput[a].value = '';
        allInput[a].style = "outline: none";
    }

    totalBills = '';
    totalCustom = '';
    totalPerson = '';

}

bill.addEventListener('input', () => {
    checkNumeric(bill);
    totalBills = bill.value;
    calculateTotal();
});

custom.addEventListener('input', () =>{
    checkNumeric(custom);
    totalCustom = custom.value;
    calculateTotal();
    removeActive();
})

person.addEventListener('input', () =>{
    checkNumeric(person);
    totalPerson = person.value;
    if(totalPerson <= 0 || totalPerson == null){
        cantBeZero.classList.add('active');
        tipAmountPerPerson.innerText = '$ 0.00';
        document.querySelector('.tip__total').innerText = '$ 0.00';
    }
    else{
        calculateTotal();
        cantBeZero.classList.remove('active');
    }
});

reset.addEventListener('click', () => {
    removeOutline();
    removeActive();
    tipAmountPerPerson.innerText = '$ 0.00';
    document.querySelector('.tip__total').innerText = '$ 0.00';
    reset.classList.remove('active');
    cantBeZero.classList.remove('active');
});



