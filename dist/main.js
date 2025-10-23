import { onHover } from "../js/events/on-hover.js"
import { dropdowns } from "../js/events/dropdown.js"
import { divisors } from "../js/styles/divisors.js"
import { navbar } from "../js/responsivity/navbars.js"

document.addEventListener("DOMContentLoaded", () => {
    const elementsAnimationTime = document.querySelectorAll("[data-ls-anim-time]")

    onHover()
    dropdowns()
    divisors()
    navbar()
})
