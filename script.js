// Get the elements
const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');
const navMenu = document.querySelector('.nav-menu');

// Function to open the menu
menuOpenButton.addEventListener('click', () => {
    navMenu.style.display = 'block'; // Show the menu
    menuOpenButton.style.display = 'none'; // Hide the open button
    menuCloseButton.style.display = 'block'; // Show the close button
});

// Function to close the menu
menuCloseButton.addEventListener('click', () => {
    navMenu.style.display = 'none'; // Hide the menu
    menuOpenButton.style.display = 'block'; // Show the open button
    menuCloseButton.style.display = 'none'; // Hide the close button
});
