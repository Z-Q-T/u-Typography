// Copyright (c) [2022] [Zhang Qingtian (张擎天) | u-Typography.site]
// [u-Typography.js] is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//        http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
// EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
// MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.



// 初始的字体选择高亮
function changeTypeMenu_initialActive() {
    let initial = ['changeTypeMenu-BiaoTi-SONG', 'changeTypeMenu-ZhengWen-HEI', 'changeTypeMenu-BianZhu-HEI'];
    for (let i = 0; i < initial.length; i++) {
        document.getElementById(initial[i]).style.cssText = "background-color: var(--colour-changeType-selected) !important; color:black;";
    }
    //下面是设定初始的西文字体
    document.body.querySelectorAll("h1 > .Latin, h2 > .Latin, h3 > .Latin, #tableOfContent li .Latin").forEach((e) => {
        e.style.fontFamily = "var(--font-serif)";
        e.style.fontWeight = "600";
        e.style.fontSize = "1.05em";
    });
    document.body.querySelectorAll("p > .Latin, p > a .Latin, p > cite > .Latin, p > cite > a > .Latin, p > q > .Latin, p > small .Latin, p > a > small .Latin, p > small > a .Latin, p > .orderedListIndex .Latin").forEach((e) => {
        e.style.fontFamily = "var(--font-sans)";
        e.style.fontWeight = "400";
        e.style.fontSize = "1.1em";
    });
    document.body.querySelectorAll(".sideNote > .Latin, .TuTi .Latin, .TuZhu .Latin").forEach((e) => {
        e.style.fontFamily = "var(--font-sans)";
        e.style.fontWeight = "400";
        e.style.fontSize = "1.1em";
    });
    // document.body.querySelectorAll(".TuTi .Latin").forEach((e) => {
    //     e.style.fontFamily = "var(--font-serif)";
    //     e.style.fontWeight = "400";
    //     e.style.fontSize = "1.05em";})
}

//点击换字体按钮后改变按钮颜色
function changeTypeMenu_switchColour(active, inactive) {
    let a = document.querySelector(active);
    a.style.cssText = "background-color: var(--colour-changeType-selected) !important; color:black";
    let b = document.querySelector(inactive);
    b.style.cssText = "background-color: var(--colour-changeType-unselected); color:white";


}

//按钮的换字体功能

