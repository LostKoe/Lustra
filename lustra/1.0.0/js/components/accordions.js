export function accordions() {
    const accordionItems = document.querySelectorAll(".ls-accordion")

    accordionItems.forEach((item) => {
        const header = item.querySelector(".ls-accordion-header")
        const btn = item.querySelector(".ls-accordion-btn")
        const body = item.querySelector(".ls-accordion-body")

        if (btn) {
            btn.innerHTML = `
                <svg viewBox="0 0 100 100" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,70 L50,30 L100,70 Z" fill="black" />
                </svg>`
        }

        if (header && btn && body) {
            header.addEventListener("click", () => {
                const isOpen = body.style.maxHeight !== "0px"

                if (!isOpen) {
                    body.style.padding = "15px";
                    body.style.maxHeight = body.scrollHeight + 30 + "px";
                } else {
                    body.style.maxHeight = "0px";
                    body.style.padding = "0px 15px";
                }

                btn.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
            })
        }
    })
}
