"use strict";

function myBDay() {
  var container = document.createElement('div');
  container.innerHTML = "\n     <div class=\"d-flex justify-content-center align-items-center my-2\">\n        <div class=\"rounded p-4 text-center bg-light shadow\">\n        <h2 class=\"text-primary mb-3\">MY B-DAY</h2>\n        <div class=\"dateContainer fw-bold fs-4 text-dark\"></div>\n        </div>\n    </div>\n    ";
  document.body.appendChild(container);
  var dateContainer = document.querySelector('.dateContainer');
  var bDayDate = '19.10.2005';
  var formattedDate = moment(bDayDate, 'DD.MM.YYYY').format('MMM Do YY');
  dateContainer.textContent = formattedDate;
}
function userBDay() {
  var regEx = /^([0-3][0-9])\/([0-1][0-9])\/([1-2][0-9]{3})$/;
  var userDate = prompt("Enter your b-day date in format  DD/MM/YYYY.");
  var container = document.createElement('div');
  container.innerHTML = "\n     <div class=\"d-flex justify-content-center align-items-center my-2\">\n        <div class=\"rounded p-4 text-center bg-light shadow\">\n        <h2 class=\"text-primary mb-3\">YOUR B-DAY</h2>\n        <div class=\"userDateContainer fw-bold fs-4 text-dark\"></div>\n        </div>\n    </div>\n    ";
  document.body.appendChild(container);
  var dateContainer = document.querySelector('.userDateContainer');
  if (!regEx.test(userDate)) {
    alertEl = document.createElement('div');
    alertEl.innerHTML = "\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n                <strong>Holy guacamole!</strong> Invalid date format! Please use DD/MM/YYYY.\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                </div>\n            ";
    document.body.appendChild(alertEl);
    var closeBtn = alertEl.querySelector('.close');
    closeBtn === null || closeBtn === void 0 || closeBtn.addEventListener('click', function () {
      alertEl.remove();
      container.innerHTML = '';
      userBDay();
    });
  } else {
    var formattedDate = moment(userDate, 'DD/MM/YYYY').format('MMMM Do YYYY');
    dateContainer.textContent = formattedDate;
  }
}
myBDay();
setTimeout(function () {
  userBDay();
}, 1000);