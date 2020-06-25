document.querySelector(".menu-icon").addEventListener("click", (e) => {
    let nav_menu = document.querySelector("header nav")
    if(nav_menu.style.display == "block") fadeOut(nav_menu)
    else fadeIn(nav_menu)
})

// Animations
function fadeIn(element){
    element.classList.add("show")
    element.classList.remove("hide")
    setTimeout(() => {
        element.style.display = "block"
    }, 500)
}
function fadeOut(element){
    element.classList.remove("show")
    element.classList.add("hide")
    setTimeout(() => {
        element.style.display = "none"
    }, 500)
}
document.querySelector("resize" , e => {
    window.location.reload()
})