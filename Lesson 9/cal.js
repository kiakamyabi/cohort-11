// Body Mass Index is a simple calculation using a person’s height and weight. The formula is BMI = kg/m2 where kg is a person’s weight
// in kilograms and m2 is their height in metres squared.

function bmiCal(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let bmi = weight / Math.pow(height, 2);
    console.log(bmi * 10000)
    document.getElementById("output").innerHTML = (bmi * 10000).toFixed(2);
}