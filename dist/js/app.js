(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _test = _interopRequireDefault(require("./components/test"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log((0, _test["default"])());
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
    }, 3000);
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

},{"./components/test":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function test() {
  var user = 'tss';
  console.log(user);
}

var tst = function tst() {
  var name = 'Daki';
  return name;
};

var _default = tst;
exports["default"] = _default;

},{}]},{},[1]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF90ZXN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL3Rlc3RcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuY29uc29sZS5sb2coKDAsIF90ZXN0W1wiZGVmYXVsdFwiXSkoKSk7XG52YXIgYWNjciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjY29yZGlvbicpO1xudmFyIGJhY2tlZEFtb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZWRfYW1vdW50Jyk7XG52YXIgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9uYXRpb25fX3Byb2dyZXNzLWJhci0tZmlsZWQnKTtcbnZhciB0b3RhbEJhY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbF9iYWNrZXInKTtcbnZhciB0YXJnZXRWYWx1ZUVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb25hdGlvbl9fdGFyZ2V0LWFtb3VudCcpO1xudmFyIGJ0blBsZWRnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcGxlZGdlJyk7XG52YXIgbW9kYWxDb25maXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLS1jb25maXJtJyk7XG52YXIgbWRsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG52YXIgYnRuTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLW1vZGFsJyk7XG52YXIgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtaGVhZGVyX19jbG9zZScpO1xudmFyIGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdl9fYnVyZ2VyJyk7XG52YXIgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2X19tZW51Jyk7XG52YXIgYnRuQm9va21hcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1ib29rbWFyaycpO1xudmFyIGJ0bkJvb2ttYXJrVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWJvb2ttYXJrX190ZXh0Jyk7XG52YXIgYnRuQm9va21hcmtJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1ib29rbWFyay1pbWcnKTtcbnZhciBidG5Cb29rbWFya0ltZ0Jvb2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWJvb2ttYXJrLWltZy0tYm9va2VkJyk7XG52YXIgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKFwiSmFuIDEsIDIwMjMgMTA6MjU6MjVcIikuZ2V0VGltZSgpO1xudmFyIG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xudmFyIGFwcCA9IHtcbiAgdGFyZ2V0VmFsdWU6IDEwMDAwMCxcbiAgY3VycmVudFZhbHVlOiA4OTkxNCxcbiAgbnVtYmVyT2ZEb25hdGlvbjogNTAwN1xufTtcblxuZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFjY3IubGVuZ3RoOyBfaSsrKSB7XG4gIGFjY3JbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpIHx8IHRoaXMucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWRpc2FibGVkJykpIHJldHVybjtcbiAgICBjbG9zZUFjY29yZGlvbnMoKTtcbiAgICB2YXIgcGFuZWwgPSB0aGlzLnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIHRoaXMucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xuXG4gICAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoXCJpcy1hY3RpdmVcIik7XG4gICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgfVxuICB9KTtcbn1cblxuZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgYnRuUGxlZGdlLmxlbmd0aDsgX2kyKyspIHtcbiAgYnRuUGxlZGdlW19pMl0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxlbWVudFBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICB2YXIgaW5wdXRFbGVtZW50ID0gZWxlbWVudFBhcmVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLXBhbmVsX19pbnB1dCcpO1xuICAgIHZhciBpbnB1dEVsZW1lbnRWYWx1ZTtcblxuICAgIGlmIChpbnB1dEVsZW1lbnQpIHtcbiAgICAgIGlucHV0RWxlbWVudFZhbHVlID0gaW5wdXRFbGVtZW50LnZhbHVlO1xuICAgICAgYXBwLmN1cnJlbnRWYWx1ZSA9IGFwcC5jdXJyZW50VmFsdWUgKyBOdW1iZXIoaW5wdXRFbGVtZW50VmFsdWUpO1xuICAgIH1cblxuICAgIGJhY2tlZEFtb3VudC5pbm5lckhUTUwgPSAnJCcgKyBmb3JtYXROdW1iZXIoYXBwLmN1cnJlbnRWYWx1ZSk7XG4gICAgdG90YWxCYWNrZXIuaW5uZXJIVE1MID0gZm9ybWF0TnVtYmVyKGFwcC5udW1iZXJPZkRvbmF0aW9uICs9IDEpO1xuICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYXBwLmN1cnJlbnRWYWx1ZSAvIDEwMDAwMCAqIDEwMCArIFwiJVwiO1xuICAgIHVwZGF0ZUFwcCgpO1xuICAgIG1vZGFsQ29uZmlybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vZGFsQ29uZmlybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0sIDMwMDApO1xuICB9KTtcbn1cblxuZm9yICh2YXIgaSA9IDA7IGkgPCBidG5Nb2RhbC5sZW5ndGg7IGkrKykge1xuICBidG5Nb2RhbFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGN1cnJlbnRFbGVtZW50ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIG1kbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB2YXIgY3VycmVudERhdGEgPSBjdXJyZW50RWxlbWVudC5kYXRhc2V0LmI7XG5cbiAgICBpZiAoY3VycmVudERhdGEpIHtcbiAgICAgIHZhciBjdXJyZW50TW9kYWxFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY3VycmVudERhdGEpO1xuICAgICAgdmFyIGFjY0VsZSA9IGN1cnJlbnRNb2RhbEVsZS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uJyk7XG4gICAgICB2YXIgaW5wdXRFbGUgPSBhY2NFbGUucXVlcnlTZWxlY3RvcignLnRleHRzJyk7XG4gICAgICBpbnB1dEVsZS5jbGljaygpO1xuICAgIH1cbiAgfSk7XG59XG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG59KTtcbmJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBtZGwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWJvZHlfX2l0ZW0nKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGUpIHtcbiAgICB2YXIgYWNjRWxlID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24nKTtcbiAgICB2YXIgaW5wdXRFbGUgPSBhY2NFbGUucXVlcnlTZWxlY3RvcignLnRleHRzJyk7XG4gICAgaWYgKGlucHV0RWxlKSBpbnB1dEVsZS5jaGVja2VkID0gZmFsc2U7XG4gICAgZWxlLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24nKS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgZWxlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICBlbGUubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm1heEhlaWdodCA9IDA7XG4gIH0pO1xufSk7XG5idG5Cb29rbWFyay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgYnRuQm9va21hcmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIGJ0bkJvb2ttYXJrSW1nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGJ0bkJvb2ttYXJrSW1nQm9va2VkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBidG5Cb29rbWFya1RleHQudGV4dENvbnRlbnQgPSAnQm9va21hcmtlZCc7XG59KTtcbnZhciB4ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIHZhciBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XG4gIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gIHZhciBkYXlzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlzX2xlZnQnKTtcbiAgZGF5c0VsZW1lbnQuaW5uZXJIVE1MID0gZGF5cztcbiAgaWYgKGRpc3RhbmNlIDwgMCkgY2xlYXJJbnRlcnZhbCh4KTtcbn0sIDEwMDApO1xuXG5mdW5jdGlvbiBjbG9zZUFjY29yZGlvbnMoKSB7XG4gIGZvciAodmFyIGogPSAwOyBqIDwgYWNjci5sZW5ndGg7IGorKykge1xuICAgIGFjY3Jbal0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgYWNjcltqXS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIGFjY3Jbal0ucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgYWNjcltqXS5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgIGFjY3Jbal0uY2hlY2tlZCA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW0pIHtcbiAgcmV0dXJuIG51bS50b0xvY2FsZVN0cmluZygnZW4tVVMnKTtcbn1cblxuO1xuXG5mdW5jdGlvbiB1cGRhdGVBcHAoKSB7XG4gIGJhY2tlZEFtb3VudC5pbm5lckhUTUwgPSAnJCcgKyBmb3JtYXROdW1iZXIoYXBwLmN1cnJlbnRWYWx1ZSk7XG4gIHRhcmdldFZhbHVlRWxlLmlubmVySFRNTCA9ICdvZiAkJyArIGZvcm1hdE51bWJlcihhcHAudGFyZ2V0VmFsdWUpO1xuICB0b3RhbEJhY2tlci5pbm5lckhUTUwgPSBmb3JtYXROdW1iZXIoYXBwLm51bWJlck9mRG9uYXRpb24pO1xuICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGFwcC5jdXJyZW50VmFsdWUgLyBhcHAudGFyZ2V0VmFsdWUgKiAxMDAgKyBcIiVcIjtcbn1cblxudXBkYXRlQXBwKCk7XG5cbn0se1wiLi9jb21wb25lbnRzL3Rlc3RcIjoyfV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG5mdW5jdGlvbiB0ZXN0KCkge1xuICB2YXIgdXNlciA9ICd0c3MnO1xuICBjb25zb2xlLmxvZyh1c2VyKTtcbn1cblxudmFyIHRzdCA9IGZ1bmN0aW9uIHRzdCgpIHtcbiAgdmFyIG5hbWUgPSAnRGFraSc7XG4gIHJldHVybiBuYW1lO1xufTtcblxudmFyIF9kZWZhdWx0ID0gdHN0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxufSx7fV19LHt9LFsxXSk7XG4iXSwiZmlsZSI6ImFwcC5qcyJ9