// 标题换宋体
document.getElementById('changeTypeMenu-BiaoTi-SONG').onclick = function changefont_BiaoTi_SONG() {
    document.body.querySelectorAll("h1,h2,h3,#tableOfContent li").forEach((e) => {
        e.style.fontFamily = "var(--font-song)";
        e.style.fontWeight = "700";
    });//换中文
    document.body.querySelectorAll("h1 > .Latin, h2 > .Latin, h3 > .Latin, #tableOfContent li .Latin").forEach((e) => {
        e.style.fontFamily = "var(--font-serif)";
        e.style.fontWeight = "600";
        e.style.fontSize = "1.05em";
    });//换西文
    // document.body.querySelectorAll("h1 h-char.bd-jiya.bd-open > h-inner, h1 h-char.bd-jiya.bd-close > h-inner, h1 h-char.bd-jiya.bd-cop > h-inner, h1 h-char.bd-jiya[unicode='ff0e'] > h-inner").forEach((e) => {
    document.body.querySelectorAll("h1 h-char.biaodian > h-inner, h2 h-char.biaodian > h-inner, h3 h-char.biaodian > h-inner, #tableOfContent li h-char.biaodian > h-inner").forEach((e) => {
        e.style.cssText = "font-family: var(--font-song-biaodian) !important; font-weight: 700 !important;";
    });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-BiaoTi-SONG", "#changeTypeMenu-BiaoTi-HEI");
}
// 标题换黑体
document.getElementById('changeTypeMenu-BiaoTi-HEI').onclick = function changefont_BiaoTi_HEI() {
    document.body.querySelectorAll("h1,h2,h3,#tableOfContent li").forEach((e) => {
        e.style.fontFamily = "var(--font-hei)";
        e.style.fontWeight = "700";
    });//换中文
    document.body.querySelectorAll("h1 > .Latin, h2 > .Latin, h3 > .Latin, #tableOfContent li .Latin").forEach((e) => {
        e.style.fontFamily = "var(--font-sans)";
        e.style.fontWeight = "600";
        e.style.fontSize = "1.1em";
    });//换西文
    document.body.querySelectorAll("h1 h-char.biaodian > h-inner, h2 h-char.biaodian > h-inner, h3 h-char.biaodian > h-inner, #tableOfContent li h-char.biaodian > h-inner").forEach((e) => {
        e.style.cssText = "font-family: var(--font-hei-biaodian) !important; font-weight: 700 !important;";
    });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-BiaoTi-HEI", "#changeTypeMenu-BiaoTi-SONG");

}
// 正文换宋体
document.getElementById('changeTypeMenu-ZhengWen-SONG').onclick = function changefont_ZhengWen_SONG() {
    document.body.querySelectorAll("p,table").forEach((e) => {
        // e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
        e.style.fontFamily = "var(--font-song)";
        e.style.fontWeight = "600";
    })
    document.body.querySelectorAll("p > strong").forEach((e) => {
        e.style.fontFamily = "'TeShuBiaoDian', var(--font-song)";
        e.style.fontWeight = "600";
    });
    document.body.querySelectorAll("th").forEach((e) => {
        // e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
        e.style.fontFamily = "var(--font-song)";
        e.style.fontWeight = "700";
    })//换中文
    document.body.querySelectorAll("p > .Latin, p > a .Latin, p > cite > .Latin, p > cite > a > .Latin, p > q > .Latin, p > .orderedListIndex .Latin, table .Latin").forEach((e) => {
        e.style.fontFamily = "var(--font-serif)";
        e.style.fontWeight = "400";
        e.style.fontSize = "1.05em";
    });//换西文
    document.body.querySelectorAll("article h-char.biaodian > h-inner").forEach((e) => {
        e.style.fontFamily = "var(--font-song-biaodian)";
        e.style.fontWeight = "600";
    });
    document.body.querySelectorAll("article .JianGeHao h-char.biaodian > h-inner").forEach((e) => {
        e.style.fontFamily = "var(--font-hei-biaodian)";
        e.style.fontWeight = "400";
    });
    //换标点
    document.body.querySelectorAll(".sideNoteMark h-inner").forEach((e) => {
        e.style.fontFamily = "var(--font-hei-biaodian)";
        e.style.fontWeight = "400";
    });//边注编号不换字体
    changeTypeMenu_switchColour("#changeTypeMenu-ZhengWen-SONG", "#changeTypeMenu-ZhengWen-HEI");
}
//正文换黑体
document.getElementById('changeTypeMenu-ZhengWen-HEI').onclick = function changefont_ZhengWen_HEI() {
    document.body.querySelectorAll("p, table").forEach((e) => {
        e.style.fontFamily = "var(--font-hei)";
        e.style.fontWeight = "400";
    });
    document.body.querySelectorAll("p > strong").forEach((e) => {
        e.style.fontFamily = "'TeShuBiaoDian', var(--font-hei)";
        e.style.fontWeight = "400";
    });
    document.body.querySelectorAll("th").forEach((e) => {
        // e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
        e.style.fontFamily = "var(--font-hei)";
        e.style.fontWeight = "600";
    })//换中文
    document.body.querySelectorAll("p > .Latin, p > a .Latin, p > cite > .Latin, p > cite > a > .Latin, p > q > .Latin, p > .orderedListIndex .Latin, table .Latin").forEach((e) => {
        e.style.fontFamily = "var(--font-sans)";
        e.style.fontWeight = "400";
        e.style.fontSize = "1.1em";
    });//换西文
    document.body.querySelectorAll("article h-char.biaodian > h-inner").forEach((e) => {
        e.style.fontFamily = "var(--font-hei-biaodian)";
        e.style.fontWeight = "400";
    });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-ZhengWen-HEI", "#changeTypeMenu-ZhengWen-SONG");
}
//边注换宋体
document.getElementById('changeTypeMenu-BianZhu-SONG').onclick = function changefont_BianZhu_SONG() {
    document.body.querySelectorAll(".sideNote, .TuTi, .TuZhu").forEach((e) => {
        e.style.fontFamily = "var(--font-song)";
        e.style.fontWeight = "600";
    });//换中文
    document.body.querySelectorAll(".sideNote > .Latin, .TuTi .Latin, .TuZhu .Latin").forEach((e) => {
        e.style.fontFamily = "var(--font-serif)";
        e.style.fontWeight = "400";
        e.style.fontSize = "1.05em";
    });//换西文
    document.body.querySelectorAll(".sideNote h-char.biaodian > h-inner, .TuTi h-char.biaodian > h-inner, .TuZhu h-char.biaodian > h-inner").forEach((e) => {
        e.style.cssText = "font-family: var(--font-song-biaodian) !important; font-weight: 600 !important;"
    });//换标点
    document.body.querySelectorAll(".tabulation h-inner").forEach((e) => {
        e.style.fontFamily = "var(--font-hei-biaodian)";
        e.style.fontWeight = "400";
    });//边注编号不换字体
    changeTypeMenu_switchColour("#changeTypeMenu-BianZhu-SONG", "#changeTypeMenu-BianZhu-HEI");
}
//边注换黑体
document.getElementById('changeTypeMenu-BianZhu-HEI').onclick = function changefont_BianZhu_HEI() {
    document.body.querySelectorAll(".sideNote, .TuTi, .TuZhu").forEach((e) => {
        e.style.fontFamily = "var(--font-hei)";
        e.style.fontWeight = "400";
    });//换中文
    document.body.querySelectorAll(".sideNote > .Latin, .TuTi .Latin, .TuZhu .Latin").forEach((e) => {
        e.style.fontFamily = "var(--font-sans)";
        e.style.fontWeight = "400";
        e.style.fontSize = "1.1em";
    });//换西文
    document.body.querySelectorAll(".sideNote h-char.biaodian > h-inner, .TuTi h-char.biaodian > h-inner, .TuZhu h-char.biaodian > h-inner").forEach((e) => {
        e.style.cssText = "font-family: var(--font-hei-biaodian) !important; font-weight: 400 !important;"
    });//换标点
    changeTypeMenu_switchColour("#changeTypeMenu-BianZhu-HEI", "#changeTypeMenu-BianZhu-SONG");
}

