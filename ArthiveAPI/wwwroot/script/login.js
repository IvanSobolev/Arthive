import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
const input_name = document.getElementById('input_name')
const input_email = document.getElementById('input_email')
const input_pass = document.getElementById('input_pass')

const input_email_enter = document.getElementById('input_email_enter')
const input_pass_enter = document.getElementById('input_pass_enter')

const enter = document.getElementById('enter')
const regist = document.getElementById('register')

regist.addEventListener('click', () => {
    register()
    })

enter.addEventListener('click', () => {
    loginn()
    test()
    window.location = 'main_in_pr.html'
});

async function register(){
    const res = await axios.post('http://localhost:5182/accounts/register', {
        name: input_name.value,
        email: input_email.value,
        password: input_pass.value
      })
      .then(function (response) {
        if (response.status == "200"){
            const token = res.token
            localStorage.setItem('token', token),
            localStorage.setItem('isLoggedIn', 'true')}})
      .catch(function (error) {
        alert(error)
      });
}

async function test(){
    const token = localStorage.getItem('token')
    await axios.post('http://localhost:5182/pc/post/create', {
        headers: {
            Authorization: `Bearer ${token}`
        },
})
}

async function loginn(){
    await axios.post('http://localhost:5182/accounts/login', {
        email: input_email_enter.value,
        password: input_pass_enter.value})
      .then(function (response) {
        if (response.status == "200"){
            localStorage.setItem('isLoggedIn', 'true');
        }})
      .catch(function (error) {
        error = document.createElement('p');
        error.textContent = 'Неверный логин или пароль';
        error.classList.add('error')
        enter.insertAdjacentElement('beforebegin', error);
      });
}

function check(a, b, c, but){
    if (a.value.replaceAll(' ', '') != '' && b.value.replaceAll(' ', '') != '' && c.value.replaceAll(' ', '') != ''){
            but.classList.add('active');
        }
}

input_name.addEventListener('focusout', () => {
    check(input_name , input_email, input_pass, regist)
});
input_email.addEventListener('focusout', () => {
    check(input_name , input_email, input_pass, regist)
});
input_pass.addEventListener('focusout', () => {
    check(input_name , input_email, input_pass, regist)
});


input_email_enter.addEventListener('focusout', () => {
    check(input_email_enter, input_pass_enter, input_pass_enter, enter)
});
input_pass_enter.addEventListener('focusout', () => {
    check(input_email_enter, input_pass_enter, input_pass_enter, enter)
});

