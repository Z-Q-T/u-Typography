// Copyright (c) [2023] [Zhang Qingtian (张擎天) | u-Typography.site]
// [u-Typography-index.js] is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//        http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
// EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
// MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.

// 换字体的函数
function HuanZiTi(pageElements, targetType, typeWeight, typeSize){
	document.body.querySelectorAll(pageElements).forEach((e) => {
        e.style.fontFamily = targetType;
        e.style.fontWeight = typeWeight;
        e.style.fontSize = typeSize;
    });
}
let FenLei_ZhongWen="h2, .contentMenuList";
let FenLei_XiWen="";
let FenLei_BiaoDian="h2 h-char.biaodian > h-inner, .contentMenuList h-char.biaodian > h-inner";

let ZhuTi_ZhongWen="ul,h3";
let ZhuTi_XiWen="section .listContainer .Latin";
let ZhuTi_BiaoDian="section .listContainer h-char.biaodian > h-inner";

let FuTi_ZhongWen=".subtitle";
let FuTi_XiWen=".subtitle .Latin";
let FuTi_BiaoDian=".subtitle h-char.biaodian > h-inner";

let BuHuanZiTiDeBiaoDian=".PoZheHao h-char h-inner, .YiZiXian, .BanZiXian, .FenGeHao h-char h-inner, .JianGeHao h-char h-inner";


// //破折号、一字线、半字线、分隔号、间隔号始终保持自制宋体
// function BiaoDianBuHuan(){
// 	HuanZiTi(BuHuanZiTiDeBiaoDian,"var(--font-song-biaodian)","400","");
// }


// 初始的字体选择高亮并设定西文字体
function changeTypeMenu_initialActive() {
    let initial = ['changeTypeMenu-ZhuTi-SONG', 'changeTypeMenu-FenLei-SONG', 'changeTypeMenu-FuTi-HEI'];
    for (let i = 0; i < initial.length; i++) {
        document.getElementById(initial[i]).style.cssText = "background-color: var(--colour-changeType-selected) !important; color:black;";
    }
    //下面是设定初始的西文字体
	// HuanZiTi(FenLei_XiWen,"var(--font-serif)","600","1.05em");
	HuanZiTi(ZhuTi_XiWen,"var(--font-serif)","400","1.05em");
	HuanZiTi(FuTi_XiWen,"var(--font-sans)","400","1.1em");
    // document.body.querySelectorAll("h1 > .Latin, h2 > .Latin, h3 > .Latin, #tableOfContent li > .Latin").forEach((e) => {
    //     e.style.fontFamily = "var(--font-serif)";
    //     e.style.fontWeight = "600";
    //     e.style.fontSize = "1.05em";
    // });
    // document.body.querySelectorAll("section .listContainer .Latin").forEach((e) => {
    //     e.style.fontFamily = "var(--font-serif)";
    //     e.style.fontWeight = "400";
    //     e.style.fontSize = "1.05em";
    // });
    // document.body.querySelectorAll(".subtitle .Latin").forEach((e) => {
    //     e.style.fontFamily = "var(--font-sans)";
    //     e.style.fontWeight = "400";
    //     e.style.fontSize = "1.1em";
    // });
}

//点击换字体按钮后改变按钮颜色
function changeTypeMenu_switchColour(active, inactive) {
    let a = document.querySelector(active);
    a.style.cssText = "background-color: var(--colour-changeType-selected) !important; color:black";
    let b = document.querySelector(inactive);
    b.style.cssText = "background-color: var(--colour-changeType-unselected); color:white";


}

//————————按钮的换字体功能————————