// 打开／关闭更换字体菜单
let button = document.getElementById("changeTypeMenu-Button");
button.onclick = function () {
    let menu = document.getElementById("changeTypeMenu");
    let menuVisibility = menu.style.visibility;
    let windowWidth = window.innerWidth;
    if (windowWidth < 1040) {
        if (menuVisibility == "hidden") {
            menu.style.visibility = "visible";
            menu.style.opacity = "1";
            menu.style.top = "70px";
        } else {
            menu.style.visibility = "hidden";
            menu.style.opacity = "0";
            menu.style.top = "60px";
        }
    } else {
        if (menuVisibility == "hidden") {
            menu.style.visibility = "visible";
            menu.style.opacity = "1";
            menu.style.left = "70px";
        } else {
            menu.style.visibility = "hidden";
            menu.style.opacity = "0";
            menu.style.left = "60px";
        }
    }
}

// 按照窗口尺寸自动适配字体菜单的位置
function changeMenuPosition() {
    let menu = document.getElementById("changeTypeMenu");
    let menuVisibility = menu.style.visibility;
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if (menuVisibility == "hidden") {
        if (windowWidth < 1040) {
            menu.style.bottom = "auto";
            menu.style.top = "60px";
            menu.style.left = "auto";
            menu.style.right = "15px";
        } else {
            menu.style.bottom = "15px";
            menu.style.top = "auto";
            menu.style.left = "60px";
            menu.style.right = "auto";
        }
    } else {
        if (windowWidth < 1040) {
            menu.style.bottom = "auto";
            menu.style.top = "70px";
            menu.style.left = "auto";
            menu.style.right = "15px";
        } else {
            menu.style.bottom = "15px";
            menu.style.top = "auto";
            menu.style.left = "70px";
            menu.style.right = "auto";
        }
    }
}
// 将事件侦听器函数附加到窗口的resize事件
window.addEventListener("resize", changeMenuPosition);
// 第一次调用该函数
changeMenuPosition();


