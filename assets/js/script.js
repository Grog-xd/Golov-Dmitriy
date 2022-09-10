const btns = document.querySelectorAll('.btn')
const blocks = document.querySelectorAll('.block')

const rolfLink = document.getElementById('rofl-link')

btns.forEach(btn =>{
    btn.addEventListener('click', () =>{
        let data = btn.dataset.btn
        blocks.forEach(block=>{
            block.classList.remove('active')
            if(btn.classList.contains('active')){
                block.classList.remove('active')
            }
            else if(block.dataset.block == data){
                block.classList.add('active')
            }
        })
        btn.classList.toggle('active')
    })
})


rolfLink.addEventListener('click', (e) =>{
    e.preventDefault()
    rolfLink.innerHTML = '<h2>Я конечно знаю что я красивый, но не настолько)</h2>'
    rolfLink.classList.add('active')
    setTimeout(() =>{
        rolfLink.style.display = 'none'
    }, 2000)
})