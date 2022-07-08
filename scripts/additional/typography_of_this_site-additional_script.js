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
    let ZiShu = Math.floor(size / 20) - 1 - 0.5;
    if (size < 680) {
        // let HangChang = ZiShu * 20;
        // YeMian.style.width = ZiShu + "em";
        WangGeZheZhao.style.width = ZiShu + "em";
    } else {
        // YeMian.style.cssText = " ";
        WangGeZheZhao.style.cssText = " ";
    }
}
window.addEventListener("resize", gridLineDisplay);
gridLineDisplay();

let ShuangQi_DuanLuo = document.getElementById("ZuoYouShuangQi-O");
let resizeFrame = document.getElementById("resize-2");
let page=document.getElementById("page");
function ZuoYouShuangQi() {
    let size = resizeFrame.style.width;
    size=size.substring(0, size.length-2);//去掉size后面的“px”
    let ZiShu = Math.floor(size / 20) - 4;
    console.log(size, ZiShu)
    ShuangQi_DuanLuo.style.width = ZiShu + "em";
}
resizeFrame.addEventListener("mouseover", ZuoYouShuangQi);
resizeFrame.addEventListener("mousemove", ZuoYouShuangQi);
resizeFrame.addEventListener("mousedown", ZuoYouShuangQi);
page.addEventListener("mousemove", ZuoYouShuangQi);
page.addEventListener("touchstart", ZuoYouShuangQi);
page.addEventListener("touchmove", ZuoYouShuangQi);
ZuoYouShuangQi();