import { onHover } from "../js/events/on-hover.js"
import { alerts } from "../js/responsivity/alerts.js"

document.addEventListener("DOMContentLoaded", () => {
    const elementsAnimationTime = document.querySelectorAll("[data-ls-anim-time]")

    onHover()
    alerts()
})
