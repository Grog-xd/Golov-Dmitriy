const avatar = document.getElementById('avatar')
const title = document.getElementById('title')



async function getInfo(){
    try{
        response = await fetch(`https://api.github.com/users/Grog-xd`)
        response = await response.json()
        avatar.style.background = `url('${response.avatar_url}') center center/cover no-repeat`
        title.textContent = `${response.name} ${response.bio}`
        textAnimvation()
    } catch(error){
        console.log(error.message);
        avatar.style.background = `url('assets/imgs/avatar.jpg') center center/cover no-repeat`
        title.textContent = `Golov Dmitiry Frontend Developer`
        textAnimvation()
    }

}


getInfo()
