function changefontSONG() {
    document.body.querySelectorAll("p").forEach((e) => {
        e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
    });
}
function changefontHEI() {
    document.body.querySelectorAll("p").forEach((e) => {
        e.style.fontFamily = "HEI" + "," + "Noto Sans SC";
    });
}