// 初始的字体选择高亮
function changeTypeMenu_initialActive() {
    let initial = ['changeTypeMenu-BiaoTi-SONG', 'changeTypeMenu-ZhengWen-HEI', 'changeTypeMenu-BianZhu-HEI'];
    for (let i = 0; i < initial.length; i++) {
        document.getElementById(initial[i]).style.cssText = "background-color: var(--colour-changeType-active) !important; color:black;";
    }
}

//点击按钮后改变按钮颜色
function changeTypeMenu_switchColour(active, inactive) {
    let a = document.querySelector(active);
    a.style.cssText = "background-color: var(--colour-changeType-active) !important; color:black";
    let b = document.querySelector(inactive);
    b.style.cssText = "background-color: var(--colour-changeType-inactive); color:white";


}

//按钮的换字体功能

// 标题换宋体
document.getElementById('changeTypeMenu-BiaoTi-SONG').onclick = function changefont_BiaoTi_SONG() {
    document.body.querySelectorAll(".titleLine,h2,h3,#tableOfContent li").forEach((e) => {
        e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
        e.style.fontWeight = "700";
    });//换中文
    document.body.querySelectorAll(".Latin-BiaoTi").forEach((e) => {
        e.style.fontFamily = "'SERIF'" + "," + "Source Serif Pro";
        e.style.fontWeight = "600";
        e.style.fontSize="1.1em";
    });//换西文
    document.body.querySelectorAll("h1 h-char.bd-jiya.bd-open > h-inner, h1 h-char.bd-jiya.bd-close > h-inner, h1 h-char.bd-jiya.bd-cop > h-inner, h1 h-char.bd-jiya[unicode='ff0e'] > h-inner").forEach((e) => {
        e.style.cssText = "font-family: 'SONG-BiaoDian', 'Noto Serif SC' !important; font-weight: 700 !important;";
    });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-BiaoTi-SONG", "#changeTypeMenu-BiaoTi-HEI");
}
// 标题换黑体
document.getElementById('changeTypeMenu-BiaoTi-HEI').onclick = function changefont_BiaoTi_HEI() {
    document.body.querySelectorAll(".titleLine,h2,h3,#tableOfContent li").forEach((e) => {
        e.style.fontFamily = "HEI" + "," + "Noto Sans SC";
        e.style.fontWeight = "500";
    });//换中文
    document.body.querySelectorAll(".Latin-BiaoTi").forEach((e) => {
        e.style.fontFamily = "SANS" + "," + "Source Sans Pro";
        e.style.fontWeight = "600";
        e.style.fontSize="1em";
    });//换西文
    document.body.querySelectorAll("h1 h-char.bd-jiya.bd-open > h-inner, h1 h-char.bd-jiya.bd-close > h-inner, h1 h-char.bd-jiya.bd-cop > h-inner, h1 h-char.bd-jiya[unicode='ff0e'] > h-inner").forEach((e) => {
        e.style.cssText = "font-family: 'HEI-BiaoDian', 'Noto Sans SC' !important; font-weight: 500 !important;";
    });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-BiaoTi-HEI", "#changeTypeMenu-BiaoTi-SONG");

}
// 正文换宋体
document.getElementById('changeTypeMenu-ZhengWen-SONG').onclick = function changefont_ZhengWen_SONG() {
    document.body.querySelectorAll("p").forEach((e) => {
        e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
        e.style.fontWeight = "600";
    });//换中文
    document.body.querySelectorAll(".Latin-ZhengWen").forEach((e) => {
        e.style.fontFamily = "'SERIF'" + "," + "Source Serif Pro";
        e.style.fontWeight = "400";
        e.style.fontSize="1.05em";
    });//换西文
    document.body.querySelectorAll("article h-char.bd-jiya.bd-open > h-inner, article h-char.bd-jiya.bd-close > h-inner, article h-char.bd-jiya.bd-cop > h-inner, article h-char.bd-jiya[unicode='ff0e'] > h-inner").forEach((e) => {
        e.style.fontFamily = "SONG-BiaoDian" + "," + "Noto Serif SC";
        e.style.fontWeight = "600";
    });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-ZhengWen-SONG", "#changeTypeMenu-ZhengWen-HEI");
}
//正文换黑体
document.getElementById('changeTypeMenu-ZhengWen-HEI').onclick = function changefont_ZhengWen_HEI() {
    document.body.querySelectorAll("p").forEach((e) => {
        e.style.fontFamily = "HEI" + "," + "Noto Sans SC";
        e.style.fontWeight = "400";
    });//换中文
    document.body.querySelectorAll(".Latin-ZhengWen").forEach((e) => {
        e.style.fontFamily = "SANS" + "," + "Source Sans Pro";
        e.style.fontWeight = "400";
        e.style.fontSize="1.1em";
    });//换西文
    document.body.querySelectorAll("article h-char.bd-jiya.bd-open > h-inner, article h-char.bd-jiya.bd-close > h-inner, article h-char.bd-jiya.bd-cop > h-inner, article h-char.bd-jiya[unicode='ff0e'] > h-inner").forEach((e) => {
        e.style.fontFamily = "HEI-BiaoDian" + "," + "Noto Sans SC";
        e.style.fontWeight = "400";
    });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-ZhengWen-HEI", "#changeTypeMenu-ZhengWen-SONG");
}
//边注换宋体
document.getElementById('changeTypeMenu-BianZhu-SONG').onclick = function changefont_BianZhu_SONG() {
    document.body.querySelectorAll(".sideNote").forEach((e) => {
        e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
        e.style.fontWeight = "600";
    });//换中文
    document.body.querySelectorAll(".Latin-BianZhu").forEach((e) => {
        e.style.fontFamily = "'SERIF'" + "," + "Source Serif Pro";
        e.style.fontWeight = "400";
        e.style.fontSize="1.05em";
    });//换西文
    document.body.querySelectorAll(".sideNote h-char.bd-jiya.bd-open > h-inner, .sideNote h-char.bd-jiya.bd-close > h-inner, .sideNote h-char.bd-jiya.bd-cop > h-inner, .sideNote h-char.bd-jiya[unicode='ff0e'] > h-inner").forEach((e) => {
        e.style.cssText = "font-family: 'SONG-BiaoDian', 'Noto Serif SC' !important; font-weight: 600 !important;"
    });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-BianZhu-SONG", "#changeTypeMenu-BianZhu-HEI");
}
//边注换黑体
document.getElementById('changeTypeMenu-BianZhu-HEI').onclick = function changefont_BianZhu_HEI() {
    document.body.querySelectorAll(".sideNote").forEach((e) => {
        e.style.fontFamily = "HEI" + "," + "Noto Sans SC";
        e.style.fontWeight = "400";
    });//换中文
    document.body.querySelectorAll(".Latin-BianZhu").forEach((e) => {
        e.style.fontFamily = "SANS" + "," + "Source Sans Pro";
        e.style.fontWeight = "400";
        e.style.fontSize="1.1em";
    });//换西文
    document.body.querySelectorAll(".sideNote h-char.bd-jiya.bd-open > h-inner, .sideNote h-char.bd-jiya.bd-close > h-inner, .sideNote h-char.bd-jiya.bd-cop > h-inner, .sideNote h-char.bd-jiya[unicode='ff0e'] > h-inner").forEach((e) => {
        e.style.cssText = "font-family: 'HEI-BiaoDian', 'Noto Sans SC' !important; font-weight: 400 !important;"
    });//换标点
    changeTypeMenu_switchColour("#changeTypeMenu-BianZhu-HEI", "#changeTypeMenu-BianZhu-SONG");
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
