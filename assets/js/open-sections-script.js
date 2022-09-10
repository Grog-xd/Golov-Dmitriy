const btns = document.querySelectorAll('.btn')
const blocks = document.querySelectorAll('.block')

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
