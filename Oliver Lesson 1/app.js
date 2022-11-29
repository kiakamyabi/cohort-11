elementTing = document.querySelectorAll(".input-cls");

function Car(brand, model, colour){
    this.brandName = brand;
    this.modelName = model;
    this.colourName = colour;
}

function createNewObject(event){
    event.preventDefault();
    const brandName = document.getElementById("brand-name").value;
    const modelName = document.getElementById("model-name").value;
    const colourName = document.getElementById("colour-name").value;

    const newCar = new Car(brandName, modelName, colourName);

    elementTing.innerHTML = `
    <p>${newCar.brandName}</p>
    <p>${newCar.modelName}</p>
    <p>${newCar.colourName}</p>
    `;
}