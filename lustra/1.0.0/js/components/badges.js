export function badges() {
    const allCircleBadgesEls = document.querySelectorAll(".ls-badge-circle")

    allCircleBadgesEls.forEach((e) => {
        e.innerHTML = ""
        e.textContent = ""
    })
}
