// 初始的字体选择高亮
function changeTypeMenu_initialActive() {
    let initial = ['changeTypeMenu-BiaoTi-SONG', 'changeTypeMenu-FenLei-HEI', 'changeTypeMenu-FuTi-HEI'];
    for (let i = 0; i < initial.length; i++) {
        document.getElementById(initial[i]).style.cssText = "background-color: var(--colour-changeType-selected) !important; color:black;";
    }
}

//点击换字体按钮后改变按钮颜色
function changeTypeMenu_switchColour(active, inactive) {
    let a = document.querySelector(active);
    a.style.cssText = "background-color: var(--colour-changeType-selected) !important; color:black";
    let b = document.querySelector(inactive);
    b.style.cssText = "background-color: var(--colour-changeType-unselected); color:white";


}

//按钮的换字体功能

// 分类换宋体
document.getElementById('changeTypeMenu-FenLei-SONG').onclick = function changefont_FenLei_SONG() {
    document.body.querySelectorAll("h2").forEach((e) => {
        e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
        e.style.fontWeight = "700";
    });//换中文
    // document.body.querySelectorAll(".Latin-ZhengWen").forEach((e) => {
    //     e.style.fontFamily = "'SERIF'" + "," + "Source Serif Pro";
    //     e.style.fontWeight = "400";
    //     e.style.fontSize = "1.05em";
    // });//换西文
    document.body.querySelectorAll("h2 h-char.bd-jiya.bd-open > h-inner, h2 h-char.bd-jiya.bd-close > h-inner, h2 h-char.bd-jiya.bd-cop > h-inner, h2 h-char.bd-jiya[unicode='ff0e'] > h-inner").forEach((e) => {
        e.style.fontFamily = "SONG-BiaoDian" + "," + "Noto Serif SC";
        e.style.fontWeight = "700";
    });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-FenLei-SONG", "#changeTypeMenu-FenLei-HEI");
}
//分类换黑体
document.getElementById('changeTypeMenu-FenLei-HEI').onclick = function changefont_FenLei_HEI() {
    document.body.querySelectorAll("h2").forEach((e) => {
        e.style.fontFamily = "HEI" + "," + "Noto Sans SC";
        e.style.fontWeight = "700";
    });//换中文
    // document.body.querySelectorAll(".Latin-ZhengWen").forEach((e) => {
    //     e.style.fontFamily = "SANS" + "," + "Source Sans Pro";
    //     e.style.fontWeight = "400";
    //     e.style.fontSize = "1.1em";
    // });//换西文
    document.body.querySelectorAll("h2 h-char.bd-jiya.bd-open > h-inner, h2 h-char.bd-jiya.bd-close > h-inner, h2 h-char.bd-jiya.bd-cop > h-inner, h2 h-char.bd-jiya[unicode='ff0e'] > h-inner").forEach((e) => {
        e.style.fontFamily = "HEI-BiaoDian" + "," + "Noto Sans SC";
        e.style.fontWeight = "700";
    });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-FenLei-HEI", "#changeTypeMenu-FenLei-SONG");
}

