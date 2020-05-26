'use strict';

const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebarLink = document.querySelector('.sidebar-index');


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
})