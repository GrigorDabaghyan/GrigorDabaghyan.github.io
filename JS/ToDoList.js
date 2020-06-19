function add_item() {


    let item = document.getElementById("inputToDo");
    let list_item = document.getElementById("list_item");
    if (item.value != "") {

        // Creating element and adding value to it
        let make_item = document.createElement("div");
        let element_wrapper = document.createElement("div");
        element_wrapper.className = "todo-list-item-wrapper";
        make_item.appendChild(element_wrapper);

        let text_div = document.createElement("div");
        text_div.className = "text";

        text_div.appendChild(document.createTextNode(item.value));

        let actions_wrapper = document.createElement("div");

        let close_img = document.createElement("img");
        close_img.src = "../baseline_close_black_18dp.png";

        let done_img = document.createElement("img");
        done_img.src = "../baseline_done_black_18dp.png";

        actions_wrapper.appendChild(done_img);
        actions_wrapper.appendChild(close_img);

        element_wrapper.appendChild(text_div);
        element_wrapper.appendChild(actions_wrapper);

        let list_item_wrapper = document.createElement("div");
        list_item_wrapper.className = "todo-list-item";
        list_item_wrapper.appendChild(make_item);

        // Adding li to ul
        list_item.appendChild(list_item_wrapper);

        // Reset the value of box
        item.value = "";

        // Delete a li item on click
        close_img.onclick = function () {
            this.parentNode.parentNode.parentNode.parentNode.className =
                "todo-list-item inactive";
        };

        done_img.onclick = function () {
            this.parentNode.parentNode.parentNode.parentNode.className =
                "todo-list-item active";
        };
    } else {
        alert("please add a value to item");
    }
}

function on_search() {
    let searchTerm = document.getElementById("search-element").value;
    console.log(searchTerm);

    let items_root = document.getElementById("list_item");
    items_root.childNodes.forEach((element) => {
        let text = element.firstChild.firstChild.firstChild.innerText;
        if (!text.includes(searchTerm)) {
            element.classList.add("hidden");
        } else {
            element.classList.remove("hidden");
        }
    });
}
