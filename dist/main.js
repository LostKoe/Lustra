import { onHover } from "../js/events/on-hover.js"
import { divisors } from "../js/styles/divisors.js"
import { dropdowns } from "../js/events/dropdown.js"

document.addEventListener("DOMContentLoaded", () => {
    const elementsAnimationTime = document.querySelectorAll("[data-ls-anim-time]")

    onHover()
    divisors()
    dropdowns()
})
