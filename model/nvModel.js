function NhanVien(_tknv,_name,_email,_password,_datepicker,_luongCB,_chucvu,_giolam) {
    this.tknv = _tknv;
    this.name = _name;
    this.email = _email;
    this.password = _password;
    this.datepicker = _datepicker;
    this.luongCB = _luongCB;
    this.chucvu = _chucvu;
    this.gioLam = _giolam;
    this.tongLuong = function () {
      if (this.chucvu == "Sếp") {
        return this.luongCB * 3;
      } else if (this.chucvu == "Trưởng phòng") {
        return this.luongCB * 2;
      } else {
        return this.luongCB;
      }
    };
    this.xepLoai =  function () {
      if (this.gioLam >= 192) {
        return "Xuất sắc";
      } else if (this.gioLam >= 176 && this.gioLam < 192) {
        return "Giỏi";
      } else if (this.gioLam >= 160 && this.gioLam < 176) {
        return "Khá";
      } else {
        return "Trung bình";
      }
    };
}