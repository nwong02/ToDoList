const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementsByClassName("user-input");
const trashIcon = document.getElementsByClassName("trash");

input.querySelector("#input").addEventListener("keydown", function(event)
{
    if(event.key === "Enter")
    {
        addItem(input.value);
    }
});

function addItem()
{
    let divParent = document.createElement("div");
    let divChild = document.createElement("div");
    let checkIcon = document.createElement("i");
    let trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>' + input.value + '</div>';

    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("onclick", function() 
    {
        checkIcon.style.color = "purple";
    })

    divChild.appendChild(checkIcon);

    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "white";
    trashIcon.addEventListener("onclick", function()
    {
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}