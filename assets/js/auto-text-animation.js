const texts = document.querySelectorAll('[data-speed]')

function textAnimvation(){
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
}