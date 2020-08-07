import baseImg from '@/assets/logo.png';
// 創建一個監聽器
let observer = new IntersectionObserver((entries) => {
  // entries是所有被監聽對象的集合
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 當被監聽元素到臨界值且未加載圖片時觸發。
      !entry.target.isLoaded && showImage(entry.target, entry.target.data_src);
    }
  });
});
function showImage(el, imgSrc) {
  const img = new Image();
  img.src = imgSrc;
  img.onload = () => {
    el.src = imgSrc;
    el.isLoaded = true;
  };
}

export default {
  // 這裡用inserted和bind都行，因為IntersectionObserver時異步的，以防意外還是用inserted好一點
  // inserted和bind的區別在於inserted時元素已經插入頁面，能夠直接獲取到dom元素的位置信息。
  inserted(el, binding) {
    // 初始化時展示默認圖片
    el.src = baseImg;
    // 將需要加載的圖片地址綁定在dom上
    el.data_src = binding.value;
    observer.observe(el);
  },
  unbind() {
    // 停止監聽
    observer.disconnect();
  },
};
