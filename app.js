const accr = document.getElementsByClassName('accordion');
console.log(accr)

for (let i = 0; i < accr.length; i++) {
    accr[i].addEventListener("click", function() {   
        var panel = this.parentNode.nextElementSibling;
        if(this.parentNode.classList.contains('is-active')) return;
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





const mdl = document.querySelector('.modal');
const btnn = document.querySelectorAll('.btn--cyan');
const btnModal = document.querySelectorAll('.btn-modal');
const btnClose = document.querySelector('.modal-header__close');
//const productAmount = document.querySelector('.product-amount-1');
for(var i = 0; i < btnn.length; i++){
    btnn[i].addEventListener('click' , (e) =>{
        mdl.style.display = 'block';
    });
}
btnClose.addEventListener('click', () => {
    mdl.style.display = 'none';
});

/*------Bookmarked------*/
const btnBookmark = document.querySelector('.btn--bookmark');
const btnBookmarkText = document.querySelector('.btn--bookmark__text');
const btnBookmarkImg = document.querySelector('.btn--bookmark-img');
const btnBookmarkImgBooked = document.querySelector('.btn--bookmark-img--booked');
btnBookmark.addEventListener('click' , () => {
  btnBookmark.classList.add('active');
  btnBookmarkImg.style.display = 'none';
  btnBookmarkImgBooked.style.display = 'block';
  btnBookmarkText.textContent ='Bookmarked';
});
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