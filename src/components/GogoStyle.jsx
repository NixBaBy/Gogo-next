import gogostyle from "../styles/gogoStyle.module.css";
const gogostyleArr = [
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/510/images/c/2024/12/326099-17122024-1734407410-339667464-0N2A33001.jpg",
    tittle:
      "  Г.Мишээл: Би буцаж ирж төслөө заавал дуусгана гэж бүжигчдэдээ амласны дагу...",
    share: "2",
    comment: "13",
    key: "1",
  },
  {
    img: "https://mgl.gogo.mn/newsn/images/ck/2024/12/11/467748002_1168452751355862_7973548431715925727_n-155125-444667390.jpeg",
    tittle: "Та 17.00-22.00 цагийн хооронд хязгаарлах боломжтой үйлдлүүд...",
    share: "4",
    comment: "5",
    key: "1",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2024/12/325835-09122024-1733733601-733928945-malgai1.jpg",
    tittle:
      " ЗӨВЛӨГӨӨ: Хүйтэнд малгай өмсөхгүй бол хараа муудаж, нулимс гоождог болох ",
    share: "122",
    comment: "2",
    key: "1",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2024/12/325729-06122024-1733452984-24763154-nominerdene1-215401-159668920720241205215407.jpeg",
    tittle:
      "Б.Номин-Эрдэнэ: Сэтгэл гутраад байна гэх хүмүүс олон болжээ. Гэвч энэ хэвийн зүйл ",
    share: "87",
    comment: "17",
    key: "1",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/325972-12122024-1733987443-166226999-675a7c3fe90d113800221673.jpg",
    tittle:
      "BNEF: 2024 оны дэлхийн цахилгаан автомашины нийлүүлэлт 26 хувиар өсөж...",
    share: "14",
    comment: "2",
    key: "2",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/325853-10122024-1733792900-1682986715-4800.jpg",
    tittle:
      "Google хэдэн сая жил шаардлагатай асуудлыг 5 минутад шийдэх чипээ...",
    share: "6",
    comment: "6",
    key: "2",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/325753-06122024-1733459815-889429080-f19231e1-9e37-458f-9115-f5d7f5f29319.jpg",
    tittle:
      "BNEF: БНЭУ ногоон технологийн санхүүжилтээр БНХАУ-ыг гүйцэж, дэлхийд...",
    share: "3",
    comment: "0",
    key: "2",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/325672-04122024-1733302862-438209611-B.Bat-Ulzii_0411.JPG",
    tittle: "“Их өгөгдөлтэй болсноор цаг үеэ олсон зөв шийдвэр гаргадаг болно”",
    share: "7",
    comment: "10",
    key: "2",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/1000/comic/2023/06/21/3773/comic-153411-688093610.jpeg",
    tittle: "Нэг өрөөнд хамт хэвтсэн энэ хэцүү хүний ДАТА ДУУСААСАЙ",
    share: "125",
    comment: "0",
    key: "3",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/1000/comic/2023/05/03/3772/hugjliin_bank-184555-1805228234.jpeg",
    tittle: "Хөгжлийн банкны шүүгдэгчдийн хөөрхийлөлтэй мэдүүлгүүд",
    share: "28",
    comment: "0",
    key: "3",
  },
];
export const GogoStyle = () => {
  return (
    <div className={gogostyle.gogoStyle}>
      <div className={gogostyle.sectionTittle}>
        <p>GoGo</p>
        <p>Хэв Маяг</p>
      </div>
      <div className={gogostyle.gogoStyleContainers}>
        {gogostyleArr
          .filter((news) => news.key == 1)
          .map((news) => {
            return (
              <div className={gogostyle.styleContainer}>
                <div className={gogostyle.styleContainerImg}>
                  <img src={news.img} alt="" />
                </div>
                <div className={gogostyle.styleContainerBot}>
                  <h2>{news.tittle}</h2>
                  <div className={gogostyle.line}></div>
                  <div className={gogostyle.icon}>
                    <div className={gogostyle.share}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                      </svg>
                      <p>{news.share}</p>
                    </div>
                    <div className={gogostyle.comment}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
                      </svg>
                      <p>{news.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className={gogostyle.sectionTittle2}>
        <img
          src="https://mgl.gogo.mn//newsn/v4/images/tech.a4b28dbb.png"
          alt=""
        />
        <p>Технологи </p>
      </div>
      <div className={gogostyle.gogoStyleContainers2}>
        {gogostyleArr
          .filter((news) => news.key == 2)
          .map((news) => {
            return (
              <div className={gogostyle.styleContainer}>
                <div className={gogostyle.styleContainerImg}>
                  <img src={news.img} alt="" />
                </div>
                <div className={gogostyle.styleContainerBot}>
                  <h2>{news.tittle}</h2>
                  <div className={gogostyle.line}></div>
                  <div className={gogostyle.icon}>
                    <div className={gogostyle.share}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                      </svg>
                      <p>{news.share}</p>
                    </div>
                    <div className={gogostyle.comment}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
                      </svg>
                      <p>{news.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className={gogostyle.sectionTittle3}>
        <img
          src="https://mgl.gogo.mn//newsn/v4/images/comic.9afb6d5b.png"
          alt=""
        />
        <p>Комик</p>
      </div>
      <div className={gogostyle.gogoStyleContainers2}>
        {gogostyleArr
          .filter((news) => news.key == 3)
          .map((news) => {
            return (
              <div className={gogostyle.styleContainer3}>
                <div className={gogostyle.styleContainerImg3}>
                  <img src={news.img} alt="" />
                </div>
                <div className={gogostyle.styleContainerBot3}>
                  <h2>{news.tittle}</h2>
                  <div className={gogostyle.line}></div>
                  <div className={gogostyle.icon}>
                    <div className={gogostyle.share}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                      </svg>
                      <p>{news.share}</p>
                    </div>
                    <div className={gogostyle.comment}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
                      </svg>
                      <p>{news.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