// 打开／关闭文章目录
let toc = document.getElementById("toc-Container");
let switcher = document.getElementById("toc-Switcher");
let switcherOnOff = "off";
let arrow = document.getElementById("tocSwitcher-ButtonSVG");
if (switcher && arrow) {
    switcher.onclick = function () {
        // let toc = document.getElementById("toc-Container");
        let windowWidth = window.innerWidth;
        // let arrow = document.getElementById("tocSwitcher-ButtonSVG");
        // let tocOpacity = toc.style.opacity;
        if (switcherOnOff == "off") {
            if (windowWidth > 1400) {
                // toc.style.visibility = "visible";
                toc.style.opacity = "1";
                toc.style.top = "0";
                toc.style.left = "0";
                toc.style.width = "18rem";
                toc.style.height = "100px";
            } else if (windowWidth <= 1400 && windowWidth > 1040) {
                // toc.style.visibility = "visible";
                toc.style.opacity = "1";
                toc.style.top = "0";
                toc.style.left = "3rem";
                toc.style.width = "15rem";
                toc.style.height = "100%";
                arrow.style.transform = "rotateZ(-270deg)"

            } else {
                // toc.style.visibility = "visible";
                toc.style.opacity = "1";
                toc.style.top = "3rem";
                toc.style.left = "0";
                toc.style.width = "100%";
                toc.style.height = "calc(80% - 3rem)";
                arrow.style.transform = "rotateZ(180deg)"
            }
            switcherOnOff = "on";
        } else if (switcherOnOff == "on") {
            if (windowWidth > 1400) {
                toc.style.opacity = "1";
                toc.style.top = "0";
                toc.style.left = "0";
                toc.style.width = "18rem";
                toc.style.height = "100px";
            } else if (windowWidth <= 1400 && windowWidth > 1040) {
                toc.style.opacity = "0.1";
                toc.style.top = "0";
                toc.style.left = "-12rem";
                toc.style.width = "15rem";
                toc.style.height = "100%";
                arrow.style.transform = "rotateZ(-90deg)"
            } else {
                toc.style.opacity = "0.1";
                toc.style.top = "-90%";
                toc.style.left = "0";
                toc.style.width = "100%";
                toc.style.height = "calc(80% - 3rem)";
                arrow.style.transform = "rotateZ(0deg)"
            }
            switcherOnOff = "off";
        }
        console.log(switcherOnOff);
    }
}
// 按照窗口尺寸自动适配文章目录的位置
function changeTocPosition() {
    // let toc = document.getElementById("toc-Container");
    let windowWidth = window.innerWidth;
    // console.log(size);
    if (arrow) {
        if (windowWidth > 1400) {
            toc.style.opacity = "1";
            toc.style.top = "0";
            toc.style.left = "0";
            toc.style.width = "18rem";
            toc.style.height = "100px";
        } else if (windowWidth <= 1400 && windowWidth > 1040) {
            if (switcherOnOff == "on") {
                toc.style.opacity = "1";
                toc.style.top = "0";
                toc.style.left = "3rem";
                toc.style.width = "15rem";
                toc.style.height = "100%";
                arrow.style.transform = "rotateZ(-270deg)"
            } else if (switcherOnOff == "off") {
                toc.style.opacity = "0.1";
                toc.style.top = "0";
                toc.style.left = "-12rem";
                toc.style.width = "15rem";
                toc.style.height = "100%";
                arrow.style.transform = "rotateZ(-90deg)"
            }
        } else if (windowWidth <= 1040) {
            if (switcherOnOff == "on") {
                toc.style.opacity = "1";
                toc.style.top = "3rem";
                toc.style.left = "0";
                toc.style.width = "100%";
                toc.style.height = "calc(80% - 3rem)";
                arrow.style.transform = "rotateZ(180deg)"
            } else if (switcherOnOff == "off") {
                toc.style.opacity = "0.1";
                toc.style.top = "-90%";
                toc.style.left = "0";
                toc.style.width = "100%";
                arrow.style.transform = "rotateZ(0deg)"
                toc.style.height = "calc(80% - 3rem)";
            }
        }
    }
}
// 将事件侦听器函数附加到窗口的resize事件
window.addEventListener("resize", changeTocPosition);
// 第一次调用该函数
changeTocPosition();
// 点击目录项后自动关闭目录
window.onclick = function (e) {
    console.log(e);
    if (e.target.matches('.tocH2 a') || e.target.matches('.tocH3 a') || e.target.matches('.tocH2 a span') || e.target.matches('.tocH3 a span') || e.target.matches('.tocH2 .biaodian') || e.target.matches('.tocH3 .biaodian') || e.target.matches('.tocH2 h-inner') || e.target.matches('.tocH3 h-inner') || e.target.matches('#toc-backToMainTitle a') || e.target.matches('#toc-skipToFootnote a')) {
        let windowWidth = window.innerWidth;
        // let arrow = document.getElementById("tocSwitcher-ButtonSVG");
        if (arrow) {
            if (windowWidth > 1400) {
                toc.style.opacity = "1";
                toc.style.top = "0";
                toc.style.left = "0";
                toc.style.width = "18rem";
                toc.style.height = "100px";
            } else if (windowWidth < 1400 && windowWidth > 1040) {
                toc.style.opacity = "0.1";
                toc.style.top = "0";
                toc.style.left = "-12rem";
                toc.style.width = "15rem";
                toc.style.height = "100%";
                arrow.style.transform = "rotateZ(-90deg)"
            } else {
                toc.style.opacity = "0.1";
                toc.style.top = "-90%";
                toc.style.left = "0";
                toc.style.width = "100%";
                toc.style.height = "calc(80% - 3rem)";
                arrow.style.transform = "rotateZ(0deg)"
            }
            switcherOnOff = "off";
        }
    }
}



