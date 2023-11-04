let darkMode = localStorage.getItem("darkMode")
let darkModeToggle = document.getElementsByClassName("switch")[0]

console.log(document.getElementsByClassName("show"))


const enableDarkMode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkMode", "enabled")
}

const disabledDarkMode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkMode", "null")
}

if(darkMode === "enabled"){
    enableDarkMode()
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode")
    if(darkMode !== "enabled"){
        enableDarkMode()
    }else{
        disabledDarkMode()
    }
})
