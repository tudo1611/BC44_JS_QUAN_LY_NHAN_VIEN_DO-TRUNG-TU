var dsnv = [];


//lấy json lên khi user load trang
var dataJson = localStorage.getItem("DSNV_LOCAL");
//convert từ json thành array
if (dataJson != null) {
  dssv = JSON.parse(dataJson);
  renderDSNV(dsnv);
}

function themNV() {
  var nv = layThongTinTuForm();
  var isValid = kiemTraTrung(nv.tknv, dsnv);

  isValid =
    isValid & kiemTraRong("tbEmail", nv.email) && kiemTraEmail(nv.email);

  isValid = isValid & kiemTraRong("tbTen", nv.name);
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

document.getElementById("btnThemNV").addEventListener("click", function () {
  themNV(dsnv);
});
