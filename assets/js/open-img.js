const imgs = document.querySelectorAll('.expiriens-elem__img')
imgs.forEach(img =>{
    img.addEventListener('click', () =>{
        img.classList.toggle('active')
    })
})