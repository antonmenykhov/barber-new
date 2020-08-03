//API
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

async function registerUser(event) {
    event.preventDefault();
    let newuser = {
        firstname: registerForm['firstname'].value,
        secondname: registerForm['secondname'].value,
        mail: registerForm['mail'].value,
        phone: registerForm['phone'].value,
        password: registerForm['pass'].value
    };

    let response = await fetch('../createUser.php', {
        method: 'POST',
        body: JSON.stringify(newuser)
    });
    let answer = await response.json();
    alert(answer.phrase);
}

async function loginUser(event) {
    event.preventDefault();
    let creds = {
        mail: loginForm['mail'].value,
        password: loginForm['pass'].value
    }
    let response = await fetch('../login.php', {
        method: 'POST',
        body: JSON.stringify(creds)
    })
    let answer = await response.json();
    alert(answer.phrase);
    console.log(answer);
}
//Куки
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}



//STYLE
//Подсветка активных элементов меню
function getCoord(elem) {
    let box = elem.getBoundingClientRect();
    return top = box.top + window.pageYOffset;
}

//Получил блоки
const services = document.getElementById('services');
const about = document.getElementById('about');
const galery = document.getElementById('gallery');
const faq = document.getElementById('faq');
//Получил элементы меню
const menuTop = document.getElementById('menu-top');
const menuServices = document.getElementById('menu-services');
const menuAbout = document.getElementById('menu-about');
const menuGalery = document.getElementById('menu-gallery');
const menuFaq = document.getElementById('menu-faq');
//Получаю коордианаты блоков
let servicesY = getCoord(services);
let aboutY = getCoord(about);
let galeryY = getCoord(galery);
let faqY = getCoord(faq);
let userY = 0;
const navbar = document.getElementById('navbar')
window.addEventListener('scroll', function () {
    userY = this.scrollY;
    if (userY < servicesY) {
        menuTop.classList.add('nav-active');
        navbar.classList.remove('sticky-navbar');
    } else {
        menuTop.classList.remove('nav-active');
        navbar.classList.add('sticky-navbar');
    }
    if ((userY >= servicesY) && (userY < aboutY)) {
        menuServices.classList.add('nav-active');
    } else {
        menuServices.classList.remove('nav-active');
    }
    if ((userY >= aboutY) && (galeryY > userY)) {
        menuAbout.classList.add('nav-active');
    } else {
        menuAbout.classList.remove('nav-active');
    }
    if ((userY >= galeryY) && (faqY > userY)) {
        menuGalery.classList.add('nav-active');
    } else {
        menuGalery.classList.remove('nav-active');
    }
    if (userY >= faqY) {
        menuFaq.classList.add('nav-active');
    } else {
        menuFaq.classList.remove('nav-active');
    }
})
///Работа с pop-up
const popUpHolder = document.getElementById('pop-up-holder');
const closeButton = document.getElementById('close-button');
const loginOrRegister = document.getElementById('login-or-register');
const loginFormHolder = document.getElementById('login-form-holder');
const registerFormHolder = document.getElementById('register-form-holder');
const lk = document.getElementsByClassName('lk');
const booking = document.getElementsByClassName('book');
const registerButton = document.getElementById('register-button');
const loginButton = document.getElementById('login-button');
const guestButton = document.getElementById('guest-button');


for (let i = 0; i < lk.length; i++) {
    lk[i].addEventListener('click', function () {
        popUpHolder.style = "display:flex";
        loginOrRegister.style = "display:flex";
    })
}
for (let i = 0; i < booking.length; i++) {
    booking[i].addEventListener('click', function () {
        popUpHolder.style = "display:flex";
        loginOrRegister.style = "display:flex";
    })
}
closeButton.addEventListener('click', function () {
    popUpHolder.style = "display:none";
    loginOrRegister.style = "display:none";
    loginFormHolder.style = "display:none";
    registerFormHolder.style = "display:none";
})
registerButton.addEventListener('click', function () {
    popUpHolder.style = "display:flex";
    loginOrRegister.style = "display:none";
    loginFormHolder.style = "display:none";
    registerFormHolder.style = "display:flex";
})
loginButton.addEventListener("click", function () {
    popUpHolder.style = "display:flex";
    loginOrRegister.style = "display:none";
    loginFormHolder.style = "display:flex";
    registerFormHolder.style = "display:none";
})
