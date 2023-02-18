let arrBooks = [];

// const form = document.getElementById("book-form");

const btn = document.getElementById("submit-btn");

var tBody = document.getElementsByTagName("tbody");
var id = 1;
btn.addEventListener("click", (event) => {
    event.preventDefault();
    let bookName = document.querySelectorAll("input")[0].value;
    // console.log(bookName);
    let personName = document.querySelectorAll("input")[1].value;
    // console.log(personName);

    let date = new Date();
    date = date =
        date.toLocaleDateString() + " at " + date.toLocaleTimeString();

    let status = document.createElement("p");
    // status.innerHTML += "Not Returned";

    // status.innerHTML += statusTag;
    let textNode = document.createTextNode("Not Returned");
    status.appendChild(textNode);
    status.classList.add("red");
    let statusTag = document.createElement("span");
    let textNode2 = document.createTextNode("edit_square");
    statusTag.appendChild(textNode2);
    statusTag.classList.add("material-symbols-outlined");
    status.appendChild(statusTag);

    let obj = {
        id,
        bookName,
        personName,
        date,
        status,
    };
    arrBooks.push(obj);

    let td1 = document.createElement("td");
    td1.innerHTML = obj.id;
    let td2 = document.createElement("td");
    td2.innerHTML = obj.bookName;
    let td3 = document.createElement("td");
    td3.innerHTML = obj.personName;
    let td4 = document.createElement("td");
    td4.innerHTML = obj.date;
    let td5 = document.createElement("td");
    td5.appendChild(obj.status);

    let tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    if (bookName != "" && personName != "") {
        tBody[0].appendChild(tr);
    }

    bookName = "";
    personName = "";

    // form
    id++;
});
