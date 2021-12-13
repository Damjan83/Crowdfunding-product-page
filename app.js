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

