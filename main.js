// task 1 ----------------------------------------------------------------
const capital = (str) => {
  let arr = str.split(' ')
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
  }

  console.log(arr.join(' '));
}

// task 2 -------------------------------------------------------------------------
const pol = (str) => {
  let arr = str.split('').reverse().toString().replaceAll(',', '')
  if (str === arr) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// task 3 ---------------------------------------------------------------
const upper = (str, letter, boo) => {
  let result = ''

  for (let i of str) {
    if (i === letter && boo) {
      result += i.toUpperCase()
    } else if (i.toLowerCase() === letter && !boo) {
      result += i.toLowerCase()
    } else {
      result += i
    }
  }

  console.log(result);
}

capital('our battle will be legendary')
pol('level')
upper('we have sEEn it never befORe', 'e', true)