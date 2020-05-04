const currentPage = location.pathname
const meuItems = document.querySelectorAll("header .links a")

for (item of meuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    } 
}
