const login = document.getElementById('login')
const button = document.getElementById('search')
const lol = document.getElementById('lol')
const main = document.getElementById('main')
const mode = document.getElementById('mode')


let toggle = false;
mode.addEventListener('click', function (e) {
    console.log(e);
    if (toggle) {
        main.style.background = 'white';
        main.style.color = 'black';
        document.querySelector('#mode').innerHTML = `<i class="ri-sun-line"></i>`
    }
    else {
        main.style.background = 'black';
        main.style.color = 'white';
        document.querySelector('#mode').innerHTML = `<i class="ri-moon-fill"></i>`
    }
    toggle = !toggle;
})

button.addEventListener('click', function () {
    const userId = login.value
    console.log(userId);
    fetch(`https://api.github.com/users/${userId}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            lol.innerHTML = `<div id="lol">  
                    <div id="left">
                    <h3>Followers: ${data.followers}</h3>
                    <h3>Following: ${data.following}</h3>
                    <h3>Email: ${data.email}</h3>
                    <h3>Company: ${data.company}</h3>
                    <h3>Twitter: ${data.twitter_username}</h3>
                    <h3>Public repo: ${data.public_repos}</h3>
                    <h3>Account created on: ${data.created_at}</h3>
                    <h3>Bio: ${data.bio}</h3>
                    <h3>Account Id: ${data.login}</h3>
                    <h3>Id: ${data.id}</h3>
                </div>
                <div id="right">
                    <div id="profile">
                        <img src='https://avatars.githubusercontent.com/u/${data.id}?v=4'
                    </div>
                    <h3>Name: ${data.name}</h3>
                    <h3>Location: ${data.location}</h3>
                </div>
                </div>`
        })
        // .then((data)=>{
        //     console.log(data);
        //     lol.innerHTML=`<h2>${data.name}</h2>`
        // })
        .catch(error => {
            console.log(error);
        })
})