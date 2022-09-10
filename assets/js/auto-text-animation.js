// https://github.com/Grog-xd/Auto-text-animation

const texts = document.querySelectorAll('[data-speed]')


texts.forEach(text =>{
    let str = text.textContent
    if(!str){
        console.log('пожалуйста используйте данный скрипт только с текстовыми тегами')
        return
    }
    let result = ''
    let i = 0
    text.innerHTML = ''

    let interval = setInterval(() => {
        result += str[i]
        i++
        text.innerHTML = result
        if(i == str.length){
            clearInterval(interval)
            
        }
    }, text.dataset.speed);
})