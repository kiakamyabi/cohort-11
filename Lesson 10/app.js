let shoppingList = ["Eggs"];
let addBtn = document.getElementById("add-btn");
let addInput = document.getElementById("add-input");
let toDoContainer = document.getElementById("to-do-container");

addBtn.addEventListener('click', function(){
    if (addInput.value == " "){
        alert("Error. No empty spaces allowed.");
        return false;
    }
    else if (shoppingList.includes(addInput.value)){
        alert("Error. This is already on the list.")
    }
    else {
    shoppingList.push(addInput.value);
    var paragraph = document.createElement('p')
    paragraph.innerText = addInput.value;
    toDoContainer.appendChild(paragraph);
    alert(addInput.value + " has been added to the list.")  
    console.log(shoppingList);
    }
})