const tmp = document.URL.split("?")[1];
const email = tmp.split(":")[1];
const edtEmail = document.getElementById("email");
edtEmail.placeholder = email;
edtEmail.value = email;

function isClick(prev) {
  if (prev != "") {
    edtEmail.placeholder = "";
  }
}
