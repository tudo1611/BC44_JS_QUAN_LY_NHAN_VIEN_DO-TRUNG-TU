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
        <td>
        <button onclick="xoaNV(${nv.tknv})" class='btn btn-danger'>Xóa</button>
        <button onclick="suaNV(${
          nv.tknv
        })" class='btn btn-warning' id="btnThem" data-toggle="modal"
									data-target="#myModal">Sửa</button>
    </td>
        </tr>`;
    contentHTML += contentTr;
  }
  document.querySelector("#tableDanhSach").innerHTML = contentHTML;
}

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
  var nv = new NhanVien(
    tknv,
    name,
    email,
    password,
    datepicker,
    luongCB,
    chucvu,
    gioLam
  );

  // var nv = {
  //   tknv: tknv,
  //   name: name,
  //   email: email,
  //   password: password,
  //   datepicker: datepicker,
  //   luongCB: luongCB,
  //   chucvu: chucvu,
  //   tongLuong: function () {
  //     if (chucvu == "Sếp") {
  //       return luongCB * 3;
  //     } else if (chucvu == "Trưởng phòng") {
  //       return luongCB * 2;
  //     } else {
  //       return luongCB;
  //     }
  //   },
  //   xepLoai: function () {
  //     if (gioLam >= 192) {
  //       return "Nhân viên xuất sắc";
  //     } else if (gioLam >= 176 && gioLam < 192) {
  //       return "Nhân viên giỏi";
  //     } else if (gioLam >= 160 && gioLam < 176) {
  //       return "Nhân viên khá";
  //     } else {
  //       return "Nhân viên trung bình";
  //     }
  //   },
  // };
  return nv;
}

function showThongTinLenForm(nv) {
  document.getElementById("tknv").value = nv.tknv;
  document.getElementById("name").value = nv.name;
  document.getElementById("email").value = nv.email;
  document.getElementById("password").value = nv.password;
  document.getElementById("datepicker").value = nv.datepicker;
  document.getElementById("luongCB").value = nv.luongCB;
  document.getElementById("chucvu").value = nv.chucvu;
  document.getElementById("gioLam").value = nv.gioLam;
}
