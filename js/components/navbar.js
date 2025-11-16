export function LustraNavbars() {
    const navbar = document.querySelectorAll(".navbar")

    navbar.forEach((el) => {
        el.innerHTML += `
        <button class="navbar-btn-toggle" type="button">
            <span></span>
            <span></span>
            <span></span>
        </button>
        `

        const navbarNav = el.querySelector(".navbar-nav")
        const navbarToggleBtn = el.querySelector(".navbar-btn-toggle")
        let isNavbarDisplayFlex = true

        navbarToggleBtn.addEventListener("click", () => {
            if (isNavbarDisplayFlex) {
                navbarNav.style.display = "flex"
            } else {
                navbarNav.style.display = "none"
            }

            isNavbarDisplayFlex = !isNavbarDisplayFlex
        })

        console.log(navbarNav.style.display)
    })
}
