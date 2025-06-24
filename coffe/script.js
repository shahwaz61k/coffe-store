// Select menu icon and navigation list elements
let menuIcon = document.querySelector('#menu-icon');
let navList = document.querySelector('.navlist');

// Add click event listener to toggle menu
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggles the menu icon
    navList.classList.toggle('open'); // Toggles the visibility of the navigation list
};
