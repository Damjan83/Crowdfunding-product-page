const backedAmount = document.getElementById('backed_amount');
const progressBar = document.getElementById('progress-bar');
const totalBacker = document.getElementById('total_backer');
const targetValueEle = document.getElementById('targetValue');

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

/*------Burger and mobile menu------*/
const burger = document.querySelector('.burger');
const nav = document.querySelector('.mob__menu');
burger.addEventListener('click' , () => {
    nav.classList.toggle('mob__menu--activ');
    burger.classList.toggle('toggle');
});
/*------Bookmark------*/
const book = document.querySelector('.btn--bookmark');
const booked = document.querySelector('.btn--bookmark')
book.addEventListener('click', () => {
    book.classList.toggle('bookmarked');
    booked.classList.toggle('bookmarked--img');
});
/*------Open close btn------*/
const mdl = document.querySelector('.modal-section');
const btnn = document.querySelectorAll('.btn--cyan');
const btnModal = document.querySelectorAll('.btn-modal');
const btnClose = document.querySelector('.btn--close');
const productAmount = document.querySelector('.product-amount-1');
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


//const btnPledge = document.querySelector('.daki');
//btnPledge.addEventListener('click', () =>{  
//    var inputFild = document.getElementById('option').value; 
//    if(inputFild){
//        app.currentValue = app.currentValue + Number(inputFild);
//        backedAmount.innerHTML = '$' + formatNumber(app.currentValue);
//        totalBacker.innerHTML = app.numberOfDonation + 1;
//    }
//    progressBar.style.width = (app.currentValue / 100000 ) * 100 + "%";
//});

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
                }
            });
        }
        
        if(currentInput) {
            app.currentValue = app.currentValue + Number(currentInput);
            backedAmount.innerHTML = '$' + formatNumber(app.currentValue);
            totalBacker.innerHTML = formatNumber(app.numberOfDonation + 1);               
        }
        progressBar.style.width = (app.currentValue / 100000 ) * 100 + "%";
    });
}


function formatNumber(num){
    return num.toLocaleString('en-US');
};
/*
VAZNO!!!! Svi nacini selektovanja elementa na html stranici sta primaju kao argument i sata vracaju kao tip podataka

totalBacker izbaciti iz objekta i dodati ga standardno kao i ostale elemente.textContent i innerHtml 
3. Da se namesti da se uvecava broj donacija kao i dostupnost doniranja tj da se umanju broj donacija.
4. treba da se izracuna minimalna vrednost donacija.
5. refaktorisanje koda.
*/


