const btnDarkMode = document.querySelector(".dark-mode-btn");

// Switch on/off Dark Mode on btn


btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active")
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')

    }
}



//!  1 - Проверка системных настроек

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}



//!  2 - Проверка Локальных настроек

// Check Dark Mode in the Local Storage
if (localStorage.getItem('darkMode') === 'dark'){
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode') === 'ligth'){
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark")
};


//!  3 - Изменение системных настроек, Прослушивание





//? Listening Sistem Changes

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorSheme = event.matches ? 'dark' : 'ligth';

    alert("Change Theme!!!")



    if (newColorSheme === 'dark'){
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "dark");
    } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "light");
    }

})







//? Check Dark Mode on the sistem settings


if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage.getItem('darkMode') === 'light'){
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches){
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}