// 分类换宋体
document.getElementById('changeTypeMenu-FenLei-SONG').onclick = function changefont_FenLei_SONG() {
	HuanZiTi(FenLei_ZhongWen,"var(--font-song)","700","");
	// HuanZiTi(FenLei_XiWen,"var(--font-serif)","600","1.05em");
	HuanZiTi(FenLei_BiaoDian,"var(--font-song-biaodian)","700","");
    // document.body.querySelectorAll("h2, .contentMenuList").forEach((e) => {
    //     e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
    //     e.style.fontWeight = "700";
    // });//换中文
    // // document.body.querySelectorAll(".Latin-ZhengWen").forEach((e) => {
    // //     e.style.fontFamily = "'SERIF'" + "," + "Source Serif Pro";
    // //     e.style.fontWeight = "400";
    // //     e.style.fontSize = "1.05em";
    // // });//换西文
    // document.body.querySelectorAll("h2 h-char.biaodian > h-inner, .contentMenuList h-char.biaodian > h-inner").forEach((e) => {
    //     e.style.fontFamily = "SONG-BiaoDian" + "," + "Noto Serif SC";
    //     e.style.fontWeight = "700";
    // });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-FenLei-SONG", "#changeTypeMenu-FenLei-HEI");
}
//分类换黑体
document.getElementById('changeTypeMenu-FenLei-HEI').onclick = function changefont_FenLei_HEI() {
	HuanZiTi(FenLei_ZhongWen,"var(--font-hei)","700","");
	// HuanZiTi(FenLei_XiWen,"var(--font-serif)","600","1.05em");
	HuanZiTi(FenLei_BiaoDian,"var(--font-hei-biaodian)","700","");
    // document.body.querySelectorAll("h2, .contentMenuList").forEach((e) => {
    //     e.style.fontFamily = "HEI" + "," + "Noto Sans SC";
    //     e.style.fontWeight = "700";
    // });//换中文
    // // document.body.querySelectorAll(".Latin-ZhengWen").forEach((e) => {
    // //     e.style.fontFamily = "SANS" + "," + "Source Sans Pro";
    // //     e.style.fontWeight = "400";
    // //     e.style.fontSize = "1.1em";
    // // });//换西文
    // document.body.querySelectorAll("h2 h-char.biaodian > h-inner, .contentMenuList h-char.biaodian > h-inner").forEach((e) => {
    //     e.style.fontFamily = "HEI-BiaoDian" + "," + "Noto Sans SC";
    //     e.style.fontWeight = "700";
    // });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-FenLei-HEI", "#changeTypeMenu-FenLei-SONG");
}

// 主题换宋体
document.getElementById('changeTypeMenu-ZhuTi-SONG').onclick = function changefont_BiaoTi_SONG() {
	HuanZiTi(ZhuTi_ZhongWen,"var(--font-song)","600","");
	HuanZiTi(ZhuTi_XiWen,"var(--font-serif)","400","1.05em");
	HuanZiTi(ZhuTi_BiaoDian,"var(--font-song-biaodian)","600","");
    // document.body.querySelectorAll("ul,h3").forEach((e) => {
    //     e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
    //     e.style.fontWeight = "600";
    // });//换中文
    // document.body.querySelectorAll("section .listContainer .Latin").forEach((e) => {
    //     e.style.fontFamily = "'SERIF'" + "," + "Source Serif Pro";
    //     e.style.fontWeight = "400";
    //     e.style.fontSize = "1.05em";
    // });//换西文
    // document.body.querySelectorAll("ul h-char.biaodian > h-inner").forEach((e) => {
    //     e.style.cssText = "font-family: 'SONG-BiaoDian', 'Noto Serif SC' !important; font-weight: 600 !important;";
    // });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-ZhuTi-SONG", "#changeTypeMenu-ZhuTi-HEI");
}
// 主题换黑体
document.getElementById('changeTypeMenu-ZhuTi-HEI').onclick = function changefont_BiaoTi_HEI() {
	HuanZiTi(ZhuTi_ZhongWen,"var(--font-hei)","400","");
	HuanZiTi(ZhuTi_XiWen,"var(--font-sans)","400","1.1em");
	HuanZiTi(ZhuTi_BiaoDian,"var(--font-hei-biaodian)","400","");
    // document.body.querySelectorAll("ul,h3").forEach((e) => {
    //     e.style.fontFamily = "HEI" + "," + "Noto Sans SC";
    //     e.style.fontWeight = "400";
    // });//换中文
    // document.body.querySelectorAll("section .listContainer .Latin").forEach((e) => {
    //     e.style.fontFamily = "SANS" + "," + "Source Sans Pro";
    //     e.style.fontWeight = "400";
    //     e.style.fontSize = "1.1em";
    // });//换西文
    // document.body.querySelectorAll("ul h-char.biaodian > h-inner").forEach((e) => {
    //     e.style.cssText = "font-family: 'HEI-BiaoDian', 'Noto Sans SC' !important; font-weight: 400 !important;";
    // });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-ZhuTi-HEI", "#changeTypeMenu-ZhuTi-SONG");
}

