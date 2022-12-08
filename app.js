let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */

tableauDeux.length

tableauDeux.map(function (item) {
    item.length
    console.log(item);
    console.log(item.length);
})

let threeArray = tableauDeux.map(function (item){
    console.log(item.length + item)
})

if(tableauDeux.item.length % 2){
    console.log(tableauDeux.item.length)
}

let test = (tableauDeux.item.length % 2) ? console.log(tableauDeux.item.length): console.log(tableauDeux.item.length);

(tableauDeux.item.length - 3 > 10) ?  console.log(tableauDeux.item.length) : console.log(tableauDeux.item.length);


if(tableauDeux.item.length > 2 + 2){
    console.log(tableauDeux.item.length)
}


let newTable = tableauUn.map(function (item){
    return item;
})

let newTable2 = tableauUn.map(function (item){
    return item * 10;
})

let newTable3 = tableauUn.map(function (test){
    return test + 2 / 19;
})

console.log(newTable);
console.log(newTable2);
console.log(newTable3)

getNewArray()

function getNewArray() {
    return tableauUn.filter(function (item){
        if (item > 2){
            console.log(item)
        }
        if(item % 2){
            console.log(item)
        }
        if(item * 3 > 10){
            console.log(item)
        }
    })
}