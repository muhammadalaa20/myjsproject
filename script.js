/*fetch('https://reqres.in/api/users/',{
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify ({
        name: 'user 1'
    })
})
.then(res => {
return res.json()
})
.then(data => console.log(data))*/

const dog = document.getElementById('dog');
const dogBtn = document.getElementById('dogBtn');


function getRandomDog(){
    console.log('clicked')
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
        if(data.url.includes('.mp4')){
            getRandomDog()
        }else{
        dog.innerHTML=`<img src="${data.url}" width="400px" height="400px">`
    }})
}
