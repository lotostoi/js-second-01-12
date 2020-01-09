const fs = require('fs')

let itemsQuantity = 200 

const BRANDS = [
    'Samsung',
    'Assus',
    'Sony',
    'Lg',
    'Apple',
    'Garmin',
]
let COUNTRIS = [
    'China',
    'USA',
    'Italy',
    'France',
    'Japan',
    'Taiwan',
]

let CATEGORY = [
    'Monotor',
    'Mouse',
    'Keyboard',
    'Phone',
    'Watch',
    'Headphones',
    'Refrigerator'
]

let MODEL = [
    'a', 'as', 'sa', 'Gx', 'RI', 'ZA', 'BIG', 'Smol', 'Lite', 'QQQ', 'Ye', 'Saw'
]
let NAMBER = [
    '', '2', '3', 'G5', 'R7', '9', '22', '555', 'X1', 'Z5', '8', '4 white'
]


let BOOL = [true, false]

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function rndArr(arr) {
    return arr[getRandomIntInclusive(0, arr.length - 1)]
}

let catalog = []

for (let i = 0; i<= itemsQuantity; i++ ) {
  

    catalog.push({
        name: `${rndArr(CATEGORY)} ${rndArr(MODEL)} ${rndArr(NAMBER)} `,
        price: getRandomIntInclusive(50, 700),
        brand: rndArr(BRANDS),
        img: "./Photo1.png",
        id: i,
        addAtribut: {
            country: rndArr(COUNTRIS),
            ship: rndArr(BOOL),
            bestMatch: rndArr(BOOL),
            new: rndArr(BOOL)
        }
    })

}
//  console.log(catalog)
fs.writeFile('./db/responses/catalogData.json', JSON.stringify(catalog), (err) => {
    if (err) {
        console.log('Файл для записи не найден')
    } else {
        console.log('Фаил перезаписан')
    }
})