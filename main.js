// task 1 ------------------------------------------------------
const capital = (str) => {
  let text = ''
  let arr = str.split(' ')
  
  for (let i of arr) {
    let arr2 = i.split('')
    let cap = arr2[0].toUpperCase()
    arr2.shift()
    arr2.unshift(cap)
    let before = arr2.toString()
    let after = before.replaceAll(',', '')
    text += after + ' '
  }

  let arr3 = text.split('')
  arr3.pop()
  let str2 = arr3.toString()
  let result = str2.replaceAll(',', '') 
  console.log(result);
}

// task 2 -------------------------------------------------
const pol = (str) => {
  let arr = str.split('')
  let arr2 = arr.reverse()
  let str2 = arr2.toString()
  let reverse = str2.replaceAll(',', '')
  
  if (str === reverse) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// const three = (str, letter, boo) => {
//   let arr = str.split('')
  
//   for (let i of arr) {
//     if (i === letter) {
//       console.log(i);

//       if (boo === true) {
//         let cap = i.toUpperCase()
//         console.log(cap);
//       }
//     }
//   }
// }

// birinci stringin içində gəzərək ikinci stringin olduğu hissələri tapıb
// onları gələn 3-cü parametrə görə böyük yada kiçik hərfə çevirsin
// sonda isə dəyişdirilmiş stringi qaytarsın
// modifyString("Jhon Doe", "e", true) // output: "Jhon DoE"
// modifyString("Jhon Doe", "j", false) // output: "jhon Doe"
// modifyString("Jhon Doe", "o", true) // output: "jhOn DOe"

capital('our battle will be legendary')
pol('level')
// three('opponent', 'o', true)