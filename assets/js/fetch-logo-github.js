const avatar = document.getElementById('avatar')



async function getAvatar(){
    try{
        response = await fetch(`https://api.github.com/users/Grog-xd`)
        response = await response.json()
        avatar.style.background = `url('${response.avatar_url}') center center/cover no-repeat`
    } catch(error){
        console.log(error.message);
        avatar.style.background = `url('assets/imgs/avatar.jpg') center center/cover no-repeat`
    }

}

getAvatar()
