import Herostyles from "../styles/HeroNews.module.css";
export const HeroNews = () => {
  return (
    <div className={Herostyles.heronews}>
      <div className={Herostyles.heroleft}>
        <div className={Herostyles.tittle}>
          <p>Улс төр</p>
        </div>
        <div className={Herostyles.h2}>
          <h2>2025 оноос хэрэгжиж эхлэх ХУУЛЬ, ТОГТООЛУУД</h2>
        </div>
        <div className={Herostyles.p}>
          Эх орны шимт хөрсөнд ургасан бүхнийг органик хүнс гэж боддог байв.
          Тиймээс ч хүнсний дэлгүүр бүрээс органик ногоо авч болно хэмээн
          итгэдэг байлаа. Гэвч энэ бодол маань ташаа байсныг, яагаад бүх хүнс
          органик биш вэ гэдгийг мэдсэнээ хүргэж байна. Лангуун дээрх ногоо
          бүхэн органик биш ...
        </div>
        <div className={Herostyles.icon}>
          <div className={Herostyles.share}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
            </svg>
            <p>0</p>
          </div>
        </div>
      </div>
      <div className={Herostyles.heroRight}>
        <div className={Herostyles.rightImg}>
          <img
            src="https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2024/12/326191-19122024-1734593986-1022467717-zurag-261.jpg"
            alt=""
          />
          <p className={Herostyles.imgHover}>Дэлгэрэнгүй унших</p>
        </div>
      </div>
    </div>
  );
};
