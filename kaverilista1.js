let button = document.getElementById("btn");
button.addEventListener("click", addName);
let names = [];

function addName() {
    let input = document.getElementById("name").value;

    if (input == "") {
        alert("Anna kelvollinen nimi")
        return
    }

    names.push(input);
    console.log(names);

    let list = document.getElementById("list");
    let newLi = document.createElement("li");
    let text = document.createTextNode(input);
    newLi.appendChild(text);
    list.appendChild(newLi);

    if (names.length == 10) {
        let form = document.getElementById("form");
        form.remove();
    }
}