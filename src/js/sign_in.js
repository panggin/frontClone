const edt = document.querySelectorAll(".edt");
const btn = document.querySelector(".btn");
const edtID = edt[0];
const edtPassword = edt[1];

function checkInfo() {
  const hasID = document.URL.indexOf("?");
  if (hasID !== -1) {
    const id = document.URL.split("?")[1].split(":")[1];
    edtID.value = id;
  }
}
function login() {
    alert("login!");
}
function init() {
  checkInfo();
  btn.addEventListener("click", login);
}

init();