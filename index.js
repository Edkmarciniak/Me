// how to accept user name input

// Easy way with a window prompt

/*
let username = window.prompt("Whats your name?")

console.log(username);
*/

let username;

document.getElementById("myButton").onclick = function() {

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}
    