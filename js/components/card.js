export function LustraCards() {
    const card = document.querySelectorAll(".card")

    card.forEach((el) => {
        const cardHeader = el.querySelector(".card-header")
        const cardImg = el.querySelector(".card-img")

        if (cardImg) {
            cardHeader.style.backgroundImage = `url(${cardImg.src})`
            cardHeader.style.minHeight = "10rem"
            cardHeader.style.backgroundSize = "contain"
            cardHeader.style.backgroundPosition = "center"
            cardHeader.style.backgroundRepeat = "no-repeat"
            cardHeader.style.display = "flex"
            cardHeader.style.alignItems = "flex-end"
            cardImg.style.display = "none"

        }
    })
}
