# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Moderate cyan: hsl(176, 50%, 47%)
- Dark cyan: hsl(176, 72%, 28%)

### Neutral

- Black: hsl(0, 0%, 0%)
- Dark gray: hsl(0, 0%, 48%)

## Typography

### Body Copy

- Font size: 16px

### Font

- Family: [Commissioner](https://fonts.google.com/specimen/Commissioner)
- Weights: 400, 500, 700

ime Donation
donation__current-amount
donation__target-amount
donation__backer
donation__days

donation__progress-bar
donation__progress-bar--filed (ili dodati novu klasu is filed)






const backedAmount = document.getElementById('backed_amount');
const progressBar = document.getElementById('donation__progress-bar--filed');
const totalBacker = document.getElementById('total_backer');
const targetValueEle = document.getElementById('donation__target-amount');

const bamboAmountEle = document.querySelectorAll('.product-amount-1');
const blackAmountEle = document.querySelectorAll('.product-amount-2');

let app = {
    targetValue: 100000,
    currentValue: 89914,
    numberOfDonation: 5007,
};

backedAmount.innerHTML = '$' + formatNumber(app.currentValue);
targetValueEle.innerHTML = 'of $' + formatNumber(app.targetValue);
totalBacker.innerHTML = formatNumber(app.numberOfDonation);
progressBar.style.width = (app.currentValue / app.targetValue ) * 100 + "%";

/*------Countdown days------*/
const countDownDate = new Date("Jan 1, 2022 10:25:25").getTime();
const x = setInterval( () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const daysElement = document.getElementById('days_left');
    daysElement.innerHTML = days;
    if(distance < 0) clearInterval(x);
}, 1000);

/*------Burger and mobile menu------*/
const burger = document.querySelector('.main-nav__burger');
const nav = document.querySelector('.main-nav__menu');
burger.addEventListener('click' , () => {
    nav.classList.toggle('is-active');
    burger.classList.toggle('is-active');
});
/*------Bookmark------*/
const book = document.querySelector('.btn--bookmark');
const booked = document.querySelector('.btn--bookmark')
book.addEventListener('click', () => {
    book.classList.toggle('bookmarked');
    booked.classList.toggle('bookmarked--img');
});
/*------Open close btn------*/
const mdl = document.querySelector('.modal');
const btnn = document.querySelectorAll('.btn--cyan');
const btnModal = document.querySelectorAll('.btn-modal');
const btnClose = document.querySelector('.btn--close');
//const productAmount = document.querySelector('.product-amount-1');
for(var i = 0; i < btnn.length; i++){
    btnn[i].addEventListener('click' , (e) =>{
        var currentElement = e.currentTarget;
        mdl.style.display = 'block';
        var currentData = currentElement.dataset.b;      
        if(currentData){
            const currentModalEle = document.querySelector("." + currentData);
            const currentPanel = currentModalEle.nextElementSibling;      
            currentModalEle.classList.add('active');
            currentModalEle.querySelector('.accordion').classList.add('active');
            currentPanel.classList.add('active');          
            currentPanel.style.maxHeight = currentPanel.scrollHeight + 'px';
        }          
    });
}
btnClose.addEventListener('click', () => {
    mdl.style.display = 'none';
    document.querySelectorAll('.card').forEach(ele => {
        ele.querySelector('.accordion').classList.remove('active');
        ele.classList.remove('active');
        ele.nextElementSibling.classList.remove('active');
        ele.nextElementSibling.style.maxHeight = 0; 
    });
});
/*------Button Pledge------*/
const btnPle = document.querySelectorAll('.btn--pledge');
const support = document.querySelector('.modal-section-secondary');
for(var i = 0; i < btnPle.length; i++){
    btnPle[i].addEventListener('click' , () =>{
        support.style.display = 'block';
    });
};
/*------Accordion panel------*/
var acc = document.getElementsByClassName('accordion');
var card = document.querySelectorAll('.card');
var caPa = document.querySelectorAll('.card-panel');
var i;
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function(e) {
        var currentAccordion = this;
        for (j = 0; j < acc.length; j++) {
            acc[j].classList.remove('active');
            acc[j].parentNode.classList.remove('active');
            acc[j].parentNode.nextElementSibling.classList.remove('active');
            acc[j].parentNode.nextElementSibling.style.maxHeight = null;
            acc[j].checked = false;                              
        }        
        currentAccordion.classList.add('active');
        currentAccordion.parentNode.classList.add('active');
        currentAccordion.checked = true;
        if(currentAccordion.parentNode.nextElementSibling.classList.contains('panel')) {
            currentAccordion.parentNode.nextElementSibling.classList.add('active');
            currentAccordion.parentNode.nextElementSibling.style.maxHeight = currentAccordion.parentNode.nextElementSibling.scrollHeight + "px";
        }
    });
};
const btnSupport = document.querySelector('.btn--support');
const modalSelMain = document.querySelector('.modal-section-main');
const modalSelSec = document.querySelector('.modal-section-secondary');
btnSupport.addEventListener('click' , () =>{
    modalSelMain.style.display = 'none';
    modalSelSec.style.display = 'none';
    document.querySelectorAll('.card').forEach(ele => {
        ele.querySelector('.accordion').classList.remove('active');
        ele.classList.remove('active');
        ele.nextElementSibling.classList.remove('active');
        ele.nextElementSibling.style.maxHeight = 0; 
    });
});
const btnP = document.querySelectorAll('.daki');
const supportModal = document.querySelector('.support');
for(let i = 0; i < btnP.length ; i++){
    btnP[i].addEventListener('click' , (e)=>{
        let currentBtn = e.currentTarget;
        let currentBtnParent = currentBtn.parentNode;
        let currentInput = currentBtnParent.querySelector('.input-class').value;
        const currentBtnDataSet = currentBtn.dataset.p;
        if(currentBtnDataSet == 'bamboo-pledge') {
            bamboAmountEle.forEach(ele => {
                ele.innerHTML = ele.innerHTML - 1;
                if(ele.innerHTML <= 0 ){
                    ele.innerHTML = 0;
                    btnP[i].classList.add('active');
                    btnP[i].innerHTML = 'Out of stock';
                    supportModal.style.display = 'none';
                    modalSelSec.style.display = 'none';
                }
            });
        }else if(currentBtnDataSet == 'black-pledge') {
            blackAmountEle.forEach(ele => {
                ele.innerHTML = ele.innerHTML - 1;
                if(ele.innerHTML <= 0){
                    ele.innerHTML = 0;
                    btnP[i].classList.add('active');
                    btnP[i].innerHTML = 'Out of stock';
                    supportModal.style.display = 'none';
                    modalSelSec.style.display = 'none';
                }
            });
        }       
        if(currentInput) {
            app.currentValue = app.currentValue + Number(currentInput);
            backedAmount.innerHTML = '$' + formatNumber(app.currentValue);
            totalBacker.innerHTML = formatNumber(app.numberOfDonation += 1);               
        }
        progressBar.style.width = (app.currentValue / 100000 ) * 100 + "%";
    });
}


function formatNumber(num){
    return num.toLocaleString('en-US');
};

