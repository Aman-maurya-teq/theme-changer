let body = document.querySelector('body')
let inputColorField = document.querySelector('#inputColorField')
let applyColor = document.querySelector('.applyColor')
let randomColor = document.querySelector('.randomColor')
let curentColorValue = document.querySelector('.curentColorValue')

function themeColor(color) {
    body.style.backgroundColor = color
    if (body.style.backgroundColor === 'white') {
        if (color === 'black') {
            body.style.color = 'white'
        }
    }
}
themeColor('light')

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