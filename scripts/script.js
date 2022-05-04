function changefont_BiaoTi_SONG() {
    document.body.querySelectorAll("h1,h2,h3").forEach((e) => {
        e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
        e.style.fontWeight = "700";
    });
}
function changefont_BiaoTi_HEI() {
    document.body.querySelectorAll("h1,h2,h3").forEach((e) => {
        e.style.fontFamily = "HEI" + "," + "Noto Sans SC";
        e.style.fontWeight = "500";
    });
}

function changefont_ZhengWen_SONG() {
    document.body.querySelectorAll("p").forEach((e) => {
        e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
        e.style.fontWeight = "600";
    });
}
function changefont_ZhengWen_HEI() {
    document.body.querySelectorAll("p").forEach((e) => {
        e.style.fontFamily = "HEI" + "," + "Noto Sans SC";
        e.style.fontWeight = "400";
    });
}

function changefont_BianZhu_SONG() {
    document.body.querySelectorAll(".sideNote").forEach((e) => {
        e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
        e.style.fontWeight = "600";
    });
}

function changefont_BianZhu_HEI() {
    document.body.querySelectorAll(".sideNote").forEach((e) => {
        e.style.fontFamily = "HEI" + "," + "Noto Sans SC";
        e.style.fontWeight = "400";
    });
}