// 标题换宋体
document.getElementById('changeTypeMenu-BiaoTi-SONG').onclick = function changefont_BiaoTi_SONG() {
    document.body.querySelectorAll("ul,h3").forEach((e) => {
        e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
        e.style.fontWeight = "600";
    });//换中文
    document.body.querySelectorAll(".Latin-BiaoTi").forEach((e) => {
        e.style.fontFamily = "'SERIF'" + "," + "Source Serif Pro";
        e.style.fontWeight = "400";
        e.style.fontSize = "1.05em";
    });//换西文
    document.body.querySelectorAll("ul h-char.bd-jiya.bd-open > h-inner, ul h-char.bd-jiya.bd-close > h-inner, ul h-char.bd-jiya.bd-cop > h-inner, ul h-char.bd-jiya[unicode='ff0e'] > h-inner").forEach((e) => {
        e.style.cssText = "font-family: 'SONG-BiaoDian', 'Noto Serif SC' !important; font-weight: 600 !important;";
    });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-BiaoTi-SONG", "#changeTypeMenu-BiaoTi-HEI");
}
// 标题换黑体
document.getElementById('changeTypeMenu-BiaoTi-HEI').onclick = function changefont_BiaoTi_HEI() {
    document.body.querySelectorAll("ul,h3").forEach((e) => {
        e.style.fontFamily = "HEI" + "," + "Noto Sans SC";
        e.style.fontWeight = "400";
    });//换中文
    document.body.querySelectorAll(".Latin-BiaoTi").forEach((e) => {
        e.style.fontFamily = "SANS" + "," + "Source Sans Pro";
        e.style.fontWeight = "400";
        e.style.fontSize = "1.1em";
    });//换西文
    document.body.querySelectorAll("ul h-char.bd-jiya.bd-open > h-inner, ul h-char.bd-jiya.bd-close > h-inner, ul h-char.bd-jiya.bd-cop > h-inner, ul h-char.bd-jiya[unicode='ff0e'] > h-inner").forEach((e) => {
        e.style.cssText = "font-family: 'HEI-BiaoDian', 'Noto Sans SC' !important; font-weight: 400 !important;";
    });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-BiaoTi-HEI", "#changeTypeMenu-BiaoTi-SONG");
}

// 副题换宋体
document.getElementById('changeTypeMenu-FuTi-SONG').onclick = function changefont_FuTi_SONG() {
    document.body.querySelectorAll(".subtitle").forEach((e) => {
        e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
        e.style.fontWeight = "600";
    });//换中文
    document.body.querySelectorAll(".Latin-FuTi").forEach((e) => {
        e.style.fontFamily = "'SERIF'" + "," + "Source Serif Pro";
        e.style.fontWeight = "400";
        e.style.fontSize = "1.05em";
    });//换西文
    document.body.querySelectorAll(".subtitle h-char.bd-jiya.bd-open > h-inner, .subtitle h-char.bd-jiya.bd-close > h-inner, .subtitle h-char.bd-jiya.bd-cop > h-inner, .subtitle h-char.bd-jiya[unicode='ff0e'] > h-inner").forEach((e) => {
        e.style.cssText = "font-family: 'SONG-BiaoDian', 'Noto Serif SC' !important; font-weight: 600 !important;";
    });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-FuTi-SONG", "#changeTypeMenu-FuTi-HEI");
}
// 副题换黑体
document.getElementById('changeTypeMenu-FuTi-HEI').onclick = function changefont_FuTi_HEI() {
    document.body.querySelectorAll(".subtitle").forEach((e) => {
        e.style.fontFamily = "HEI" + "," + "Noto Sans SC";
        e.style.fontWeight = "400";
    });//换中文
    document.body.querySelectorAll(".Latin-FuTi").forEach((e) => {
        e.style.fontFamily = "SANS" + "," + "Source Sans Pro";
        e.style.fontWeight = "400";
        e.style.fontSize = "1.1em";
    });//换西文
    document.body.querySelectorAll(".subtitle h-char.bd-jiya.bd-open > h-inner, .subtitle h-char.bd-jiya.bd-close > h-inner, .subtitle h-char.bd-jiya.bd-cop > h-inner, .subtitle h-char.bd-jiya[unicode='ff0e'] > h-inner").forEach((e) => {
        e.style.cssText = "font-family: 'HEI-BiaoDian', 'Noto Sans SC' !important; font-weight: 400 !important;";
    });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-FuTi-HEI", "#changeTypeMenu-FuTi-SONG");

}


// 打开／关闭更换字体菜单
let button = document.getElementById("changeTypeMenu-Button");

button.onclick = function () {
    let menu = document.getElementById("changeTypeMenu");
    let menuVisibility = menu.style.visibility;
    let size = window.innerWidth;
    // if (size < 900) {
        if (menuVisibility == "hidden") {
            menu.style.visibility = "visible";
            menu.style.opacity = "1";
            menu.style.top = "70px";
        } else {
            menu.style.visibility = "hidden";
            menu.style.opacity = "0";
            menu.style.top = "60px";
        }
    // } else {
    //     if (menuVisibility == "hidden") {
    //         menu.style.visibility = "visible";
    //         menu.style.opacity = "1";
    //         menu.style.bottom = "65px";
    //     } else {
    //         menu.style.visibility = "hidden";
    //         menu.style.opacity = "0";
    //         menu.style.bottom = "55px";
    //     }
    // }
}

