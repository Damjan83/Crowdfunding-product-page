const accr = document.getElementsByClassName('accordion');
const backedAmount = document.getElementById('backed_amount');
const progressBar = document.getElementById('donation__progress-bar--filed');
const totalBacker = document.getElementById('total_backer');
const targetValueEle = document.getElementById('donation__target-amount');
const btnPledge = document.querySelectorAll('.btn-pledge');
const modalConfirm = document.querySelector('.modal--confirm');
const mdl = document.querySelector('.modal');
const btnModal = document.querySelectorAll('.btn-modal');
const btnClose = document.querySelector('.modal-header__close');
const burger = document.querySelector('.main-nav__burger');
const nav = document.querySelector('.main-nav__menu');
const btnBookmark = document.querySelector('.btn--bookmark');
const btnBookmarkText = document.querySelector('.btn--bookmark__text');
const btnBookmarkImg = document.querySelector('.btn--bookmark-img');
const btnBookmarkImgBooked = document.querySelector('.btn--bookmark-img--booked');
const btnSupport = document.querySelector('.btn--support');
const countDownDate = new Date("Jan 1, 2023 10:25:25").getTime();
const overlay = document.querySelector('.overlay');

let app = {
    targetValue: 100000,
    currentValue: 89914,
    numberOfDonation: 5007,
};


for (let i = 0; i < accr.length; i++) {
    accr[i].addEventListener("click", function() {
        if(this.parentNode.classList.contains('is-active') || this.parentNode.classList.contains('is-disabled')) return;

        closeAccordions();

        const panel = this.parentNode.nextElementSibling;

        this.parentNode.classList.add("is-active");

        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.classList.remove("is-active");
        } else {
            panel.classList.add("is-active");
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
  });
}

for (let i = 0; i < btnPledge.length; i++) {
    btnPledge[i].addEventListener("click", function() {
        const elementParent = this.parentNode;
        const inputElement = elementParent.querySelector('.accordion-panel__input');
        let inputElementValue;

        if(inputElement) {
            inputElementValue = inputElement.value;
            app.currentValue = app.currentValue + Number(inputElementValue);
        }

        backedAmount.innerHTML = '$' + formatNumber(app.currentValue);
        totalBacker.innerHTML = formatNumber(app.numberOfDonation += 1);
        progressBar.style.width = (app.currentValue / 100000 ) * 100 + "%";

        updateApp();

        modalConfirm.style.display = 'block'

        /*setTimeout(function() {
            modalConfirm.style.display = 'none'
        }, 3000);*/

    });
}

for(var i = 0; i < btnModal.length; i++){
    btnModal[i].addEventListener('click' , (e) =>{
        const currentElement = e.currentTarget;
        mdl.style.display = 'block';
        const currentData = currentElement.dataset.b;

        if(currentData){
            const currentModalEle = document.querySelector("." + currentData);
            const accEle = currentModalEle.querySelector('.accordion')
            const inputEle = accEle.querySelector('.texts')

            inputEle.click();
        }          
    });
}

burger.addEventListener('click' , () => {
    nav.classList.toggle('is-active');
    burger.classList.toggle('is-active');
    overlay.classList.toggle('is-active');
});

btnClose.addEventListener('click', () => {
    mdl.style.display = 'none';
    document.querySelectorAll('.modal-body__item').forEach(ele => {
        const accEle = ele.querySelector('.accordion')
        const inputEle = accEle.querySelector('.texts')

        if(inputEle) inputEle.checked = false;

        ele.querySelector('.accordion').classList.remove('is-active');
        ele.classList.remove('is-active');
        ele.nextElementSibling.classList.remove('is-active');
        ele.nextElementSibling.style.maxHeight = 0;
    });
});

btnBookmark.addEventListener('click' , () => {
    btnBookmark.classList.add('active');
    btnBookmarkImg.style.display = 'none';
    btnBookmarkImgBooked.style.display = 'block';
    btnBookmarkText.textContent ='Bookmarked';
});

btnSupport.addEventListener('click', () => {
    modalConfirm.style.display = 'none';
});

mdl.addEventListener('click', () => {
    mdl.style.display = 'none';
});

const x = setInterval( () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const daysElement = document.getElementById('days_left');
    daysElement.innerHTML = days;
    if(distance < 0) clearInterval(x);
}, 1000);

function closeAccordions() {
    for (let j = 0; j < accr.length; j++) {
        accr[j].classList.remove('is-active');
        accr[j].parentNode.classList.remove('is-active');
        accr[j].parentNode.nextElementSibling.classList.remove('is-active');
        accr[j].parentNode.nextElementSibling.style.maxHeight = null;
        accr[j].checked = false;                              
    }        
}

function formatNumber(num){
    return num.toLocaleString('en-US');
};

function updateApp() {
    backedAmount.innerHTML = '$' + formatNumber(app.currentValue);
    targetValueEle.innerHTML = 'of $' + formatNumber(app.targetValue);
    totalBacker.innerHTML = formatNumber(app.numberOfDonation);
    progressBar.style.width = (app.currentValue / app.targetValue ) * 100 + "%";
}

updateApp();


