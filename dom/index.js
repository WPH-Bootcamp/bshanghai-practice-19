console.log("test");

const title = document.getElementById("title");
const subtitle = document.querySelector(".subtitle");
const subtitleClass = document.getElementsByClassName("subtitle");

title.textContent = "teks ini diubah di javascript";

const container = document.getElementById("container");

container.innerHTML = "<p>inner child dari js</p>";
container.style.color = "red";

container.className = "container";

const inputPassword = document.getElementById("input-password");
const showPasswordButton = document.getElementById("show-password");

showPasswordButton.addEventListener("click", () => {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
  } else {
    inputPassword.type = "password";
  }
});
