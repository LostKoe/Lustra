export function alerts() {
    const alertsEls = document.querySelectorAll(".ls-alert")

    alertsEls.forEach((el) => {
        const alertWidth = el.getBoundingClientRect().width
        const screenWidth = window.innerWidth
        const head = el.querySelector(".ls-alert-head")
        const icon = el.querySelector(".ls-alert-icon")
        head.style.display = "flex"
        head.style.justifyContent = "center"
        head.style.alignItems = "center"

        if (alertWidth <= 365 || screenWidth <= 365) {
            head.style.flexDirection = "column"
            head.style.width = "100%"

            icon.style.display = "flex"
            icon.style.justifyContent = "center"
            icon.style.alignItems = "center"
            icon.style.width = "100%"
            icon.style.margin = "0"
        } else {}
    })
}
