const edtEmail = document.getElementById("edtEmail");
const btnSignUP = document.querySelectorAll(".signUP");
console.dir(edtEmail);
console.log(btnSignUP);

function isClick(num) {
  const email = edtEmail.value;
  if (email != "") {
    const value = "?email:" + email;
    btnSignUP[num].href += value;
    console.log(email);
  }
}
