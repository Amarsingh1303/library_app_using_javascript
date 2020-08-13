console.log("this is main project 2");

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {

    ////this is for addition in ui
    add(book) {
        let tableBody = document.getElementById("tableBody");
        let html = `
                   <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>
                `;
        tableBody.innerHTML += html;
    }

    clear() {
        let libraryform = document.getElementById("libraryform");
        libraryform.reset();

    }

    validate(book) {

        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }

    }
    showAlertMsg(txt, msg) {
        let alertMsg = document.getElementById("alertMsg");
        let showtxt;
        if (txt === 'success') {
            showtxt = 'succeffully';
        }
        else {
            showtxt = 'failed';
        }
        alertMsg.innerHTML = `
                            <div class="alert alert-${txt} alert-dismissible fade show" role="alert">
                            <strong>${showtxt}</strong> ${msg}.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                             </div>
                            `;
        setTimeout(() => {
            alertMsg.innerHTML = ""
        }, 2000);
    }

}

let libraryform = document.getElementById("libraryform");
libraryform.addEventListener("submit", libraryformsubmit);

function libraryformsubmit(e) {
    console.log("you have clicked the submit");
    let bookname = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programing = document.getElementById('programing');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programing.checked) {
        type = programing.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(bookname, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book) == true) {
        display.add(book);
        display.clear();
        display.showAlertMsg("success", "your book is succeffully added");
    }
    else {
        display.showAlertMsg("danger", "try Again");
    }

    e.preventDefault();
}

// Todos"
// 1. Store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view
// ok i will try tomorrow