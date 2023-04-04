var showMessage = function (id, message) {
  document.getElementById(id).style.display = "block";
  document.getElementById(id).innerHTML = message;
};

// function kiemTraPassword(password) {
//   // Kiểm tra độ dài của mật khẩu

//   // Kiểm tra mật khẩu có chứa ít nhất một ký tự số, một ký tự in hoa và một ký tự đặc biệt
//   var regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/;
//   if (!regex.test(password)) {
//     showMessage("tbMatKhau", "mật khẩu không hợp lệ");
//     return false;
//   } else if (password.length < 6 || password.length > 10) {
//     showMessage("tbMatKhau", "mật khẩu không hợp lệ");
//     return false;
//   } else {
//     showMessage("tbMatKhau", "");
//     return true;
//   }
// }

function kiemTraTaiKhoan(accountNumber) {
  if (accountNumber.trim() === "") {
    // kiểm tra tài khoản có bị rỗng không
    showMessage("tbTKNV", "Tài khoản không hợp lệ");
    return false;
  } else if (/^\d{4,6}$/.test(accountNumber)) {
    // kiểm tra tài khoản có đúng độ dài từ 4 đến 6 ký tự và chỉ chứa ký tự số không
    showMessage("tbTKNV", "");
    return true;
  } else {
    showMessage("tbTKNV", "Tài khoản không hợp lệ");
    return false;
  }
}


function kiemTraPassword(password) {
  const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])(?!.*\s).{6,10}$/;
  if (!regex.test(password)) {
    showMessage("tbMatKhau", "Mật khẩu không hợp lệ");
    return false;
  } else {
    showMessage("tbMatKhau", "");
    return true;
  }
}

function kiemTraLuongCB(salary) {
  const minSalary = 1000000;
  const maxSalary = 20000000;
  if (!salary || salary < minSalary || salary > maxSalary) {
    showMessage("tbLuongCB", "Lương CB không hợp lệ");
    return false;
  } else {
    showMessage("tbLuongCB", "");
    return true;
  }
}

function kiemTraGioLam(hours) {
  const minHours = 80;
  const maxHours = 200;
  if (!hours || hours < minHours || hours > maxHours) {
    showMessage("tbGiolam", "Giờ làm không hợp lệ");
    return false;
  } else {
    showMessage("tbGiolam", "");
    return true;
  }
}

function kiemTraChucVu(chucvu) {
  if (chucvu == "Chọn chức vụ") {
    showMessage("tbChucVu", "Vui lòng chọn chức vụ");
    return false;
  } else {
    showMessage("tbChucVu", "");
    return true;
  }
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
