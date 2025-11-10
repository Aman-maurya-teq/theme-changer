let body = document.querySelector('body')
let inputColorField = document.querySelector('#inputColorField')
let applyColor = document.querySelector('.applyColor')
let randomColor = document.querySelector('.randomColor')
let curentColorValue = document.querySelector('.curentColorValue')

function themeColor(color) {
    body.style.backgroundColor = color;
    const isDark = ['black', 'purple', 'navy', '#222', 'gray'].includes(color);
    // console.log(isDark)
    body.style.color = isDark ? 'white' : 'black';
    // if (body.style.color === isDark) {
    //     body.style.color = 'white'
    // } else {
    //     body.style.color = 'black'
    // }
    // Also update input & button background for contrast
    inputColorField.style.backgroundColor = isDark ? '#fff' : '#333';
    inputColorField.style.color = isDark ? '#000' : '#fff';
}


let handleApplyColor = () => {
    let inputColor = inputColorField.value
    curentColorValue.innerText = inputColor
    themeColor(inputColor)
}
applyColor.addEventListener('click', handleApplyColor)

let handleRandomColor = () => {
    let arr = ['black', 'gray', 'white', 'pink', 'purple',]
    let randomValue = Math.floor(Math.random() * arr.length)
    // console.log(randomValue)
    let myColor = arr[randomValue]
    // console.log(myColor)
    themeColor(myColor)
    curentColorValue.innerText = myColor
}

randomColor.addEventListener('click', handleRandomColor)