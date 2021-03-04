// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

let navToggol = document.querySelector('.nav-toggle')
let btn = document.querySelector('.links')

navToggol.addEventListener('click', function() {
    btn.classList.toggle("show-links")
})