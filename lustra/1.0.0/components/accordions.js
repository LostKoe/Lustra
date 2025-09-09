export function accordions() {
    const accordionItems = document.querySelectorAll(".accordion-item")

    accordionItems.forEach((item) => {
        const header = item.querySelector(".accordion-header")
        const btn = item.querySelector(".accordion-btn")
        const body = item.querySelector(".accordion-body")

        item.style.border = "1px solid lightgray"
        item.style.borderRadius = "5px"
        item.style.margin = "10px"
        item.style.overflow = "hidden"

        if (header) {
            header.style.display = "flex"
            header.style.justifyContent = "space-between"
            header.style.alignItems = "center"
            header.style.padding = "15px"
            header.style.cursor = "pointer"
            header.style.borderBottom = "1px solid lightgray"
        }

        if (btn) {
            btn.innerHTML = `
                <svg viewBox="0 0 100 100" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,70 L50,30 L100,70 Z" fill="black" />
                </svg>`
            btn.style.background = "transparent"
            btn.style.border = "none"
            btn.style.marginLeft = "auto"
            btn.style.transition = "transform 0.5s ease"
        }

        if (body) {
            body.style.maxHeight = "0px"
            body.style.overflow = "hidden"
            body.style.transition = "all 0.5s ease"
            body.style.padding = "0 15px"
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
