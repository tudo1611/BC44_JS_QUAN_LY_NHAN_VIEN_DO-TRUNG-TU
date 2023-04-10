var dsnv = [];

//lấy json lên khi user load trang
var dataJson = localStorage.getItem("DSNV_LOCAL");
//convert từ json thành array
if (dataJson != null) {
  var dataArr = JSON.parse(dataJson);
  for (var i = 0; i < dataArr.length; i++) {
    var item = dataArr[i];
    var nv = new NhanVien(
      item.tknv,
      item.name,
      item.email,
      item.password,
      item.datepicker,
      item.luongCB,
      item.chucvu,
      item.gioLam
    );
    dsnv.push(nv);
  }
  renderDSNV(dsnv);
}

function themNV() {
  var nv = layThongTinTuForm();
  //tknv
  var isValid = kiemTraTrung(nv.tknv, dsnv) && kiemTraTaiKhoan(nv.tknv);
  //email
  isValid =
    isValid & kiemTraRong("tbEmail", nv.email) && kiemTraEmail(nv.email);
  //tennv
  isValid = isValid & kiemTraRong("tbTen", nv.name);
  //password
  isValid = isValid & kiemTraPassword(nv.password);
  //datepicker
  isValid = isValid & kiemTraRong("tbNgay", nv.datepicker);
  //luongCB
  isValid = isValid & kiemTraLuongCB(nv.luongCB);
  //chucvu
  isValid = isValid & kiemTraChucVu(nv.chucvu);
  //gioLam
  isValid = isValid & kiemTraGioLam(nv.gioLam);
  if (isValid) {
    dsnv.push(nv);
    //convert array dssv thành json
    var dataJson = JSON.stringify(dsnv);
    //lưu JSON
    localStorage.setItem("DSNV_LOCAL", dataJson);
    renderDSNV(dsnv);
  }
}

function xoaNV(id) {
  //tìm vị trí
  var viTri = -1;
  for (var i = 0; i < dsnv.length; i++) {
    var nv = dsnv[i];
    if (nv.tknv == id) {
      viTri = i;
    }
  }
  dsnv.splice(viTri, 1);
  renderDSNV(dsnv);
}

function suaNV(id) {
  // console.log(id);
  var viTri = dsnv.findIndex(function (item) {
    return item.tknv == id;
  });
  if (viTri != -1) {
    //chặn user sửa tknv
    document.getElementById("tknv").disabled = true;
    // console.log(viTri);
    showThongTinLenForm(dsnv[viTri]);
  }
}

function capNhatNhanVien() {
  var nv = layThongTinTuForm();

  //email
  var isValid = kiemTraRong("tbEmail", nv.email) && kiemTraEmail(nv.email);
  //tennv
  isValid = isValid & kiemTraRong("tbTen", nv.name);
  //password
  isValid = isValid & kiemTraPassword(nv.password);
  //datepicker
  isValid = isValid & kiemTraRong("tbNgay", nv.datepicker);
  //luongCB
  isValid = isValid & kiemTraLuongCB(nv.luongCB);
  //chucvu
  isValid = isValid & kiemTraChucVu(nv.chucvu);
  //gioLam
  isValid = isValid & kiemTraGioLam(nv.gioLam);

  //bỏ chặn user
  document.getElementById("tknv").disabled = false;
  var viTri = dsnv.findIndex(function (item) {
    return item.tknv == nv.tknv;
  });
  if (viTri !== -1) {
    if (isValid) {
      dsnv[viTri] = nv;
      renderDSNV(dsnv);
      resetForm();
      var dataJson = JSON.stringify(dsnv);
      //lưu JSON
      localStorage.setItem("DSNV_LOCAL", dataJson);
    }
  }
}

function searchNV() {
  var request = document.getElementById("searchName").value.trim();
  document.getElementById("searchName").value = "";
  var result = dsnv.filter(function(e){
    return e.xepLoai() === request;
  });
  renderDSNV(result);
}
// function capNhatNhanVien() {
//   //bỏ chặn user
//   document.getElementById("tknv").disabled = false;

//   //lấy thông tin từ form
//   var nv = layThongTinTuForm();
//   var viTri = dsnv.findIndex(function (item) {
//     return item.tknv == nv.tknv;
//   });
//   if (viTri !== -1) {
//     dsnv[viTri] = nv;
//      var isValid = kiemTraTrung(nv.tknv, dsnv) && kiemTraRong("tbTKNV", nv.tknv);
//   //email
//   isValid =
//     isValid & kiemTraRong("tbEmail", nv.email) && kiemTraEmail(nv.email);
//   //tennv
//   isValid = isValid & kiemTraRong("tbTen", nv.name);
//   //password
//   isValid = isValid & kiemTraPassword(nv.password);
//   //datepicker
//   isValid = isValid & kiemTraRong("tbNgay", nv.datepicker);
//   //luongCB
//   isValid = isValid & kiemTraLuongCB(nv.luongCB);
//   //chucvu
//   isValid = isValid & kiemTraChucVu(nv.chucvu);
//   //gioLam
//   isValid = isValid & kiemTraGioLam(nv.gioLam);
//   if (isValid) {
//     renderDSNV(dsnv);
//     resetForm();
//   }
// }
// }

function resetForm() {
  document.getElementById("formQLNV").reset();
}

document.getElementById("btnThemNV").addEventListener("click", function () {
  themNV(dsnv);
});
document.getElementById("btnCapNhat").addEventListener("click", function () {
  capNhatNhanVien(dsnv);
});
// document.getElementById("btnTimNV").addEventListener('click', function () {
//   searchNV();
// });
