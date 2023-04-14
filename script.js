
const areaAnswer = document.querySelector('#area')
const base = document.querySelector('#base')
const height = document.querySelector('#height')
const button = document.querySelector('#button')

const calculateArea = function (base, height) {
    const baseAsNum = Number(base.value)
    const heightAsNum = Number(height.value)
    const area = (baseAsNum * heightAsNum) / 2
    return area
}

button.addEventListener('click', function () {
    const result = calculateArea(base, height)
    areaAnswer.innerHTML = `The area of this triangle is ${result} cm2`
})
