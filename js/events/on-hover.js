export function onHover() {
    const getHoverElements = document.querySelectorAll("[data-ls-hover]")

    getHoverElements.forEach((e) => {
        const animTime = e.getAttribute("data-ls-anim-time") || "0.3s"

        e.addEventListener("mouseover", () => {
            e.style.transition = `all ${animTime} ease-in-out`
            e.classList.toggle(e.getAttribute("data-ls-hover"))
        })

        e.addEventListener("mouseout", () => {
            e.classList.toggle(e.getAttribute("data-ls-hover"))
        })
    })
}
