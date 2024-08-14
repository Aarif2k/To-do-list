var input = document.getElementById("one");
var ul = document.getElementById("two");

function add() {
    var list = document.createElement("li");
    list.innerHTML = "<div class='text-container'>"
                        + "<span class='text'>" + input.value + "</span> "
                        + "</div>"
                        + "<div class='button-container'>"
                        + "<button onclick='ItemEdit(event)' class='edit-button'>Edit</button> "
                        + "<button onclick='ItemDelete(event)'>Delete</button>"
                        + "</div>";
    ul.append(list);
    input.value = ''; // Clear the input after adding
}

function ItemDelete(event) {
    event.target.closest('li').remove();
}

function ItemEdit(event) {
    var li = event.target.closest('li');
    var textSpan = li.querySelector(".text");
    var currentText = textSpan.textContent.trim();
    var newText = prompt("Edit item:", currentText);
    if (newText !== null && newText.trim() !== "") {
        textSpan.textContent = newText;
    }
}
