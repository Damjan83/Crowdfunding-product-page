(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var accr = document.getElementsByClassName('accordion');
var backedAmount = document.getElementById('backed_amount');
var progressBar = document.getElementById('donation__progress-bar--filed');
var totalBacker = document.getElementById('total_backer');
var targetValueEle = document.getElementById('donation__target-amount');
var btnPledge = document.querySelectorAll('.btn-pledge');
var modalConfirm = document.querySelector('.modal--confirm');
var mdl = document.querySelector('.modal');
var btnModal = document.querySelectorAll('.btn-modal');
var btnClose = document.querySelector('.modal-header__close');
var burger = document.querySelector('.main-nav__burger');
var nav = document.querySelector('.main-nav__menu');
var btnBookmark = document.querySelector('.btn--bookmark');
var btnBookmarkText = document.querySelector('.btn--bookmark__text');
var btnBookmarkImg = document.querySelector('.btn--bookmark-img');
var btnBookmarkImgBooked = document.querySelector('.btn--bookmark-img--booked');
var countDownDate = new Date("Jan 1, 2023 10:25:25").getTime();
var overlay = document.querySelector('.overlay');
var app = {
  targetValue: 100000,
  currentValue: 89914,
  numberOfDonation: 5007
};

for (var _i = 0; _i < accr.length; _i++) {
  accr[_i].addEventListener("click", function () {
    if (this.parentNode.classList.contains('is-active') || this.parentNode.classList.contains('is-disabled')) return;
    closeAccordions();
    var panel = this.parentNode.nextElementSibling;
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

for (var _i2 = 0; _i2 < btnPledge.length; _i2++) {
  btnPledge[_i2].addEventListener("click", function () {
    var elementParent = this.parentNode;
    var inputElement = elementParent.querySelector('.accordion-panel__input');
    var inputElementValue;

    if (inputElement) {
      inputElementValue = inputElement.value;
      app.currentValue = app.currentValue + Number(inputElementValue);
    }

    backedAmount.innerHTML = '$' + formatNumber(app.currentValue);
    totalBacker.innerHTML = formatNumber(app.numberOfDonation += 1);
    progressBar.style.width = app.currentValue / 100000 * 100 + "%";
    updateApp();
    modalConfirm.style.display = 'block';
    setTimeout(function () {
      modalConfirm.style.display = 'none';
    }, 30000);
  });
}

for (var i = 0; i < btnModal.length; i++) {
  btnModal[i].addEventListener('click', function (e) {
    var currentElement = e.currentTarget;
    mdl.style.display = 'block';
    var currentData = currentElement.dataset.b;

    if (currentData) {
      var currentModalEle = document.querySelector("." + currentData);
      var accEle = currentModalEle.querySelector('.accordion');
      var inputEle = accEle.querySelector('.texts');
      inputEle.click();
    }
  });
}

burger.addEventListener('click', function () {
  nav.classList.toggle('is-active');
  burger.classList.toggle('is-active');
  overlay.classList.toggle('is-active');
});
btnClose.addEventListener('click', function () {
  mdl.style.display = 'none';
  document.querySelectorAll('.modal-body__item').forEach(function (ele) {
    var accEle = ele.querySelector('.accordion');
    var inputEle = accEle.querySelector('.texts');
    if (inputEle) inputEle.checked = false;
    ele.querySelector('.accordion').classList.remove('is-active');
    ele.classList.remove('is-active');
    ele.nextElementSibling.classList.remove('is-active');
    ele.nextElementSibling.style.maxHeight = 0;
  });
});
btnBookmark.addEventListener('click', function () {
  btnBookmark.classList.add('active');
  btnBookmarkImg.style.display = 'none';
  btnBookmarkImgBooked.style.display = 'block';
  btnBookmarkText.textContent = 'Bookmarked';
});
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var daysElement = document.getElementById('days_left');
  daysElement.innerHTML = days;
  if (distance < 0) clearInterval(x);
}, 1000);

function closeAccordions() {
  for (var j = 0; j < accr.length; j++) {
    accr[j].classList.remove('is-active');
    accr[j].parentNode.classList.remove('is-active');
    accr[j].parentNode.nextElementSibling.classList.remove('is-active');
    accr[j].parentNode.nextElementSibling.style.maxHeight = null;
    accr[j].checked = false;
  }
}

function formatNumber(num) {
  return num.toLocaleString('en-US');
}

;

function updateApp() {
  backedAmount.innerHTML = '$' + formatNumber(app.currentValue);
  targetValueEle.innerHTML = 'of $' + formatNumber(app.targetValue);
  totalBacker.innerHTML = formatNumber(app.numberOfDonation);
  progressBar.style.width = app.currentValue / app.targetValue * 100 + "%";
}

updateApp();

},{}]},{},[1]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGFjY3IgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NvcmRpb24nKTtcbnZhciBiYWNrZWRBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2VkX2Ftb3VudCcpO1xudmFyIHByb2dyZXNzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvbmF0aW9uX19wcm9ncmVzcy1iYXItLWZpbGVkJyk7XG52YXIgdG90YWxCYWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxfYmFja2VyJyk7XG52YXIgdGFyZ2V0VmFsdWVFbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9uYXRpb25fX3RhcmdldC1hbW91bnQnKTtcbnZhciBidG5QbGVkZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLXBsZWRnZScpO1xudmFyIG1vZGFsQ29uZmlybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC0tY29uZmlybScpO1xudmFyIG1kbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xudmFyIGJ0bk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1tb2RhbCcpO1xudmFyIGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWhlYWRlcl9fY2xvc2UnKTtcbnZhciBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXZfX2J1cmdlcicpO1xudmFyIG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdl9fbWVudScpO1xudmFyIGJ0bkJvb2ttYXJrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tYm9va21hcmsnKTtcbnZhciBidG5Cb29rbWFya1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1ib29rbWFya19fdGV4dCcpO1xudmFyIGJ0bkJvb2ttYXJrSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tYm9va21hcmstaW1nJyk7XG52YXIgYnRuQm9va21hcmtJbWdCb29rZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1ib29rbWFyay1pbWctLWJvb2tlZCcpO1xudmFyIGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShcIkphbiAxLCAyMDIzIDEwOjI1OjI1XCIpLmdldFRpbWUoKTtcbnZhciBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbnZhciBhcHAgPSB7XG4gIHRhcmdldFZhbHVlOiAxMDAwMDAsXG4gIGN1cnJlbnRWYWx1ZTogODk5MTQsXG4gIG51bWJlck9mRG9uYXRpb246IDUwMDdcbn07XG5cbmZvciAodmFyIF9pID0gMDsgX2kgPCBhY2NyLmxlbmd0aDsgX2krKykge1xuICBhY2NyW19pXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSB8fCB0aGlzLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1kaXNhYmxlZCcpKSByZXR1cm47XG4gICAgY2xvc2VBY2NvcmRpb25zKCk7XG4gICAgdmFyIHBhbmVsID0gdGhpcy5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZztcbiAgICB0aGlzLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcblxuICAgIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgIH1cbiAgfSk7XG59XG5cbmZvciAodmFyIF9pMiA9IDA7IF9pMiA8IGJ0blBsZWRnZS5sZW5ndGg7IF9pMisrKSB7XG4gIGJ0blBsZWRnZVtfaTJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsZW1lbnRQYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgdmFyIGlucHV0RWxlbWVudCA9IGVsZW1lbnRQYXJlbnQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1wYW5lbF9faW5wdXQnKTtcbiAgICB2YXIgaW5wdXRFbGVtZW50VmFsdWU7XG5cbiAgICBpZiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICBpbnB1dEVsZW1lbnRWYWx1ZSA9IGlucHV0RWxlbWVudC52YWx1ZTtcbiAgICAgIGFwcC5jdXJyZW50VmFsdWUgPSBhcHAuY3VycmVudFZhbHVlICsgTnVtYmVyKGlucHV0RWxlbWVudFZhbHVlKTtcbiAgICB9XG5cbiAgICBiYWNrZWRBbW91bnQuaW5uZXJIVE1MID0gJyQnICsgZm9ybWF0TnVtYmVyKGFwcC5jdXJyZW50VmFsdWUpO1xuICAgIHRvdGFsQmFja2VyLmlubmVySFRNTCA9IGZvcm1hdE51bWJlcihhcHAubnVtYmVyT2ZEb25hdGlvbiArPSAxKTtcbiAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGFwcC5jdXJyZW50VmFsdWUgLyAxMDAwMDAgKiAxMDAgKyBcIiVcIjtcbiAgICB1cGRhdGVBcHAoKTtcbiAgICBtb2RhbENvbmZpcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBtb2RhbENvbmZpcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9LCAzMDAwMCk7XG4gIH0pO1xufVxuXG5mb3IgKHZhciBpID0gMDsgaSA8IGJ0bk1vZGFsLmxlbmd0aDsgaSsrKSB7XG4gIGJ0bk1vZGFsW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgY3VycmVudEVsZW1lbnQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgbWRsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHZhciBjdXJyZW50RGF0YSA9IGN1cnJlbnRFbGVtZW50LmRhdGFzZXQuYjtcblxuICAgIGlmIChjdXJyZW50RGF0YSkge1xuICAgICAgdmFyIGN1cnJlbnRNb2RhbEVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBjdXJyZW50RGF0YSk7XG4gICAgICB2YXIgYWNjRWxlID0gY3VycmVudE1vZGFsRWxlLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24nKTtcbiAgICAgIHZhciBpbnB1dEVsZSA9IGFjY0VsZS5xdWVyeVNlbGVjdG9yKCcudGV4dHMnKTtcbiAgICAgIGlucHV0RWxlLmNsaWNrKCk7XG4gICAgfVxuICB9KTtcbn1cblxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbn0pO1xuYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIG1kbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtYm9keV9faXRlbScpLmZvckVhY2goZnVuY3Rpb24gKGVsZSkge1xuICAgIHZhciBhY2NFbGUgPSBlbGUucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbicpO1xuICAgIHZhciBpbnB1dEVsZSA9IGFjY0VsZS5xdWVyeVNlbGVjdG9yKCcudGV4dHMnKTtcbiAgICBpZiAoaW5wdXRFbGUpIGlucHV0RWxlLmNoZWNrZWQgPSBmYWxzZTtcbiAgICBlbGUucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICBlbGUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIGVsZS5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUubWF4SGVpZ2h0ID0gMDtcbiAgfSk7XG59KTtcbmJ0bkJvb2ttYXJrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBidG5Cb29rbWFyay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgYnRuQm9va21hcmtJbWcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgYnRuQm9va21hcmtJbWdCb29rZWQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGJ0bkJvb2ttYXJrVGV4dC50ZXh0Q29udGVudCA9ICdCb29rbWFya2VkJztcbn0pO1xudmFyIHggPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgdmFyIGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcbiAgdmFyIGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgdmFyIGRheXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheXNfbGVmdCcpO1xuICBkYXlzRWxlbWVudC5pbm5lckhUTUwgPSBkYXlzO1xuICBpZiAoZGlzdGFuY2UgPCAwKSBjbGVhckludGVydmFsKHgpO1xufSwgMTAwMCk7XG5cbmZ1bmN0aW9uIGNsb3NlQWNjb3JkaW9ucygpIHtcbiAgZm9yICh2YXIgaiA9IDA7IGogPCBhY2NyLmxlbmd0aDsgaisrKSB7XG4gICAgYWNjcltqXS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICBhY2NyW2pdLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgYWNjcltqXS5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICBhY2NyW2pdLnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgYWNjcltqXS5jaGVja2VkID0gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bSkge1xuICByZXR1cm4gbnVtLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpO1xufVxuXG47XG5cbmZ1bmN0aW9uIHVwZGF0ZUFwcCgpIHtcbiAgYmFja2VkQW1vdW50LmlubmVySFRNTCA9ICckJyArIGZvcm1hdE51bWJlcihhcHAuY3VycmVudFZhbHVlKTtcbiAgdGFyZ2V0VmFsdWVFbGUuaW5uZXJIVE1MID0gJ29mICQnICsgZm9ybWF0TnVtYmVyKGFwcC50YXJnZXRWYWx1ZSk7XG4gIHRvdGFsQmFja2VyLmlubmVySFRNTCA9IGZvcm1hdE51bWJlcihhcHAubnVtYmVyT2ZEb25hdGlvbik7XG4gIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYXBwLmN1cnJlbnRWYWx1ZSAvIGFwcC50YXJnZXRWYWx1ZSAqIDEwMCArIFwiJVwiO1xufVxuXG51cGRhdGVBcHAoKTtcblxufSx7fV19LHt9LFsxXSk7XG4iXSwiZmlsZSI6ImFwcC5qcyJ9
