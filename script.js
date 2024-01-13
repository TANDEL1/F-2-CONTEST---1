/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];


function PrintDeveloperbyMap() {
    arr.map(emp => {
        if (emp.profession == "developer") {
            console.log(emp);
        }
    });
}
PrintDeveloperbyMap();

function PrintDeveloperbyForEach() {
    arr.forEach(emp => {
        if (emp.profession == "developer") {
            console.log(emp);
        }
    });
}
PrintDeveloperbyForEach();

function addData() {
    let add = {
        id: 4,
        name: "susan",
        age: "20",
        profession: "intern"
    }
    arr.push(add);
    console.log(arr);
}
addData();

function removeAdmin() {
    let deletadmin = arr.filter((emp) => emp.profession !== "admin");
    console.log(deletadmin);
}
removeAdmin();

function concatenateArray() {
    let newdata = [
        { id: 5, name: "ronaldo", age: "35", profession: "CEO" },
        { id: 6, name: "neymar", age: "30", profession: "manager" },
        { id: 7, name: "kirtan", age: "22", profession: "designer" },
    ];

    let newarr = arr.concat(newdata);
    console.log(newarr);
}
concatenateArray();






