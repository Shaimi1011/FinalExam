let slideIndexRanking = 0; // 當前圖片索引
let timerRanking = null;   // 自動播放計時器
let manualTimeoutRanking = null; // 手動操作的延遲計時器

// 顯示熱門排行榜圖片的函數
function showSlidesRanking(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // 確保索引循環
    if (n >= slides.length) slideIndexRanking = 0;
    if (n < 0) slideIndexRanking = slides.length - 1;

    // 隱藏所有圖片
    for (let slide of slides) slide.style.display = "none";
    for (let dot of dots) dot.className = dot.className.replace(" active", "");

    // 顯示當前圖片和激活相應的圓點
    slides[slideIndexRanking].style.display = "block";
    dots[slideIndexRanking].className += " active";
}

// 啟動自動播放
function autoplayRanking() {
    clearTimeout(timerRanking); // 確保舊的計時器被清除
    timerRanking = setTimeout(() => {
        slideIndexRanking++;
        showSlidesRanking(slideIndexRanking);
        autoplayRanking(); // 遞歸調用，實現循環播放
    }, 3000); // 每 3 秒切換一次
}

// 停止自動播放並延遲恢復
function stopAutoplayRanking() {
    clearTimeout(timerRanking); // 停止自動播放
    clearTimeout(manualTimeoutRanking); // 清除手動延遲計時器

    // 設置 3 秒後恢復自動播放
    manualTimeoutRanking = setTimeout(() => {
        autoplayRanking();
    }, 3000);
}

// 手動操作：切換到上一張或下一張圖片
function plusSlides(n) {
    stopAutoplayRanking(); // 暫停自動播放
    showSlidesRanking(slideIndexRanking += n); // 切換圖片
}

// 手動操作：直接切換到指定圖片
function currentSlide(n) {
    stopAutoplayRanking(); // 暫停自動播放
    showSlidesRanking(slideIndexRanking = n); // 切換圖片
}

// 初始化
document.addEventListener("DOMContentLoaded", () => {
    showSlidesRanking(slideIndexRanking); // 初始化顯示第一張圖片
    autoplayRanking(); // 啟動自動播放
});

// 活動廣告部分
let slideIndexActivity = 0; // 活動廣告的當前圖片索引
let timerActivity = null;   // 定時器

function showSlidesActivity(n) {
    const slides = document.getElementsByClassName("carousel-item");

    if (n >= slides.length) slideIndexActivity = 0;
    if (n < 0) slideIndexActivity = slides.length - 1;

    for (let slide of slides) slide.style.display = "none";

    slides[slideIndexActivity].style.display = "block";
}

// 活動廣告自動播放
function autoplayActivity() {
    const slides = document.getElementsByClassName("carousel-item");
    slideIndexActivity++;
    if (slideIndexActivity >= slides.length) slideIndexActivity = 0;
    showSlidesActivity(slideIndexActivity);
    timerActivity = setTimeout(autoplayActivity, 3000); // 每3秒切換一次
}

// 啟動活動廣告自動播放
document.addEventListener("DOMContentLoaded", () => {
    showSlidesActivity(slideIndexActivity); // 初始顯示第一張
    autoplayActivity(); // 啟動自動播放
});
