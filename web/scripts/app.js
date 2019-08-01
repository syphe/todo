class App {
    constructor() {
        console.log("Starting App");
        this.list = new List(document.getElementById("list"));
        this.newItemForm = document.getElementById("new_item");
        this.newItemForm.onsubmit = (e) => this.onNewItem(e);
    }
}

App.prototype.onNewItem = function(e) {
    e.preventDefault();
    var textInput = this.newItemForm["text"];
    var listItem = new ListItem();
    listItem.setText(textInput.value);
    this.list.addItem(listItem);
    textInput.value = "";
}

var app;

function onLoad() {
    app = new App();
}