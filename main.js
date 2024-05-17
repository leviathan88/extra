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

// task 3 ---------------------------------------------
const upper = (str, letter, boo) => {
  let result = ''
  for (let i of str) { i === letter && boo ? result += i.toUpperCase() : result += i }
  console.log(result);
}

capital('our battle will be legendary')
pol('level')
upper('opponent', 'o', true)