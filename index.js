var id = "admin";
var ps = "admin";
function func() {
  var id_in = document.getElementById("input1").value;
  var ps_in = document.getElementById("input2").value;

  if (id_in === "" || ps_in === "") {
    alert("Bạn chưa nhập tài khoản hoặc mật khẩu!");
  } else if (id_in === id && ps_in === ps) {
    alert("Đăng nhập thành công!");
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "block";
    document.getElementById("h1").innerHTML = "Welcome";
  } else alert("Bạn nhập sai tài khoản hoặc mật khẩu!");
}

function back() {
  alert("Quay trở lại đăng nhập!");
  document.getElementById("div1").style.display = "block";
  document.getElementById("div2").style.display = "block";
  document.getElementById("div3").style.display = "block";
  document.getElementById("div4").style.display = "none";
  document.getElementById("h1").innerHTML = "Login";
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
}
