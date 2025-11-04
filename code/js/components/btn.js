export function LustraBtns() {
    const checkboxBtnsParent = document.querySelectorAll(".btn-checkbox-group")

    checkboxBtnsParent.forEach((parent) => {
        const checkboxBtns = parent.querySelectorAll(".btn-checkbox")

        checkboxBtns.forEach((children) => {
            children.style.cursor = "pointer"

            children.addEventListener("click", () => {
                children.classList.toggle("btn-active")
            })
        })
    })

    const radioBtnsParent = document.querySelectorAll(".btn-radio-group")

    radioBtnsParent.forEach((parent) => {
        const radioBtns = parent.querySelectorAll(".btn-radio")

        radioBtns.forEach((children) => {
            children.style.cursor = "pointer"

            children.addEventListener("click", () => {
                if (children.classList.contains("btn-active")) {
                    children.classList.remove("btn-active")
                } else {
                    radioBtns.forEach((btn) => btn.classList.remove("btn-active"))
                    children.classList.add("btn-active")
                }
            })
        })
    })

    const toggleBtn = document.querySelectorAll(".btn[data-ls-toggle='button']")

    toggleBtn.forEach((element), () => {
        element.addEventListener("click", () => {
            element.classList.toggle("btn-active")
        })
    })
}
