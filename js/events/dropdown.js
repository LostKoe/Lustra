export function dropdowns() {
    const dropdownsEls = document.querySelectorAll(".ls-dropdown")

    dropdownsEls.forEach((dropdown) => {
        const text = dropdown.querySelector(".ls-dropdown-text")
        const menu = dropdown.querySelector(".ls-dropdown-menu")
        let isMenuOpen = false

        text.addEventListener("click", (e) => {
            e.stopPropagation()
            menu.style.display = isMenuOpen ? "none" : "flex"
            isMenuOpen = !isMenuOpen
        })

        document.addEventListener("click", (e) => {
            if (!dropdown.contains(e.target)) {
                menu.style.display = "none"
                isMenuOpen = false
            }
        })
    })
}
