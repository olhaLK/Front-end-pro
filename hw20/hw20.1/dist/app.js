"use strict";

var btnDownload = document.querySelector('.btn-dw');
var btnWarning = document.querySelector('.btn-wr');
function randomNum() {
  return Math.floor(Math.random() * 5000);
}
function downloadPhoto() {
  btnDownload.addEventListener('click', function (e) {
    var url = 'https://jsonplaceholder.typicode.com/photos';
    fetch(url).then(function (res) {
      return res.json();
    }).then(function (result) {
      var num = randomNum();
      var photo = result[num].title;
      console.log("Index: ".concat(num, ", Title: ").concat(photo));
      var modal = document.createElement('div');
      modal.innerHTML = "\n                    <div class=\"modal\" tabindex=\"-1\">\n                        <div class=\"modal-dialog\">\n                            <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <h5 class=\"modal-title\">Photo</h5>\n                                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n                            </div>\n                            <div class=\"modal-body\">\n                                <p>".concat(photo, "</p>\n                            </div>\n                            <div class=\"modal-footer\">\n                                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\n                                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n                ");
      document.body.appendChild(modal);
      var modalEl = new bootstrap.Modal(modal);
      modalEl.show();
    })["catch"](function (err) {
      return console.log('Error fetching photo:', err);
    });
  });
}
function warningAlert() {
  var countOpen = 0;
  var alertEl = 0;
  btnWarning.addEventListener('click', function () {
    countOpen++;
    if (countOpen % 2 === 1) {
      alertEl = document.createElement('div');
      alertEl.innerHTML = "\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n                    You don't have permission to access img via URL!\n                    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>\n                </div>\n            ";
      document.body.appendChild(alertEl);
    } else if (countOpen % 2 === 0) {
      if (alertEl) {
        alertEl.remove();
      }
    }
  });
}
downloadPhoto();
warningAlert();