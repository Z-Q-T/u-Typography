// Copyright (c) [2023] [Zhang Qingtian (张擎天) | u-typography.blog]
// [u-Typography-*-additional.js] is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//        http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
// EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
// MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.


let gridButton = document.getElementById("pageTypography-Button");

gridButton.onclick = function () {
    let grid = document.getElementById("grid");
    let gridVisibility = grid.style.visibility;
    if (gridVisibility == "hidden") {
        grid.style.visibility = "visible";
        grid.style.opacity = "1";
    } else {
        grid.style.visibility = "hidden";
        grid.style.opacity = "0";
    }

}

// 让网格自动调整到页面宽度
function gridLineDisplay() {
    // let YeMian = document.getElementById("whole");
    let WangGeZheZhao = document.getElementById("gridMask");
    let size = window.innerWidth;
    let ZiShu = Math.floor(size / 20) - 2;
    if (size < 680) {
        if (ZiShu <= 27) {
            // let HangChang = ZiShu * 20;
            // YeMian.style.width = ZiShu + "em";
            WangGeZheZhao.style.width = ZiShu + "em";
        }
        else {
            WangGeZheZhao.style.width = "27em";
        }
    } else {
        // YeMian.style.cssText = " ";
        WangGeZheZhao.style.cssText = " ";
    }
}
window.addEventListener("resize", gridLineDisplay);
gridLineDisplay();


// 下面是调整交互式段落宽度的
let ShuangQi_DuanLuo = document.getElementById("ZuoYouShuangQi-O");
let resizeFrame = document.getElementById("resize");
let slider = document.getElementById("paragraphWidth");
let changeFrameWidth = function () {
    let percentage = slider.value / 10;
    console.log(percentage);
    resizeFrame.style.width = percentage + "%";

    let size = resizeFrame.offsetWidth;
    console.log(size);
    // size = size.substring(0, size.length - 2);//去掉size后面的“px”
    let emSize;
    if (window.innerWidth > 680) {
        emSize = 20;
    } else {
        emSize = 15;
    }
    let ZiShu = Math.floor(size / emSize) - 120 / emSize;
    console.log(size, ZiShu)
    ShuangQi_DuanLuo.style.width = ZiShu + "em";
};

slider.addEventListener("input", changeFrameWidth);
window.addEventListener("resize", changeFrameWidth);
