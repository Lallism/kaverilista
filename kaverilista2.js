let buttonAdd = document.getElementById("btn-add");
let buttonDelete = document.getElementById("btn-del");
let buttonSort = document.getElementById("btn-sort");
let textInput = document.getElementById("name");
buttonAdd.addEventListener("click", addName);
buttonDelete.addEventListener("click", removeName);
buttonSort.addEventListener("click", sortNames);
let list = document.getElementById("list");
let names = [];

function addName() {
    let input = textInput.value;
    textInput.value = "";

    if (input == "") {
        alert("Anna kelvollinen nimi")
        return
    }

    names.push(input);

    let newLi = document.createElement("li");
    let text = document.createTextNode(input);
    newLi.appendChild(text);
    list.appendChild(newLi);
}

function removeName() {
    let input = textInput.value;
    textInput.value = "";

    if (input == "") {
        alert("Anna kelvollinen nimi");
        return
    }

    for (let i in names) {
        if (input == names[i]) {
            names.splice(i, 1);
            refreshList();
            return
        }
    }

    alert("Nimeä ei löydy");
}

function sortNames() {
    names.sort();
    refreshList();
}

function refreshList() {
    list.replaceChildren();

    for (let name of names) {
        let newLi = document.createElement("li");
        let text = document.createTextNode(name);
        newLi.appendChild(text);
        list.appendChild(newLi);
    }
}