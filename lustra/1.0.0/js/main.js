import { accordions } from "./components/accordions.js";

document.addEventListener("DOMContentLoaded", () => {
    function color(hsl) {
        return `hsl(${hsl})`
    }

    const colors = {
        main: {
            primary: color("286, 83%, 50%"),
            secondary: color("281, 92%, 25%"),
            warning: color("60, 81%, 48%"),
            danger: color("0, 78%, 47%"),
            success: color("120, 84%, 45%"),
            white: color("0, 0%, 100%"),
        },
        other: {
            // [Red]
            red100: color("0, 100%, 10%"),
            red200: color("0, 100%, 20%"),
            red300: color("0, 100%, 30%"),
            red400: color("0, 100%, 40%"),
            red500: color("0, 100%, 50%"),
            red600: color("0, 100%, 60%"),
            red700: color("0, 100%, 70%"),
            red800: color("0, 100%, 80%"),
            red900: color("0, 100%, 90%"),
            // [/]

            // [Orange]
            orange100: color("31, 100%, 10%"),
            orange200: color("31, 100%, 20%"),
            orange300: color("31, 100%, 30%"),
            orange400: color("31, 100%, 40%"),
            orange500: color("31, 100%, 50%"),
            orange600: color("31, 100%, 60%"),
            orange700: color("31, 100%, 70%"),
            orange800: color("31, 100%, 80%"),
            orange900: color("31, 100%, 90%"),
            // [/]

            // [Yellow]
            yellow100: color("60, 100%, 10%"),
            yellow200: color("60, 100%, 20%"),
            yellow300: color("60, 100%, 30%"),
            yellow400: color("60, 100%, 40%"),
            yellow500: color("60, 100%, 50%"),
            yellow600: color("60, 100%, 60%"),
            yellow700: color("60, 100%, 70%"),
            yellow800: color("60, 100%, 80%"),
            yellow900: color("60, 100%, 90%"),
            // [/]

            // [Green]
            green100: color("120, 100%, 10%"),
            green200: color("120, 100%, 20%"),
            green300: color("120, 100%, 30%"),
            green400: color("120, 100%, 40%"),
            green500: color("120, 100%, 50%"),
            green600: color("120, 100%, 60%"),
            green700: color("120, 100%, 70%"),
            green800: color("120, 100%, 80%"),
            green900: color("120, 100%, 90%"),
            // [/]

            // [Light blue]
            lBlue100: color("180, 100%, 10%"),
            lBlue200: color("180, 100%, 20%"),
            lBlue300: color("180, 100%, 30%"),
            lBlue400: color("180, 100%, 40%"),
            lBlue500: color("180, 100%, 50%"),
            lBlue600: color("180, 100%, 60%"),
            lBlue700: color("180, 100%, 70%"),
            lBlue800: color("180, 100%, 80%"),
            lBlue900: color("180, 100%, 90%"),
            // [/]

            // [Blue]
            blue100: color("240, 100%, 10%"),
            blue200: color("240, 100%, 20%"),
            blue300: color("240, 100%, 30%"),
            blue400: color("240, 100%, 40%"),
            blue500: color("240, 100%, 50%"),
            blue600: color("240, 100%, 60%"),
            blue700: color("240, 100%, 70%"),
            blue800: color("240, 100%, 80%"),
            blue900: color("240, 100%, 90%"),
            // [/]

            // [Purple]
            purple100: color("271, 100%, 10%"),
            purple200: color("271, 100%, 20%"),
            purple300: color("271, 100%, 30%"),
            purple400: color("271, 100%, 40%"),
            purple500: color("271, 100%, 50%"),
            purple600: color("271, 100%, 60%"),
            purple700: color("271, 100%, 70%"),
            purple800: color("271, 100%, 80%"),
            purple900: color("271, 100%, 90%"),
            // [/]

            // [Pink]
            pink100: color("300, 100%, 10%"),
            pink200: color("300, 100%, 20%"),
            pink300: color("300, 100%, 30%"),
            pink400: color("300, 100%, 40%"),
            pink500: color("300, 100%, 50%"),
            pink600: color("300, 100%, 60%"),
            pink700: color("300, 100%, 70%"),
            pink800: color("300, 100%, 80%"),
            pink900: color("300, 100%, 90%"),
            // [/]
        }
    }

    const elementsColor = document.querySelectorAll("*")

    for (let i = 0; i < elementsColor.length; i++) {
        const el = elementsColor[i]
        const classes = el.classList

        for (let j = 0; j < classes.length; j++) {
            const cls = classes[j]

            if (cls.startsWith("ls-color-")) {
                const colorName = cls.slice(9).replace("-", "")
                const colorValue = colors.main[colorName] || colors.other[colorName]

                if (colorValue) {
                    el.style.color = colorValue
                }
            }
        }
    }

    const elementsBackground = document.querySelectorAll("*")

    for (let i = 0; i < elementsBackground.length; i++) {
        const el = elementsBackground[i]
        const classes = el.classList

        for (let j = 0; j < classes.length; j++) {
            const cls = classes[j]

            if (cls.startsWith("ls-bg-")) {
                const bgName = cls.slice(6).replace("-", "")
                const bgValue = colors.main[bgName] || colors.other[bgName]

                if (bgValue) {
                    el.style.backgroundColor = bgValue
                }
            }
        }
    }

    accordions()

    console.log("This website is using a CSS library: Lustra")
})