// 按照窗口尺寸自动适配字体菜单的位置
// function changeMenuPosition() {
//     let menu = document.getElementById("changeTypeMenu");
//     let menuVisibility = menu.style.visibility;
//     let size = window.innerWidth;
//     // console.log(size);
//     if (menuVisibility == "hidden") {
//         if (size < 900) {
//             menu.style.bottom = "auto";
//             menu.style.top = "60px";
//             menu.style.left = "auto";
//             menu.style.right = "15px";
//         } else {
//             menu.style.bottom = "55px";
//             menu.style.top = "auto";
//             menu.style.left = "10px";
//             menu.style.right = "auto";
//         }
//     } else {
//         if (size < 900) {
//             menu.style.bottom = "auto";
//             menu.style.top = "70px";
//             menu.style.left = "auto";
//             menu.style.right = "15px";
//         } else {
//             menu.style.bottom = "65px";
//             menu.style.top = "auto";
//             menu.style.left = "10px";
//             menu.style.right = "auto";
//         }
//     }
// }
// // 将事件侦听器函数附加到窗口的resize事件
// window.addEventListener("resize", changeMenuPosition);
// // 第一次调用该函数
// changeMenuPosition();

// 在小尺寸下让行长等于字号的整数倍
function chineseGridLine() {
    let YeMian = document.getElementById("whole");
    let size = window.innerWidth;
    let ZiShu = Math.floor(size / 22) - 1;
    let HangChang = ZiShu * 22
    if (size < 740) {
        // let HangChang = ZiShu * 20;
        YeMian.style.width = HangChang + "px";
    } else {
        YeMian.style.cssText = " ";
    }
}
window.addEventListener("resize", chineseGridLine);
chineseGridLine();



// 鼠标往下滚动时自动显示小logo
function additionalLogo() {
    let p = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(p);
    let windowWidth = window.innerWidth;
    let mask = document.getElementById("mask");
    
    let KuanDu1=1340;
    let KuanDu2=840;

    let KD1QiShi=440;
    let KD1JieShu=500;
    let KD1XiangCha=KD1JieShu-KD1QiShi;
    
    let KD2QiShi=380;
    let KD2JieShu=420;
    let KD2XiangCha=KD2JieShu-KD2QiShi;
    
    let KD3QiShi=310;
    let KD3JieShu=350;
    let KD3XiangCha=KD3JieShu-KD3QiShi;
    
    if (windowWidth > KuanDu1) {
        if (p >= KD1JieShu) {
            mask.style.opacity = 0;
        } else if (p >= KD1QiShi && p < KD1JieShu) {
            mask.style.opacity = (KD1JieShu - p) / KD1XiangCha;
        } else if (p < KD1QiShi) {
            mask.style.opacity = 1;
        }
    } else if (windowWidth > KuanDu2 && windowWidth <= KuanDu1) {
        if (p >= KD2JieShu) {
            mask.style.opacity = 0;
        } else if (p >= KD2QiShi && p < KD2JieShu) {
            mask.style.opacity = (KD2JieShu - p) / KD2XiangCha;
        } else if (p < KD2QiShi) {
            mask.style.opacity = 1;
        }
    } else if (windowWidth <= KuanDu2) {
        if (p >= KD3JieShu) {
            mask.style.opacity = 0;
        } else if (p >= KD3QiShi && p < KD3JieShu) {
            mask.style.opacity = (KD3JieShu - p) / KD3XiangCha;
        } else if (p < KD3QiShi) {
            mask.style.opacity = 1;
        }
    }
} 
window.onscroll = additionalLogo;
window.addEventListener("resize", additionalLogo);
additionalLogo();