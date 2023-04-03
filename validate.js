var showMessage = function (id, message) {
  document.getElementById(id).innerHTML = message;
};

function validateAccount(account) {
  // Kiểm tra xem account có tồn tại hay không
  if (account === undefined || account === null || account === "") {
    return false;
  }

  // Kiểm tra xem account có đúng định dạng không
  const regex = /^[0-9]{4,6}$/;
  return regex.test(account);
}





var kiemTraTrung = function (tknv, dsnv) {
  var index = dsnv.findIndex(function (item) {
    return tknv == item.tknv;
  });
  if (index == -1) {
    showMessage("tbTKNV", "");
    return true;
  } else {
    showMessage("tbTKNV", "TKNV đã tồn tại");
    return false;
  }
};



var kiemTraRong = function (idErr, value) {
  if (value.length == 0) {
    showMessage(idErr, "Vui lòng không để trống");
    return false;
  } else {
    showMessage(idErr, "");
    return true;
  }
};


var kiemTraEmail = function (email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(email)) {
    showMessage("tbEmail", "");
    return true;
  } else {
    showMessage("tbEmail", "email không hợp lệ");
    return false;
  }
};