// 在小尺寸下让行长等于字号的整数倍
function chineseGridLine() {
    let YeMian = document.getElementById("whole");
    let windowWidth = window.innerWidth;
    let ZiShu = Math.floor(windowWidth / 20) - 1;
    if (windowWidth < 680) {
        // let HangChang = ZiShu * 20;
        YeMian.style.width = ZiShu + "em";
    } else {
        YeMian.style.cssText = " ";
    }
}
window.addEventListener("resize", chineseGridLine);
chineseGridLine();
// if (document.documentElement.scrollWidth >680){
//     menu.style.bottom="0px";
// }
// window.addEventListener('load', function () {
//     console.log(window.innerWidth);
//     window.addEventListener('resize', function () {
//         console.log(window.innerWidth);
//     })
// })

window.onclick = function (e) {
    let fullScreen = false;
    let container;
    let image;
    console.log(e);
    if (e.target.matches('figure img')) {
        let a = document.querySelector("article");
        a.insertAdjacentHTML('beforeend', '<div id="fullScreenImageContainer"></div><img id="originalSizeImage" src="">');
        container = document.querySelector('#fullScreenImageContainer');
        // container.style.transition = "opacity 200ms ease-in-out";
        image = document.getElementById("originalSizeImage");
        let src = e.target.getAttribute("src");
        image.setAttribute("src", src);
        let transitAnimation = function () {
            container.style.opacity = "0.8";
            image.style.opacity = "1";
            image.style.transform = "translate(-50%, -50%) scale(100%, 100%)";
        }
        // el.style.opacity = "1";
        setTimeout(transitAnimation, 1);
        // let transform = function () {
        // }
        // setTimeout(transform, 1);
    } else if (e.target.matches('#fullScreenImageContainer') || e.target.matches('#originalSizeImage')) {
        container = document.querySelector('#fullScreenImageContainer');
        image = document.getElementById("originalSizeImage");
        image.remove();
        container.remove();
    }
}
    // document.body.querySelectorAll("figure img").forEach((e) => {
    //     e.onclick = function resizingImage() {

    //         fullScreen = true;
    //         console.log(el);
    //     }

    // });

    // el.onclick = function resumeImage() {
    //     fullScreen = false;
    // }



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
