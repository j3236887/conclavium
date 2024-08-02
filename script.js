var passphrases = ["handicaptain", "polynomial", "example3"];
var passphraseInput = document.querySelector(".passphrase");
var enterBtn = document.querySelector(".enter-btn");
var welcomeBtn = document.querySelector(".access");

enterBtn.addEventListener("click", function () {
    var input = passphraseInput.value;
    if (passphrases.includes(input)) {
        welcomeBtn.style.visibility = "visible";
    } else {
        alert("Invalid input");
    }
});