// 副题换宋体
document.getElementById('changeTypeMenu-FuTi-SONG').onclick = function changefont_FuTi_SONG() {
	HuanZiTi(FuTi_ZhongWen,"var(--font-song)","600","");
	HuanZiTi(FuTi_XiWen,"var(--font-serif)","400","1.05em");
	HuanZiTi(FuTi_BiaoDian,"var(--font-song-biaodian)","600","");
    // document.body.querySelectorAll(".subtitle").forEach((e) => {
    //     e.style.fontFamily = "SONG" + "," + "Noto Serif SC";
    //     e.style.fontWeight = "600";
    // });//换中文
    // document.body.querySelectorAll(".subtitle .Latin").forEach((e) => {
    //     e.style.fontFamily = "'SERIF'" + "," + "Source Serif Pro";
    //     e.style.fontWeight = "400";
    //     e.style.fontSize = "1.05em";
    // });//换西文
    // document.body.querySelectorAll(".subtitle h-char.biaodian > h-inner").forEach((e) => {
    //     e.style.cssText = "font-family: 'SONG-BiaoDian', 'Noto Serif SC' !important; font-weight: 600 !important;";
    // });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-FuTi-SONG", "#changeTypeMenu-FuTi-HEI");
}
// 副题换黑体
document.getElementById('changeTypeMenu-FuTi-HEI').onclick = function changefont_FuTi_HEI() {
	HuanZiTi(FuTi_ZhongWen,"var(--font-hei)","400","");
	HuanZiTi(FuTi_XiWen,"var(--font-sans)","400","1.1em");
	HuanZiTi(FuTi_BiaoDian,"var(--font-hei-biaodian)","400","");
    // document.body.querySelectorAll(".subtitle").forEach((e) => {
    //     e.style.fontFamily = "HEI" + "," + "Noto Sans SC";
    //     e.style.fontWeight = "400";
    // });//换中文
    // document.body.querySelectorAll(".subtitle .Latin").forEach((e) => {
    //     e.style.fontFamily = "SANS" + "," + "Source Sans Pro";
    //     e.style.fontWeight = "400";
    //     e.style.fontSize = "1.1em";
    // });//换西文
    // document.body.querySelectorAll(".subtitle h-char.biaodian > h-inner").forEach((e) => {
    //     e.style.cssText = "font-family: 'HEI-BiaoDian', 'Noto Sans SC' !important; font-weight: 400 !important;";
    // });//换标点

    changeTypeMenu_switchColour("#changeTypeMenu-FuTi-HEI", "#changeTypeMenu-FuTi-SONG");

}


