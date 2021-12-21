let arr = []
let errorFirst = document.querySelector('.first')
let errorSecond = document.querySelector('.second')

function createElement(name, color, type, backgroundType) {
    console.log('true')
    arr.push(name)
    let br = document.createElement('br')
    let elem = document.createElement('div')
    //elem.style.height = '200px'
    //elem.style.width = '200px'
    elem.classList.add('div1')
    elem.style.backgroundColor = `${backgroundType}`
    let elemIn = document.createElement('div')
    //elemIn.style.left = '50px'
    //elemIn.style.top = '50px'
    elemIn.classList.add('div2')
    elemIn.style.backgroundColor = `rgba(255, 255, 255, 0.5)`
    elem.append(elemIn)
    elemIn.append(`${name}`)
    elemIn.append(br)
    elemIn.append(`${type}`)
    elemIn.append(br)
    elemIn.append(`${color}`)
    document.querySelector(".block").append(elem)
}

function checkHidden() {
    if (errorSecond.style.hidden !== false)
        errorSecond.classList.add('hidden')
    if (errorFirst.style.hidden !== false)
        errorFirst.classList.add('hidden')
}

const cock = () => {
    let res = document.cookie.split(';')
    for (let i = 0; i < res.length; i++) {
        let mass = res.toString().split('=')
     //   console.log(`${mass[i]}`, `${mass[i + 1]}`, `${mass[i + 2].replace(',', '')}`, `${mass[i + 2].replace(',', '')}(${mass[i + 1]})`)
        //createElement(`${mass[i]}`, `${mass[i + 1]}`, `${mass[i + 2]}`, `${mass[i + 2].replaceAll(',', '')}(${mass[i + 1]})`)
    }
}

window.onload = cock()

document.querySelector("button").onclick = () => {
    checkHidden();
    let name = document.querySelector('.name').value
    let type = document.querySelector('.type').value
    let color = document.querySelector('.color').value
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === name) {
            errorFirst.classList.remove('hidden')
            return
        }
    }
    document.cookie = `${name}=${color}=${type}; expires=2`
    console.log(document.cookie)
    let regRGB = new RegExp('(\\d{1,3}),(\\d{1,3}),(\\d{1,3})')
    let regRGBA = new RegExp('(\\d{1,3}),(\\d{1,3}),(\\d{1,3}),([1-2])')
    let regHEX = new RegExp('^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$')
    if (type === 'RGB' && color.match(regRGB)) {
        createElement(name, color, type, `rgb(${color})`);
    } else if (type === 'RGB') {
        errorSecond.innerHTML = 'RGB format: [0-255],[0-255],[0-255]'
        errorSecond.classList.remove('hidden')
    }
    if (type === 'RGBA' && color.match(regRGBA)) {
        createElement(name, color, type, `rgba(${color})`);
    } else if (type === 'RGBA') {
        errorSecond.innerHTML = 'RGB format: [0-255],[0-255],[0-255],[1-2]'
        errorSecond.classList.remove('hidden')
    }
    if (type === 'HEX' && color.match(regHEX)) {
        createElement(name, color, type, `${color}`);
    } else if (type === 'HEX') {
        errorSecond.innerHTML = 'HEX code format #******'
        errorSecond.classList.remove('hidden')
    }
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
