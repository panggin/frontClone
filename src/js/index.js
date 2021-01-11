const edtEmail = document.getElementById("edtEmail");
const btnSignUP = document.querySelectorAll(".signUP");
const imgWorld = document.getElementById("world");
//console.dir(edtEmail);
//console.log(btnSignUP);

function handlerClick() {
  const email = edtEmail.value;
  //console.log(email);
  if (email !== "") {
    const value = "?email:" + email;
    this.href += value;
  }
}
function init() {
  for (let idx=0; idx<btnSignUP.length; idx++) {
    btnSignUP[idx].addEventListener("click", handlerClick);
  }
}

init();