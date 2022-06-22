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
    let ZiShu = Math.floor(size / 20) - 1 -0.5;
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
