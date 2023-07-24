window.addEventListener("load", () => {
    let ageSpan = document.getElementById("age");
    ageSpan.innerHTML = Math.floor((new Date() - new Date("1999-06-20")) / 31557600000) + "";
});