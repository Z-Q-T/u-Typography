function changeTypeMenu_initialActive() {
var i = document.getElementById('changeTypeMenu-BiaoTi-SONG')
i.style.cssText = "background-color: var(--colour-changeType-active) !important;";
}

function changeTypeMenu_switchColour(active, inactive) {
    var a = document.querySelector(active);
    a.style.cssText = "background-color: var(--colour-changeType-active) !important;";
    var b = document.querySelector(inactive);
    b.style.backgroundColor = "var(--colour-paper)";


}

// function changefont_BiaoTi_SONG() {
//     document.body.querySelectorAll("h1,h2,h3").forEach((e) => {
//         e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
//         e.style.fontWeight = "700";
//     });
//     changeTypeMenu_switchColour("#changeTypeMenu-BiaoTi-SONG", "#changeTypeMenu-BiaoTi-HEI");
// }
// function changefont_BiaoTi_HEI() {
//     document.body.querySelectorAll("h1,h2,h3").forEach((e) => {
//         e.style.fontFamily = "HEI" + "," + "Noto Sans SC";
//         e.style.fontWeight = "500";
//     });
//     changeTypeMenu_switchColour("#changeTypeMenu-BiaoTi-HEI", "#changeTypeMenu-BiaoTi-SONG");
// }

// function changefont_ZhengWen_SONG() {
//     document.body.querySelectorAll("p").forEach((e) => {
//         e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
//         e.style.fontWeight = "600";
//     });
//     changeTypeMenu_switchColour("#changeTypeMenu-ZhengWen-SONG", "#changeTypeMenu-ZhengWen-HEI");

// }
// function changefont_ZhengWen_HEI() {
//     document.body.querySelectorAll("p").forEach((e) => {
//         e.style.fontFamily = "HEI" + "," + "Noto Sans SC";
//         e.style.fontWeight = "400";
//     });
//     changeTypeMenu_switchColour("#changeTypeMenu-ZhengWen-HEI", "#changeTypeMenu-ZhengWen-SONG");
// }

// function changefont_BianZhu_SONG() {
//     document.body.querySelectorAll(".sideNote").forEach((e) => {
//         e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
//         e.style.fontWeight = "600";
//     });
//     changeTypeMenu_switchColour("#changeTypeMenu-BianZhu-SONG", "#changeTypeMenu-BianZhu-HEI");
// }

// function changefont_BianZhu_HEI() {
//     document.body.querySelectorAll(".sideNote").forEach((e) => {
//         e.style.fontFamily = "HEI" + "," + "Noto Sans SC";
//         e.style.fontWeight = "400";
//     });
//     changeTypeMenu_switchColour("#changeTypeMenu-BianZhu-HEI", "#changeTypeMenu-BianZhu-SONG");
// }

document.getElementById('changeTypeMenu-BiaoTi-SONG').onclick = function changefont_BiaoTi_SONG() {
    document.body.querySelectorAll("h1,h2,h3").forEach((e) => {
        e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
        e.style.fontWeight = "700";
    });
    changeTypeMenu_switchColour("#changeTypeMenu-BiaoTi-SONG", "#changeTypeMenu-BiaoTi-HEI");
}

document.getElementById('changeTypeMenu-BiaoTi-HEI').onclick = function changefont_BiaoTi_HEI() {
    document.body.querySelectorAll("h1,h2,h3").forEach((e) => {
        e.style.fontFamily = "HEI" + "," + "Noto Sans SC";
        e.style.fontWeight = "500";
    });
    changeTypeMenu_switchColour("#changeTypeMenu-BiaoTi-HEI", "#changeTypeMenu-BiaoTi-SONG");

}
document.getElementById('changeTypeMenu-ZhengWen-SONG').onclick = function changefont_ZhengWen_SONG() {
    document.body.querySelectorAll("p").forEach((e) => {
        e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
        e.style.fontWeight = "600";
    });
    changeTypeMenu_switchColour("#changeTypeMenu-ZhengWen-SONG", "#changeTypeMenu-ZhengWen-HEI");
}

document.getElementById('changeTypeMenu-ZhengWen-HEI').onclick = function changefont_ZhengWen_HEI() {
    document.body.querySelectorAll("p").forEach((e) => {
        e.style.fontFamily = "HEI" + "," + "Noto Sans SC";
        e.style.fontWeight = "400";
    });
    changeTypeMenu_switchColour("#changeTypeMenu-ZhengWen-HEI", "#changeTypeMenu-ZhengWen-SONG");
}

document.getElementById('changeTypeMenu-BianZhu-SONG').onclick = function changefont_BianZhu_SONG() {
    document.body.querySelectorAll(".sideNote").forEach((e) => {
        e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
        e.style.fontWeight = "600";
    });
    changeTypeMenu_switchColour("#changeTypeMenu-BianZhu-SONG", "#changeTypeMenu-BianZhu-HEI");
}

document.getElementById('changeTypeMenu-BianZhu-HEI').onclick = function changefont_BianZhu_HEI() {
    document.body.querySelectorAll(".sideNote").forEach((e) => {
        e.style.fontFamily = "HEI" + "," + "Noto Sans SC";
        e.style.fontWeight = "400";
    });
    changeTypeMenu_switchColour("#changeTypeMenu-BianZhu-HEI", "#changeTypeMenu-BianZhu-SONG");
}