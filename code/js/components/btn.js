export function LustraBtns() {
    const checkboxBtnsParent = document.querySelectorAll(".btn-checkbox-group")

    checkboxBtnsParent.forEach((parent) => {
        const checkboxBtns = parent.querySelectorAll(".btn-checkbox")

        checkboxBtns.forEach((children) => {
            if (children.classList.contains("btn-active")) {
                children.style.cursor = "pointer"
            }

            children.addEventListener("click", () => {
                children.classList.toggle("btn-active")
                children.style.cursor = "pointer"
            })
        })
    })
}
