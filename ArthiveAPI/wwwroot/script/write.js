const profile = document.getElementById('profile')
const to_main = document.getElementById('to_main')
const back = document.getElementById('back')

const dis = document.getElementById('dis')
const prog = document.getElementById('prog')
const front = document.getElementById('front')
const bac = document.getElementById('bac')

const spec = document.getElementById('spec')
const types = document.getElementById('types')
const name_cont = document.getElementById('name_cont')
const disc_cont = document.getElementById('disc_cont')

/*Навигация*/
to_main.addEventListener('click', function() {
    window.location = 'main.html'
});

profile.addEventListener('click', function() {
    window.location = 'profile.html'
});

back.addEventListener('click', function() {
    window.history.go(-1);
});

/*боковое*/
dis.addEventListener('click', function() {
    list(dis)
});

prog.addEventListener('click', function() {
    list(prog)
});

front.addEventListener('click', function() {
    list(front)
});

bac.addEventListener('click', function() {
    list(bac)
});

function list(elem){
    let choice = document.createElement('select')
    choice.classList.add('way')
    choice.innerHTML = `
    <option value="статьи">Статьи</option>
    <option value="статьи">Материалы</option>
    <option value="статьи">Книги</option>`
    elem.append(choice)
}


async function write(){
    const token = localStorage.getItem('token')
    await axios.post('http://localhost:5182/pc/post/create', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        Contents:
        {
            type: 0, 
            data:"string",
        },
            PostName: name_cont.value,
            Description: disc_cont.value,
            Category:spec.value,
            Type: types.value,
            AverageTime: "10 min"
    }
)}


