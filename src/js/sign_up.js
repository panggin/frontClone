const edt = document.querySelectorAll("section .edt");
const btn = document.querySelector("section .btn");
const edtUser = edt[0];
const edtEmail = edt[1];

function checkInfo() {
  const hasEmail = document.URL.indexOf("?");
  //console.log(edtEmail);
  if (hasEmail !== -1) {
    const email = document.URL.split("?")[1].split(":")[1];
    edtEmail.value = email;
  }
}
function create() {
  const user = edtUser.value;
  const email = edtEmail.value;
  let value = "?id:";
  if (user !== "") {
    value += user;
  } else if (email !== "") {
    value += email;
  }
  this.href += value;
}
function init() {
  checkInfo();
  btn.addEventListener("click", create);
}

init();