import * as sidebarModule from './main.js';

'use strict';

const tabBtn = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');


about.addEventListener('click', function (evt) {
    const id = evt.target.dataset.id;
    if (id) {
        //remove active from other buttons
        tabBtn.forEach(function (tabBtn) {
            tabBtn.classList.remove("active");
            evt.target.classList.add("active");
        });
        // hide articles with mismatch id
        articles.forEach(function (article) {
            article.classList.remove("active");
        })
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});