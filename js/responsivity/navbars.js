export function navbar() {
    const navbarEls = document.querySelectorAll(".ls-navbar")

    navbarEls.forEach((el) => {
        const navItemsEls = el.querySelector(".ls-navbar-menu").innerHTML

        el.insertAdjacentHTML("beforeend", `
            <button type="button" class="ls-navbar-burger">
            <span></span>
                <span></span>
                <span></span>
                </button>

                <div class="ls-navbar-burger-menu">
                    ${navItemsEls}
                </div>
        `)
        const navBtnEl = el.querySelector(".ls-navbar-burger")
        const navContentEl = el.querySelector(".ls-navbar-burger-menu")
        let isNavContentOpen = false

        navContentEl.style.display = "none"

        navBtnEl.addEventListener("click", () => {
            if (isNavContentOpen) {
                navContentEl.style.display = "none"
            } else {
                navContentEl.style.display = "flex"
            }

            isNavContentOpen = !isNavContentOpen
        })
    })
}
