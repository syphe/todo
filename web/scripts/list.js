class List {
    constructor(elem) {
        console.log("Creating List");
        this.elem = elem;
    }
}

List.prototype.addItem = function (listItem) {
    console.log("Adding Item to List");
    this.elem.appendChild(listItem.elem);
}