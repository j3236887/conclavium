var aliases = ["7orturer", "HandiCaptain"];
var ids = ["000001", "000002"];
var btn = document.querySelector(".enter");
var alias = document.querySelector("#alias");
var idNum = document.querySelector("#idNum");
var welcome = document.querySelector(".chatroomBtn")


btn.addEventListener("click", function () {
    var validAlias = alias.value;
    var validIdNum = idNum.value;
    if (aliases.includes(validAlias)) {
        if (ids.includes(validIdNum)) {
            welcome.innerHTML = "Welcome, " + validAlias;
            welcome.style.visibility = "visible";
        } else {
                alert("Invalid ID");
        }
    } else {
            alert("Invalid Alias");
    }
});

