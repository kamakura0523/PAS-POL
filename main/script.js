const footer__button = document.querySelector(".footer__button");

//pagetopをクリックしたら、ページ上部へスムーズに移動する部分

// .pagetopをクリックしたら
footer__button.addEventListener("click", scroll_top);
// ページ上部へスムーズに移動
function scroll_top() {
window.scroll({ top: 0, behavior: "smooth" });
}