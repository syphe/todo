class ListItem {
    constructor() {
        console.log("Creating ListItem");
        this.elem = document.createElement("li");
    }
}

ListItem.prototype.setText = function(text) {
    this.elem.innerText = text;
}