import popularStyles from "../styles/PopularNews.module.css";
const popularNews = [
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2024/12/-15122024-1734237483-1665066555--28102024-1730083022-219335717-299122-19102022-1666136412-1894119943-Tsas_guntiindawaa_gunt_(5)-122412-9393983041.jpeg",
    h3: " Цас орж, үзэгдэх орчин хязгаарлагдахыг анхааруулж байна",
    share: "1",
    min: " 1 цагийн өмнө",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2024/12/326270-23122024-1734926621-1424882697-tog_togtasralt-9-161210-13176783251.jpeg",
    h3: "Өнөөдөр цахилгаан таслах хуваарь",
    share: "50",
    min: "1 цаг 47 минутын өмнө",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/1000/np/2019/07/02/autobus32-122353-12711223431.jpeg",
    h3: "Нэгдүгээр сарын 1-нээс иргэд автобусанд 1000 төгрөг төлж зорчино",
    share: "48",
    min: "2 цаг 34 минутын өмнө",
  },
  {
    img: "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2024/12/326273-23122024-1734924694-1795735268-jkldg.jpg",
    h3: "Сар эсвэл Ангараг дээрх бидний ирээдүйн гэр ийм байх боломжтой гэв",
    share: "28",
    min: "2 цаг 4 минутын өмнө",
  },
];
const trendArr = [
  {
    num: "1",
    tittle: "   2025 оноос хэрэгжиж эхлэх ХУУЛЬ, ТОГТООЛУУД",
    share: "223",
    min: "  Өчигдөр",
  },
  {
    num: "2",
    tittle: "   2025 оноос хэрэгжиж эхлэх ХУУЛЬ, ТОГТООЛУУД",
    share: "223",
    min: "  Өчигдөр",
  },
  {
    num: "3",
    tittle: "   2025 оноос хэрэгжиж эхлэх ХУУЛЬ, ТОГТООЛУУД",
    share: "223",
    min: "  Өчигдөр",
  },
  {
    num: "4",
    tittle: "   2025 оноос хэрэгжиж эхлэх ХУУЛЬ, ТОГТООЛУУД",
    share: "223",
    min: "  Өчигдөр",
  },
  {
    num: "5",
    tittle: "   2025 оноос хэрэгжиж эхлэх ХУУЛЬ, ТОГТООЛУУД",
    share: "223",
    min: "  Өчигдөр",
  },
  {
    num: "6",
    tittle: "   2025 оноос хэрэгжиж эхлэх ХУУЛЬ, ТОГТООЛУУД",
    share: "223",
    min: "  Өчигдөр",
  },
  {
    num: "7",
    tittle: "   2025 оноос хэрэгжиж эхлэх ХУУЛЬ, ТОГТООЛУУД",
    share: "223",
    min: "  Өчигдөр",
  },
  {
    num: "8",
    tittle: "   2025 оноос хэрэгжиж эхлэх ХУУЛЬ, ТОГТООЛУУД",
    share: "223",
    min: "  Өчигдөр",
  },
  {
    num: "9",
    tittle: "   2025 оноос хэрэгжиж эхлэх ХУУЛЬ, ТОГТООЛУУД",
    share: "223",
    min: "  Өчигдөр",
  },
  {
    num: "10",
    tittle: "   2025 оноос хэрэгжиж эхлэх ХУУЛЬ, ТОГТООЛУУД",
    share: "223",
    min: "  Өчигдөр",
  },
];
export const PopularNews = () => {
  return (
    <div className={popularStyles.heroPopular}>
      <div className={popularStyles.popular}>
        <div className={popularStyles.tittle}>
          <div className={popularStyles.popularImg}>
            <img
              src="https://mgl.gogo.mn//newsn/v4/images/highlightnews.4812c9a7.png"
              alt=""
            />
          </div>
          <p>Онцлох мэдээ</p>
        </div>
        <div className={popularStyles.allPopNews}>
          {popularNews.map((news) => {
            return (
              <div className={popularStyles.popularContainer}>
                <div className={popularStyles.top}>
                  <img src={news.img} alt="" />
                </div>
                <div className={popularStyles.bot}>
                  <p className={popularStyles.h3}>{news.h3}</p>
                  <div className={popularStyles.icons}>
                    <div className={popularStyles.icons}>
                      <div className={popularStyles.share}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                        </svg>
                        <p>{news.share}</p>
                      </div>
                      <div className={popularStyles.min}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                        </svg>
                        <p>{news.min}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={popularStyles.trend}>
        <div className={popularStyles.tittle}>
          <img
            src="https://mgl.gogo.mn//newsn/v4/images/trend.43e0b806.png"
            alt=""
          />
          <h3 className={popularStyles.h3}> Тренд мэдээ</h3>
        </div>
        <div className={popularStyles.allTrendNews}>
          {trendArr.map((news) => {
            return (
              <div className={popularStyles.trendContainer}>
                <div className={popularStyles.left}>
                  <p className={popularStyles.leftP}>{news.num}</p>
                </div>
                <div className={popularStyles.right}>
                  <p className={popularStyles.rightP}>{news.tittle}</p>
                  <div className={popularStyles.icons}>
                    <div className={popularStyles.icons}>
                      <div className={popularStyles.share}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                        </svg>
                        <p>{news.share}</p>
                      </div>
                      <div className={popularStyles.min}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                        </svg>
                        <p>{news.min}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
