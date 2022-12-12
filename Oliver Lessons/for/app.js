let textInsert = document.getElementById("text-example")
let nameList = ["Jimmy", "Timmy", "Bimmy"]
let people = [{name:"Jimmy", age:10}, {name:"Timmy", age:15}, {name:"Limmy", age:3}]
function testTime(){
    textInsert.innerHTML = ""
    for (let i = 0; i < nameList.length; i++){
        textInsert.innerHTML += nameList[i] + " "
    }
}
document.getElementById("buttonID").addEventListener('click', testTime);

const markup = `<ul class="people-cls">
    ${people.map(people => `${people.name} is ${people.age}`).join(" ")}`;
console.log(markup)