export function LustraAlerts() {
    const alertDimissible = document.querySelectorAll(".alert.alert-dismissible")

    alertDimissible.forEach((alert) => {
        alert.innerHTML += `
            <button type="button" class="alert-dimiss-btn">&times;</button>
        `

        const dimissBtn = alert.querySelector(".alert-dimiss-btn")

        dimissBtn.addEventListener("click", () => {
            alert.style.display = "none"
        })
    })
}
