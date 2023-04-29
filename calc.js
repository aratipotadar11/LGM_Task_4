const display = document.querySelector('#display')
const button = document.querySelectorAll('button')

button.forEach((item) => {
    item.onclick = () => {
        if(item.id == 'clear') {
            display.innerText = ''
        }

        else if(item.id == 'backspace') {
            let string = display.innerText.toString()
            display.innerText = string.substr(0, string.length-1)
        }

        else if(display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText)
        }

        else if(display.innerText == '' && item.id == "equal") {
            alert('Please Enter Something to Calculate')
        }

        else {
            display.innerText += item.id
        }

    }
})