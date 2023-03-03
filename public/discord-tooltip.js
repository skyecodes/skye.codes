let discordTooltip, discordTooltipTimeoutId;
const discordTooltipText = "Tag copied to clipboard!"

window.addEventListener("load", () => {
    discordTooltip = document.getElementById("discord-tooltip");
    discordTooltip.addEventListener("click", () => {
        navigator.clipboard.writeText('Skye#2000').then(() => {
            setTooltip(discordTooltip, discordTooltipText)
            clearTimeout(discordTooltipTimeoutId)
            discordTooltipTimeoutId = setTimeout(() => clearTooltip(discordTooltip), 3000)
        })
    })
    discordTooltip.addEventListener("mouseleave", () => {
        clearTimeout(discordTooltipTimeoutId)
        clearTooltip(discordTooltip)
    })
});

function clearTooltip(element) {
    element.removeAttribute("tooltip")
}

function setTooltip(element, value) {
    element.setAttribute("tooltip", value)
}