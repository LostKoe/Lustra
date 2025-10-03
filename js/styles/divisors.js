export function divisors() {
    const allDivisors = document.querySelectorAll(".ls-divisor-max")

    allDivisors.forEach((divisor) => {
        const parent = divisor.parentElement
        const parentStyle = getComputedStyle(parent)

        const paddingLeft = parseFloat(parentStyle.paddingLeft)
        const paddingRight = parseFloat(parentStyle.paddingRight)

        divisor.style.marginLeft = `${-paddingLeft}px`
        divisor.style.marginRight = `${paddingRight}px`
        divisor.style.width = `calc(100% + ${paddingLeft + paddingRight}px)`
    })
}
