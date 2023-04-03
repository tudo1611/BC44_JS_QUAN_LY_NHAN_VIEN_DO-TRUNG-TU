var dsnv = [];

function layThongTinTuForm() {
  var tknv = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var datepicker = document.getElementById("datepicker").value;
  var luongCB = document.getElementById("luongCB").value * 1;
  var chucvu = document.getElementById("chucvu").value;
  var gioLam = document.getElementById("gioLam").value * 1;

  //lưu
  var nv = {
    tknv: tknv,
    name: name,
    email: email,
    password: password,
    datepicker: datepicker,
    luongCB: luongCB,
    chucvu: chucvu,
    tongLuong: function() {
        if( chucvu == 'Sếp') {
            return luongCB*3;
        } else if ( chucvu == 'Trưởng phòng') {
            return luongCB*2;
        } else {
            return luongCB;
        }
    },
    xepLoai: function() {
        if ( gioLam >= 192) {
            return "Nhân viên xuất sắc";
        } else if ( gioLam >= 176 && gioLam < 192) {
            return "Nhân viên giỏi";
        } else if ( gioLam >= 160 && gioLam < 176) {
            return "Nhân viên khá";
        } else {
            return "Nhân viên trung bình";
        }

    }
  };
  return nv;
}

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
  if(isValid) {
      dsnv.push(nv);
      //convert array dssv thành json
      var dataJson = JSON.stringify(dsnv);
      //lưu JSON
      localStorage.setItem("DSNV_LOCAL", dataJson); 
      renderDSNV(dsnv);
  }
}

function renderDSNV(nvArr) {
  var contentHTML = "";
  for (var i = 0; i < nvArr.length; i++) {
    var nv = nvArr[i];
    var contentTr = `<tr>
        <td>${nv.tknv}</td>
        <td>${nv.name}</td>
        <td>${nv.email}</td>
        <td>${nv.datepicker}</td>
        <td>${nv.chucvu}</td>
        <td>${nv.tongLuong()}</td>
        <td>${nv.xepLoai()}</td>
        </tr>`;
    contentHTML += contentTr;
  }
  document.querySelector("#tableDanhSach").innerHTML = contentHTML;
}

document.getElementById("btnThemNV").addEventListener("click", function () {
  themNV(dsnv);
});








// var mangThongBao = ['Vui lòng nhập TKNV'];

// function getMyEle(ele) {
//   return document.getElementById(ele);
// }

// function kiemTraNhapTKNV() {
//   var tknv = getMyEle("tknv").value;
//   var thongBao = getMyEle("tbTKNV");
//   if (tknv === "") {
//     thongBao.innerHTML = mangThongBao[0];
//   }
// }

// getMyEle("btnThemNV").addEventListener("click", function () {
//   kiemTraNhapTKNV();
// });
