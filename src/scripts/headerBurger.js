'use strict'

const topNav = document.querySelector('#topNav');
const navContainer = document.querySelector('#navContainer');
const login = document.querySelector('#login');
const burgerBtn = document.querySelector('#burger');
const hrs = document.querySelectorAll('#hrBurger');

function observerWidth() {
    console.log(window.innerWidth);
    if (window.innerWidth > 769) {
        topNav.classList.remove('activeTopNav');
        navContainer.classList.remove('activeNavContainer');
        login.classList.remove('activeLogin');
        topNav.classList.remove('closeTopNav');
        document.body.style.overflow = 'scroll'
    }

    topNav.classList.remove('activeTopNav');
    navContainer.classList.remove('activeNavContainer');
    login.classList.remove('activeLogin');

    for (const hr of hrs) {
        hr.classList.remove('activeHr');
    }
}

function toggleNav() {
    topNav.classList.toggle('activeTopNav');
    navContainer.classList.toggle('activeNavContainer');
    login.classList.toggle('activeLogin');

    if (!topNav.classList.contains('activeTopNav')) {
        topNav.classList.add('closeTopNav');
    } else {
        topNav.classList.remove('closeTopNav');
    }

    for (const hr of hrs) {
        hr.classList.toggle('activeHr');
    }

    if (document.body.style.overflow == 'hidden') {
        document.body.style.overflow = 'scroll'
    } else {
        document.body.style.overflow = 'hidden';
    }
}

window.addEventListener('resize', observerWidth);
burgerBtn.addEventListener('click', toggleNav);