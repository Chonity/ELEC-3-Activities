// Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all dropdowns
    const dropdowns = document.querySelectorAll('.dropdown');

    // Add event listeners for hover behavior
    dropdowns.forEach(dropdown => {
        // Show the dropdown menu when hovering over the parent item
        dropdown.addEventListener('mouseenter', () => {
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            dropdownMenu.classList.add('show'); // Show the menu
        });

        // Hide the dropdown menu when not hovering
        dropdown.addEventListener('mouseleave', () => {
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            dropdownMenu.classList.remove('show'); // Hide the menu
        });
    });
});