// 打开／关闭更换字体菜单
let typeButton = document.getElementById("changeTypeMenu-Button");
typeButton.onclick = function () {
    let menu = document.getElementById("changeTypeMenu");
    let menuVisibility = menu.style.visibility;
    // let size = window.innerWidth;
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
// 打开／关闭分类目录菜单
let menuButton = document.getElementById("contentMenu-Button");
menuButton.onclick = function () {
    let menu = document.getElementById("contentMenu");
    let menuVisibility = menu.style.visibility;
    // console.log(menu);
    if (menuVisibility == "hidden") {
        menu.style.visibility = "visible";
        menu.style.opacity = "1";
        menu.style.top = "65px";
    } else {
        menu.style.visibility = "hidden";
        menu.style.opacity = "0";
        menu.style.top = "55px";
    }
}


// 点击分类目录菜单项后自动关闭目录
window.addEventListener("click", closeMenuAfterClick, false);
function closeMenuAfterClick(e){
// window.onclick = function (e) {
    console.log(e);
    if (e.target.matches('#contentMenu a') || e.target.matches('#contentMenu span')) {
        // 下面是直接用上面的代码的
        let menu = document.getElementById("contentMenu");
        let menuVisibility = menu.style.visibility;
        if (menuVisibility == "hidden") {
            menu.style.visibility = "visible";
            menu.style.opacity = "1";
            menu.style.top = "65px";
        } else {
            menu.style.visibility = "hidden";
            menu.style.opacity = "0";
            menu.style.top = "55px";
        }
    }
}


// 在小尺寸下让行长等于字号的整数倍
function chineseGridLine() {
    let YeMian = document.getElementById("whole");
    let bodyWidth = document.body.offsetWidth;
    // let size = window.innerWidth;
    let ZiShu = Math.floor(bodyWidth / 22) - 1;
    let HangChang = ZiShu * 22
    if (bodyWidth < 740) {
        // let HangChang = ZiShu * 20;
        YeMian.style.width = HangChang + "px";
    } else {
        YeMian.style.cssText = " ";
    }
}
window.visualViewport.addEventListener("resize", chineseGridLine);
chineseGridLine();



// 鼠标往下滚动时自动显示小logo
function additionalLogo() {
    let p = document.documentElement.scrollTop;// || document.body.scrollTop;
    console.log(p);
    let windowWidth = window.innerWidth;
    // let mask1 = document.getElementById("mask1");
    let mask2 = document.getElementById("mask2");

    let KuanDu1 = 1340;
    let KuanDu2 = 840;

    let KD1QiShi = 480;
    let KD1JieShu = 780;
    let KD1XiangCha = KD1JieShu - KD1QiShi;

    let KD2QiShi = 410;
    let KD2JieShu = 660;
    let KD2XiangCha = KD2JieShu - KD2QiShi;

    let KD3QiShi = 340;
    let KD3JieShu = 540;
    let KD3XiangCha = KD3JieShu - KD3QiShi;

    // function additionalLogoHidden() {
    //     mask1.style.opacity = 1;
    //     mask2.style.opacity = 1;
    // }
    // function additionalLogoAppearing(JieShu, XiangCha) {
    //     mask1.style.opacity = (JieShu - p) / XiangCha;
    //     mask2.style.opacity = ((JieShu - p) / XiangCha) ** 3;
    // }
    // function additionalLogoVisible() {
    //     mask1.style.opacity = 0;
    //     mask2.style.opacity = 0;
    // }
    if (windowWidth > KuanDu1) {
        if (p < KD1QiShi) {
            // additionalLogoHidden;
            // mask1.style.opacity = 1;
            mask2.style.opacity = 1;
        } else if (p >= KD1QiShi && p < KD1JieShu) {
            // additionalLogoAppearing(KD1JieShu, KD1XiangCha);
            // mask1.style.opacity = (KD1JieShu - p) / KD1XiangCha;
            mask2.style.opacity = ((KD1JieShu - p) / KD1XiangCha) ** 3;
        } else if (p >= KD1JieShu) {
            // additionalLogoVisible;
            // mask1.style.opacity = 0;
            mask2.style.opacity = 0;
        }
    } else if (windowWidth > KuanDu2 && windowWidth <= KuanDu1) {
        if (p < KD2QiShi) {
            // mask1.style.opacity = 1;
            mask2.style.opacity = 1;
        } else if (p >= KD2QiShi && p < KD2JieShu) {
            // mask1.style.opacity = (KD2JieShu - p) / KD2XiangCha;
            mask2.style.opacity = ((KD2JieShu - p) / KD2XiangCha) ** 3;
        } else if (p >= KD2JieShu) {
            // mask1.style.opacity = 0;
            mask2.style.opacity = 0;
        }
    } else if (windowWidth <= KuanDu2) {
        if (p < KD3QiShi) {
            // mask1.style.opacity = 1;
            mask2.style.opacity = 1;
        } else if (p >= KD3QiShi && p < KD3JieShu) {
            // mask1.style.opacity = (KD3JieShu - p) / KD3XiangCha;
            mask2.style.opacity = ((KD3JieShu - p) / KD3XiangCha) ** 3;
        } else if (p >= KD3JieShu) {
            // mask1.style.opacity = 0;
            mask2.style.opacity = 0;
        }
    }
}
// window.onscroll = additionalLogo;
// window.addEventListener("resize", additionalLogo);
// additionalLogo();