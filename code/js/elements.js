class Lustra {
    constructor(el, data = {}) {
        this.el = el
        this.classes = data.classes
        this.content = data.content
    }

    createAt(position, target) {
        const parent = document.querySelector(target)
        const element = document.createElement(this.el.replace("#", ""))

        for (let i = 0; i < this.classes.length; i++) {
            element.classList.add(this.classes[i])
        }
        element.innerHTML = this.content

        if (position === "start") {
            parent.prepend(element)
        } else {
            parent.appendChild(element)
        }
    }
}
