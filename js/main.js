'use strict';

const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebarLink = document.querySelector('.sidebar-index');
const tabBtn = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');


toggleBtn.addEventListener("click", function () {
    if (sidebar.classList.contains("show-sidebar")) {
        sidebar.classList.remove("show-sidebar");
    } else {
        sidebar.classList.add("show-sidebar");
    }
});

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});


sidebarLink.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});


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