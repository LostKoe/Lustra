export function alerts() {
    const alertEls = document.querySelectorAll(".ls-alert")
    const dismissAlertEls = document.querySelectorAll(".ls-alert-dismiss")
    const alertsTextEls = document.querySelectorAll(".ls-alert-text")

    dismissAlertEls.forEach((e) => {
        e.addEventListener("click", () => {
            e.closest(".ls-alert").style.display = "none"
        })

        e.innerHTML = `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="15" height="15">
            <path fill="none" stroke="black" stroke-width="10" d="M0,0 L100,100 Z M100,0 L0,100 Z"></path>
        </svg>
        `
    })

    alertEls.forEach((e) => {
        if (e.querySelector(".ls-alert-dismiss")) {
            e.classList.add("ls-alert-with-dismiss")
        }
    })

    alertsTextEls.forEach((el) => {
        el.style.display = "inline-block"
        el.style.mixBlendMode = "difference"
        el.style.filter = "brightness(50%)"
    })
}
