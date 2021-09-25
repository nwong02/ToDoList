const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementsByClassName("input");
const trashIcon = document.getElementsByClassName("trash");

input.addEventListener("keydown", function(event))
{
    if(event.key == "Enter")
    {
        addItem();
    }
}

function addItem()
{
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
}